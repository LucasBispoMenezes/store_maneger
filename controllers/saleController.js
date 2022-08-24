const saleServices = require('../services/saleServices');

function retorno(arr, id) {
  return arr.map(({
    productId, quantity,
  }) => saleServices.createProductSale({ id, productId, quantity }));
}

const createSale = async (req, res) => {
  console.log('cheguei');
  try {
    const sales = req.body;
    const idSale = await saleServices.createSale();
    const result = {
      id: idSale,
      itemsSold: sales,
    };
    const ret = Promise.all(retorno(sales, idSale));
    if (await ret) return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'deu merda' });
  }
};
module.exports = {
  createSale,
};