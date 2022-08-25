const schema = require('./schemasJoi');
const productService = require('../services/productService');

const validateSend = async (req, res, next) => {
  const sales = req.body;
  try {
    await Promise.all(sales.map(async (sale) => {
      const validate = schema.validateSend.validate(sale);
      const { error, value } = validate;
      if (error) throw error;
      const idValidate = await productService.findById(sale.productId);
      if (idValidate === undefined) throw new Error('404|Product not found');
      return value;
    }));
    next();
  } catch (error) {
        return res
          .status(Number(error.message.split('|')[0]))
          .json({ message: error.message.split('|')[1] });
      }
};
module.exports = { validateSend };