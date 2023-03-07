const UserProfile = require('../models/user-profile');
const UserCred = require('../models/user-cred');
const logger = require('./logger');
const { result } = require('lodash');
const { application } = require('express');

exports.addUser = (req, res) => {

    const userProfile = new UserProfile(req.body);

    userProfile.save()
        .then((result) => {

            res.send(result);

            const userCred = new UserCred({
                userId: result.id,
                email: result.email,
                password: result.password,
                admin: result.admin
            });

            userCred.save()
                .then((result) => {
                    console.log(result);
                });

            
            //logger.userLogger.log('info', 'user added successfully');
        })
        .catch((err) => {
            res.send(err);
            //logger.userLogger.log('error', 'error adding logger');
        })

}