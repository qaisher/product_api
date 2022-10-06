const Product = require('../models/product');
const logger = require('./logger');


exports.deleteOne = (req, res) => {

    const id = req.params.id;


    Product.findByIdAndDelete(id)
        .then(result => {
           
            res.send(result);
            logger.productLogger.log('info', 'item deleted successfully');
        })
        .catch(err => {

            res.send(err);
            logger.productLogger.log('error', 'error deleting item');
            console.log(err);
        })
};



exports.deleteAll = (req, res) => {

    Product.deleteMany({})
    .then(result => {

        logger.productLogger.log('info', 'all products deleted successfully');
        res.send(result);
    })
    .catch((err) => {
        
        res.send(err);
        logger.productLogger.log('error', 'error deleting all products');
        console.log(err);
    });
};