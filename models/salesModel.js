const connection = require('./connection');

const createSale = async () => {
  const QUERY = 'INSERT INTO StoreManager.sales VALUES()';
  const [result] = await connection.execute(QUERY);
  return result;
};
const createProductSale = async ({ id, productId, quantity }) => {
  const QUERY = `INSERT INTO 
      StoreManager.sales_products(sale_id, product_id, quantity)
      VALUES(?, ?, ?)`;
    const [result] = await connection.execute(QUERY, [id, productId, quantity]);
    return result;
};

module.exports = {
  createSale,
  createProductSale,
};