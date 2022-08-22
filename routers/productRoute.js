const productRote = require('express').Router();
const productController = require('../controllers/productsController');

productRote.get('/', productController.getAll);
productRote.get('/:id', productController.findById);
productRote.post('/', productController.create);

module.exports = productRote;