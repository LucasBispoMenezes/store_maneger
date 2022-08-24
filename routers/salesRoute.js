const SaleRote = require('express').Router();
const validate = require('../middlewares/validateSale');

SaleRote.post('/', validate.validateSend);

module.exports = SaleRote;