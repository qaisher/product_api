const Product = require('../models/product');
const logger = require('./logger');

exports.getPublishedProducts = (req, res) => {

    Product.find()
        .then((result) => {

            let publishedProducts = [];
            
            for(let i = 0; i< result.length; i++){

                if(result[i].published){

                    publishedProducts.push(result[i]);
                }
            }
            res.send(publishedProducts);
            //logger.productLogger.log('info', 'success published products only');
            //res.render('published', { pageTitle: 'All Products Page', result })
        })
        .catch((err) => {

            res.send(err);
            //logger.productLogger.log('error', 'error getting published products');
            console.log(err);
        })

};