var express = require('express');
var router = express.Router();
//const {productsList} = require('../constants/const');
const [productsList, test] = require('../constants/const');


/* GET users listing. */
// http://localhost:4000/products/all
router.get('/all', function(req, res, next) {
  res.send(productsList);
});

module.exports = router;
