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

const findByID = async (id) => {
  const QUERY = `
    SELECT
    S.date AS date,
    SP.product_id AS productId,
    SP.quantity AS quantity
    FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS S
    ON S.id = SP.sale_id
    WHERE S.id = ?;
    `;
  const [result] = await connection.execute(QUERY, [id]);
  return result;
};

const getAll = async () => {
  const QUERY = `SELECT sale_id AS saleId, date, product_id AS productId, quantity
             FROM StoreManager.sales_products
            INNER JOIN StoreManager.sales
            WHERE StoreManager.sales.id = StoreManager.sales_products.sale_id
            ORDER BY StoreManager.sales_products.sale_id ASC,
             StoreManager.sales_products.product_id ASC;
  `;
  const [result] = await connection.execute(QUERY);
  console.log(result);
  return result;
};

module.exports = {
  createSale,
  createProductSale,
  findByID,
  getAll,
};