const saleServices = require('../services/saleServices');

const createSale = async (req, res) => {
  const sales = req.body;
  const id = await saleServices.createSale();
  console.log(sales);
  const retorno = sales.map(({
    productId, quantity,
  }) => saleServices.createProductSale({ id, productId, quantity }));
  const result = {
    id,
    itemsSold: sales,
  };
  const ret = Promise.all(retorno);
  console.log(await ret);
  const total = (await ret).every((bool) => bool === true);
  if (total) {
    console.log('aqio');
    return res.status(201).json(result);
  }
};
const getAll = async (_req, res) => {
  const result = await saleServices.getAll();
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
