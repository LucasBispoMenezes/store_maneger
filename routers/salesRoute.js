const SaleRote = require('express').Router();
const saleController = require('../controllers/saleController');
const validate = require('../middlewares/validateSale');
// console.log(validateSend);
SaleRote.post('/', validate.validateSend, saleController.createSale);
SaleRote.get('/:id', saleController.findByID);
SaleRote.get('/', saleController.getAll);

module.exports = SaleRote;