const { has } = require('lodash');
const UserProfile = require('../models/user-profile');
const logger = require('./logger');

exports.updateUser = (req, res) => {

    const id = req.params.id;
   
    UserProfile.updateOne({_id : id}, req.body)
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