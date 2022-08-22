const productRote = require('express').Router();
const productController = require('../controllers/productsController');
const { validateCreator } = require('../middlewares/validate');

productRote.get('/', productController.getAll);
productRote.get('/:id', productController.findById);
productRote.post('/', validateCreator, productController.create);

module.exports = productRote;