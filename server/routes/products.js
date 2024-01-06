var express = require('express');
var router = express.Router();
//const {productsList} = require('../constants/const');
const [productsList, test] = require('../constants/const');
const ProductsController = require('../controller/ProductsController');


/* GET users listing. */
// http://localhost:4000/products/all
router.get('/all', ProductsController.getAllProducts);


module.exports = router;


