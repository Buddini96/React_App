const [productsList] = require('../constants/const');
const Product = require('../model/products');

const ProductsController = {
    getAllProducts: async function (req, res, next) {
       try {
           // console.log("awa")
           //res.send(productsList);
           const productList = await Product.find(); //find kiyna method ekn okkom data tika get krnnn (get all)
           res.status(200).json(productList);
       }catch (error){
           console.error(error);
           res.status(500).json({error:
                   'Something Went Wrong'});
       }
    },
    saveProduct: async function (req, res, next) {
        try {
            //save product ekedi mulim krnn ona client req krn a data tika catch krnwa
            const productData = req.body;

            //product js kiyl hada gtta model eka product eka save krnwa (create method use krnne data save krnn)
            const product = await Product.create(productData);
            res.status(200).json(product);

        }catch (error) {
            console.error(error);
            res.status(500).json({error:
            'Something Went Wrong'});
        }
    },

    getProduct: async function (req, res, next) {
        try {
            //ena id eka catch krna vidiya
            const productId = req.params.id;

            //pass wena id eka 1 nm 1 id eka filter karagani
            const product = await Product.find({id: productId});

            res.status(200).json(product);
        }catch (error) {
            console.error(error);
            res.status(500).json({
                error:
                    'Something Went Wrong'
            });
        }
    },

    // updateProduct: function (req, res, next) {
    //     try {
    //         const productId = req.params.id;
    //         const productData = req.body;
    //
    //         const UpdatedProduct = Product.findOneAndUpdate({    //update by id
    //                 id: productId
    //             }, productData,
    //             {new: true}); //update krna ek return wennd epada
    //
    //         if (!UpdatedProduct) {
    //             return res.status(404).json({error: 'Product Not Found'});
    //         }
    //
    //         // upadated product ek json ekt yawanawa
    //         res.status(200).json(UpdatedProduct);
    //
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({
    //             error:
    //                 'Something Went Wrong'
    //         });
    //     }
    // },


    updateProduct: async function (req, res, next) {
        try {
            const productId = req.params.id;
            const productData = req.body;
            const updatedProduct = await Product.findOneAndUpdate({id: productId}, productData, {new: true}); // updated product eka return true
            if (!updatedProduct) {
                return res.status(404).json({error: 'product not found'});
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            console.log("Error ", error);
            res.status(500).json({error: "Something went wrong"});
        }
    },

    async deleteProduct  (req, res, next) {
        try {
            const productId = req.params.id;
            const result = await Product.deleteOne({id: productId});

            if(result.deleteCount === 0) {
                return res.status(404).json({error: 'Product Not Found'});
            }

            res.status(200).json('Product Deleted Successfully');
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error:
                    'Something Went Wrong'
            });
        }
    }


}

module.exports = ProductsController;