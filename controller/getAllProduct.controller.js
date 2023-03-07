const Product = require('../models/product');
const logger = require('./logger');


exports.getAllProducts = (req, res) => {

    const token = req.get('authorization').slice(7);
    const tokenPayload = token.split('.')[1];
    const decodedPayload = JSON.parse(global.atob(tokenPayload));
    const owner = Object.values(decodedPayload)[0].id;

    Product.find({owner: owner})
        .then((result) => {
          
            res.send(result);
            //logger.productLogger.log('info', 'success');
            //res.render('allProducts', { pageTitle: 'All Products Page', result })
        })
        // .catch((err) => {

        //     res.send(err);
        //     logger.productLogger.log('error', 'error fetching data');
        //     console.log(err);
        // })

};