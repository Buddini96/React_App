var express = require('express');
var router = express.Router();
const productsList = require('../constants/const')

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.send(productsList);
});

module.exports = router;
