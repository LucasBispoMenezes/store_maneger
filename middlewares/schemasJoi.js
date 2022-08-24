const joi = require('joi');

const validateCreator = joi.object({
  name: joi.string().required().min(5),
});

const validateSend = joi.object({
  productId: joi.number().required().messages({
    'any.required': '400|"productId" is required',
  }),
  quantity: joi.number().required().min(1).messages({
    'number.min': '442|"quantity" must be greater than or equal to 1',
    'any.required': '400|"quantity" is required',
  }),
});
module.exports = {
  validateCreator,
  validateSend,
};