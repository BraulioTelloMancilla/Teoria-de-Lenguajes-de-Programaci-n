const { runPrologQuery } = require('../prolog/engine');

exports.inferQuery = async (query) => {
  return await runPrologQuery(query);
};
