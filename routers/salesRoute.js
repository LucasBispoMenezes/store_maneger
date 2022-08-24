const SaleRote = require('express').Router();
// const validate = require('../middlewares/validateSale');
const salecontroller = require('../controllers/salecontroller');

SaleRote.post('/', salecontroller.createSale);

module.exports = SaleRote;