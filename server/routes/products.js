var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.send(
      [
        {
          "id" : 1,
          "name" : "Spinach",
          "price" : "200",
          "currency" : "LKR",
          "image" : "spinach.webp"
        },

        {
          "id" : 2,
          "name" : "Tomatoes",
          "price" : "540",
          "currency" : "LKR",
          "image" : "tomato.webp"
        },

        {
          "id" : 3,
          "name" : "Beans",
          "price" : "375",
          "currency" : "LKR",
          "image" : "beans.jpg"
        }
      ]
  );
});

module.exports = router;
