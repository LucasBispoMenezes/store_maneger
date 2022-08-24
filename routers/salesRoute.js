const SaleRote = require('express').Router();
// const validate = require('../middlewares/validateSale');
const saleController = require('../controllers/saleController');

SaleRote.post('/', saleController.createSale);

module.exports = SaleRote;