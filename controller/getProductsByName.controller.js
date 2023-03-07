const Product = require('../models/product');
const logger = require('./logger');

exports.getProductsByName = (req, res) => {

const searchQuery = (Object.values(req.query)[0]);

Product.find()
.then((result) => {

    const responseArray = [];

    for(product of result){

        if(product.name == searchQuery){
            responseArray.push(product);
        }
    }

    if(responseArray.length == 0){
        res.send(`No product found with name ${searchQuery}!`);
    }
    
    res.send(responseArray);
    
    
})
.catch(err => {

    // res.send(err);
    //logger.productLogger.log('error', 'error getting product by name');
    console.log(err);
})

};