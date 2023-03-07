const Product = require('../models/product');
const logger = require('./logger');

exports.updateProduct = (req, res) => {

    const id = req.params.id;
   
    Product.updateOne({_id : id}, req.body)
    .then(result => {

        res.send(result);
        //logger.productLogger.log('info', 'product updated successfully');
    })
    .catch(err => {
        
        res.send(err);
        //logger.productLogger.log('erro', 'product updated failed');
        console.log(err);
    });
}