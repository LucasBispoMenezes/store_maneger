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
    return res
      .status(500)
      .json({ message: 'deu ruin' });
  }
};

const create = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await productService.create(name);
    res.status(201).json(result);
  } catch (error) {
    console.log(error.message, 'create controller');
    return res
      .status(500)
      .json({ message: 'deu ruim' });
  }
};

module.exports = {
  getAll,
  findById,
  create,
};