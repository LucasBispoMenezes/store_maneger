const saleModel = require('../models/salesModel');

const createSale = async () => {
  const result = await saleModel.createSale();
  return result.insertId;
};

module.exports = {
  createSale,
};