const pl = require('tau-prolog');
require('tau-prolog/modules/lists')(pl);
const fs = require('fs');
const path = require('path');

const knowledgeBasePath = path.join(__dirname, 'knowledgeBase.pl');

function loadKnowledgeBase(session) {
  const kb = fs.readFileSync(knowledgeBasePath, 'utf8');
  console.log("Contenido de knowledgeBase.pl:", kb);
  return new Promise((resolve, reject) => {
    session.consult(kb, {
      success: () => resolve(),
      error: (err) => reject(new Error('Error cargando la base de conocimiento: ' + err))
    });
  });
}

exports.runPrologQuery = async (query) => {
  const session = pl.create(1000);
  await loadKnowledgeBase(session);
  return new Promise((resolve, reject) => {
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
