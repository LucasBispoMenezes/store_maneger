const productRote = require('express').Router();
const productController = require('../controllers/productsController');
const validate = require('../middlewares/validate');

productRote.get('/', productController.getAll);
productRote.get('/:id', productController.findById);
productRote.post('/', validate.create, productController.create);

module.exports = productRote;