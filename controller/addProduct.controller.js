const Product = require('../models/product');
const logger = require('./logger');


exports.createProduct = (req, res) => {
    
    const product = new Product(req.body);
    product.save()
        .then((result) => {

            res.send(result);
            logger.productLogger.log('info', 'product added successfully');
            //res.redirect('/allProducts');
        })
        .catch((err) => {
            
            res.send(err);
            logger.productLogger.log('error', 'error adding product');
            console.log(err);
        })
};