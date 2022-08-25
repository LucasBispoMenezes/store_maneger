const productRote = require('express').Router();
const productController = require('../controllers/productsController');
const validate = require('../middlewares/validate');

productRote.get('/', productController.getAll);
productRote.get('/:id', productController.findById);
productRote.put('/:id', validate.create, productController.updateProduct);
productRote.post('/', validate.create, productController.create);
productRote.delete('/:id', productController.deleteId);

module.exports = productRote;