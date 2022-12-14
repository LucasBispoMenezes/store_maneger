const saleModel = require('../models/salesModel');

const createSale = async () => {
  const result = await saleModel.createSale();
  return result.insertId;
};

const createProductSale = async (obj) => {
  const result = await saleModel.createProductSale(obj);
  if (result.affectedRows) {
    return true;
  }
};

const findByID = async (id) => {
  const result = await saleModel.findByID(id);
  if (result.length === 0) return null;
  return result;
};

const getAll = async () => {
  const result = await saleModel.getAll();
  return result;
};
const deleteSale = async (id) => {
  const result = await saleModel.deleteSale(id);
  if (result.affectedRows === 0) {
    return null;
  }
  return result.affectedRows;
};

module.exports = {
  createSale,
  createProductSale,
  getAll,
  findByID,
  deleteSale,
};