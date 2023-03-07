const Product = require('../models/product');
const logger = require('./logger');

exports.getProductsByUserId = (req, res) => {

    const userId = req.params.userId;
    
    Product.find({owner: userId})
        .then((result) => {

            res.send(result);
            //logger.productLogger.log('info', 'success');
            //res.render('productById', { pageTitle: 'Display Product by ID', result });
        })
        .catch((err) => {

            res.send(err);
            console.log(err);
            //logger.productLogger.log('error', 'error getting product by id');
            
        })

};