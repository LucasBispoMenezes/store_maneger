const joi = require('joi');

const validateCreator = joi.object({
  name: joi.string().required().min(5),
});

module.exports = {
  validateCreator,
};