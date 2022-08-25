const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const result = await productService.getAll();
  if (result.length > 0) {
    return res
      .status(200)
      .json(result);
  }
  return res
    .status(404)
    .json({ message: 'Product not found' });
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await productService.findById(+id);
  console.log(result);
  if (!result) {
    return res
      .status(404)
      .json({ message: 'Product not found' });
  }
  return res
    .status(200)
    .json(result[0]);
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
  res.status(201).json(result);
  return res
    .status(500)
    .json({ message: 'deu ruim' });
};

module.exports = {
  getAll,
  findById,
  create,
  deleteId,
};