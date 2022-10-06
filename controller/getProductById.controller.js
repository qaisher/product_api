const Product = require('../models/product');
const logger = require('./logger');

exports.getProductById = (req, res) => {

    const id = req.params.id;
    
    Product.findById(id)
        .then((result) => {

            res.send(result);
            logger.productLogger.log('info', 'success');
            //res.render('productById', { pageTitle: 'Display Product by ID', result });
        })
        .catch((err) => {

            res.send(err);
            logger.productLogger.log('error', 'error getting product by id');
            console.log(err);
        })

};