const saleServices = require('../services/saleServices');

function retorno(arr, id) {
  return arr.map(({
    productId, quantity,
  }) => saleServices.createProductSale({ id, productId, quantity }));
}

const createSale = async (req, res) => {
  const sales = req.body;
  const idSale = await saleServices.createSale();
  const result = {
    id: idSale,
    itemsSold: sales,
  };
  console.log(await Promise.all(retorno(sales, idSale)));
  const ret = Promise.all(retorno(sales, idSale));
  console.log(await ret);
  const total = (await ret).every((bool) => bool === true);
  console.log(await total);
  if (total) {
    return res.status(201).json(result);
  }
};
const getAll = async (_req, res) => {
  const result = await saleServices.getAll();
  console.log(result);
  return res.status(200).json(result);
};
const findByID = async (req, res) => {
  const { id } = req.params;
  const result = await saleServices.findByID(+id);
  console.log(result);
  if (result === null) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(result);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const result = await saleServices.deleteSale(id);
  if (result === null) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(204).end();
};

module.exports = {
  createSale,
  getAll,
  findByID,
  deleteSale,
};
