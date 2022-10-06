const Product = require('../models/product');
const logger = require('./logger');


exports.getAllProducts = (req, res) => {

    Product.find()
        .then((result) => {
          
            res.send(result);
            logger.productLogger.log('info', 'success');
            //res.render('allProducts', { pageTitle: 'All Products Page', result })
        })
        .catch((err) => {

            res.send(err);
            logger.productLogger.log('error', 'error fetching data');
            console.log(err);
        })

};