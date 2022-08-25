const productModel = require('../models/productModel');

const getAll = async () => {
  const result = await productModel.getAll();
  if (result.length > 0) return result;
  return false;
};
const findById = async (id) => {
  try {
    const result = await productModel.findById(id);
    if (result.length > 0) return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const create = async (name) => {
  const result = await productModel.create(name);
  if (result) {
    return {
      id: result.insertId,
      name,
    };
  }
};

const deleteId = async (id) => {
  const result = await productModel.deleteId(id);
  return result;
};

module.exports = {
  getAll,
  findById,
  create,
  deleteId,
};