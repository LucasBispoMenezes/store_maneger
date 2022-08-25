const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const result = await productService.getAll();
  if (!result) {
    return res
      .status(404)
      .json({ message: 'Product not found' });
  }
  return res
    .status(200)
    .json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await productService.findById(+id);
  if (!result) {
    return res
      .status(404)
      .json({ message: 'Product not found' });
  }
  return res
    .status(200)
    .json(result[0]);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await productService.updateProduct(id, name);
  if (result === null) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json({ id, name });
};

const deleteId = async (req, res) => {
  const { id } = req.params;
  const result = await productService.deleteId(+id);
  if (result.affectedRows !== 1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(204).end();
};

const create = async (req, res) => {
  const { name } = req.body;
  const result = await productService.create(name);
  return res.status(201).json(result);
};

module.exports = {
  getAll,
  findById,
  create,
  updateProduct,
  deleteId,

};