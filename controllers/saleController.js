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
  const ret = Promise.all(retorno(sales, idSale));
  const total = (await ret).every((bool) => bool === true);
  if (total) {
    return res.status(201).json(result);
  } 
};
module.exports = {
  createSale,
  retorno,
};

/* try {
  const sales = req.body;
  const idSale = await saleServices.createSale();
  const result = {
    id: idSale,
    itemsSold: sales,
  };
  const ret = Promise.all(retorno(sales, idSale));
  const total = (await ret).every((bool) => bool === true)
  console.log(total);
  if (total) {
    return res.status(201).json(result);
  };
} catch (error) {
  console.log(error);
} */