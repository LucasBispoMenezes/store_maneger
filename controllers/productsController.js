const productService = require('../services/productService');

const getAll = async (_req, res) => {
  try {
    const result = await productService.getAll();
    if (result.length > 0) {
      return res
        .status(200)
        .json(result);
    }
    return res
      .status(404)
      .json({ message: 'Product not found' });
  } catch (error) {
    console.log(error.message, error.code, 'getAll controller');
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await productService.findById(+id);
    if (result.length > 0) {
      return res
        .status(200)
        .json(result[0]);
    }
    return res
      .status(404)
      .json({ message: 'Product not found' });
  } catch (error) {
    console.log(error.message, error.code, 'findById Product');
  }
};

module.exports = {
  getAll,
  findById,
};