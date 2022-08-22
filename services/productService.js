const productModel = require('../models/productModel');

const getAll = async () => {
  try {
    const result = await productModel.getAll();
    if (result.length > 0) return result;
    return false;
  } catch (error) {
    console.log(error.message, error.code, 'getAll service');
  }
};
const findById = async (id) => {
  try {
    const result = await productModel.findById(id);
    if (result.length > 0) return result;
    return false;
  } catch (error) {
    console.log(error.message, error.code, 'findById Product');
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
create('arroz');

module.exports = {
  getAll,
  findById,
  create,
};