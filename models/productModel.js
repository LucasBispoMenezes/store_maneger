const connection = require('./connection');

const getAll = async () => {
  const QUERY = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(QUERY);
  return products;
};
const findById = async (id) => {
  const QUERY = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [products] = await connection.execute(QUERY, [id]);
  return products;
};
const create = async (name) => {
  const QUERY = 'INSERT INTO StoreManager.products(name) VALUES(?)';
  const [result] = await connection.execute(QUERY, [name]);
  return result;
};
const updateProduct = async (id, name) => {
  const QUERY = `
    UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?;
    `;
  const [result] = await connection.execute(QUERY, [name, id]);
  return result;
};

const deleteId = async (id) => {
  const QUERY = 'DELETE FROM StoreManager.products WHERE id = ?';
  const [result] = await connection.execute(QUERY, [id]);
  return result;
};

module.exports = {
  getAll,
  findById,
  create,
  updateProduct,
  deleteId,
};