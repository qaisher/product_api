const Product = require('../models/product');
const logger = require('./logger');
const findOwner = require('../services/find_owner');

exports.updateMyProduct = (req, res) => {

    const productId = req.params.id;

    Product.findById(productId)
        .then((result) => {
            if (result.owner === findOwner.extractOwner(req)) {
                console.log(req.body);
                console.log(productId);
                console.log(result);
                //Product.updateOne({ _id: productId }, req.body);
                result.update(req.body);
                result.update()
                res.send(result);
                //logger.productLogger.log('info', 'product updated successfully');
            }
            else {
                res.send('Unauthorized access!');
            }
        })

        .catch(err => {

            res.send(err);
            //logger.productLogger.log('erro', 'product updated failed');
            console.log(err);
        });
}