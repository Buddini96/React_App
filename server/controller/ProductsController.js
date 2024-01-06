const [productsList] = require('../constants/const');

const ProductsController = {
    getAllProducts: function(req, res, next) {
        // console.log("awa")
        res.send(productsList);
    }
}

module.exports = ProductsController;