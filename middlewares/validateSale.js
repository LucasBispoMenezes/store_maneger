const schema = require('./schemasJoi');

const validateSend = (req, res, _next) => {
  const sales = req.body;
  const result = sales.map((obj) => {
    const { error } = schema.validateSend.validate(obj);
    if (!error) {
      return true;
    }
    res.status(400)
      .json({ message: error.message });
    return false;
  });
  const total = result.reducer((prev, curr) => prev + curr, 0);
  console.log(total);
};

module.exports = validateSend;