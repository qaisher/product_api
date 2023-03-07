const Product = require('../models/product');
const logger = require('./logger');
const findOwner = require('../services/find_owner');


exports.deleteMyProduct = (req, res) => {

    const id = req.params.id;

    Product.findById(id)
        .then(result => {
            if (result == null) {
                res.send('Product not found!');  //owner validation needs to be done prior to this

            }

            else {

                if (result.owner === findOwner.extractOwner(req)) {

                    result.delete();
                    res.send(result);

                }
                else {
                    res.send('Access denied!');
                }
            }

            //logger.productLogger.log('info', 'item deleted successfully');
        })
        .catch(err => {

            res.send(err);
            //logger.productLogger.log('error', 'error deleting item');
            console.log(err);
        })
};