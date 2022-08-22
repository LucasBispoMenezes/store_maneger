/* eslint-disable no-useless-escape */
const validateCriator = require('./schemasJoi');

const create = (req, res, next) => {
  const { name } = req.body;
  const { error } = validateCriator.validateCreator
    .validate({ name });
  if (error) {
    if (error.message.includes('required')) {
      return res.status(400).json({ message: '"name" is required' });
    }
    return res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  create,
};