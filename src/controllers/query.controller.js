const { inferQuery } = require('../services/prolog.service');
const { formatResult } = require('../utils/formatter');

exports.handleQuery = async (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ success: false, error: 'Query is required.' });
  }
  try {
    const result = await inferQuery(query);
    res.json({ success: true, result: formatResult(result) });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
