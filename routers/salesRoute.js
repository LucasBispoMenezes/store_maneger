const SaleRote = require('express').Router();
const saleController = require('../controllers/saleController');
const validateSend = require('../middlewares/validateSale');
// console.log(validateSend);
SaleRote.post('/', validateSend, saleController.createSale);

module.exports = SaleRote;