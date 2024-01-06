var express = require('express');
var router = express.Router();
//const {productsList} = require('../constants/const');
const [productsList, test] = require('../constants/const');
const ProductsController = require('../controller/ProductsController');


/* GET users listing. */
// http://localhost:4000/products/all
router.get('/all', ProductsController.getAllProducts);
router.post('/save', ProductsController.saveProduct);

//thani product ekkata data retrieve krna vidiya
router.get('/find/:id', ProductsController.getProduct);//localhost:4000/products/find/1
router.put('/update/:id',ProductsController.updateProduct);
router.delete('/delete/:id', ProductsController.deleteProduct);


module.exports = router;


