const connection = require('./connection');

const getAll = async () => {
  const QUERY = 'SELECT * FROM StoreManager.products';
  try {
    const [products] = await connection.execute(QUERY);
    return products;
  } catch (error) {
    console.log(error.message, error.code, 'getAll Product');
  }
};
const findById = async (id) => {
  const QUERY = 'SELECT * FROM StoreManager.products WHERE id = ?';
  try {
    const [products] = await connection.execute(QUERY, [id]);
    return products;
  } catch (error) {
    console.log(error.message, error.code, 'findById model');
  }
};
const create = async (name) => {
  const QUERY = 'INSERT INTO StoreManager.products(name) VALUES(?)';
  const [result] = await connection.execute(QUERY, [name]);
  return result;
};

module.exports = {
  getAll,
  findById,
  create,
};