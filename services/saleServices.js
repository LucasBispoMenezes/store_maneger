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

module.exports = {
  createSale,
  createProductSale,
};