const pl = require('tau-prolog');
require('tau-prolog/modules/lists')(pl);
const fs = require('fs');
const path = require('path');

const knowledgeBasePath = path.join(__dirname, 'knowledgeBase.pl');

function loadKnowledgeBase(session) {
  const kb = fs.readFileSync(knowledgeBasePath, 'utf8');
  session.consult(kb, {
    success: () => {},
    error: (err) => { throw new Error('Error cargando la base de conocimiento: ' + err); }
  });
}

exports.runPrologQuery = (query) => {
  return new Promise((resolve, reject) => {
    const session = pl.create(1000);
    try {
      loadKnowledgeBase(session);
    } catch (e) {
      return reject(e);
    }
    session.query(query, {
      success: () => {
        session.answer({
          success: (answer) => resolve(pl.format_answer(answer)),
          fail: () => resolve('false.'),
          error: (err) => reject(new Error(err)),
          limit: () => reject(new Error('Limit exceeded'))
        });
      },
      error: (err) => reject(new Error(err))
    });
  });
};
