const connection = require('./connection');

const getAll = async () => {
  const QUERY = 'SELECT * FROM products';
  try {
    const [products] = await connection.execute(QUERY);
    return products;
  } catch (error) {
    console.log(error.message, error.code, 'getAll Product');
  }
};
const findById = async (id) => {
  const QUERY = 'SELECT * FROM products WHERE id = ?';
  try {
    const [products] = await connection.execute(QUERY, [id]);
    return products;
  } catch (error) {
    console.log(error.message, error.code, 'findById model');
  }
};
module.exports = {
  getAll,
  findById,
};