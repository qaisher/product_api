const jwt = require('jsonwebtoken');
const UserCred = require('../models/user-cred');

exports.userLogin = (req, res) => {

    const user = {
        userId: req.body.userId,
        password: req.body.password
    }

    UserCred.findOne({ userId: user.userId })
        .then(result => {

            console.log(result);
            if (result !== null) {

                if (result.password !== user.password) {
                    res.send('Invalid credentials!');
                }
                else {
                    const token = jwt.sign({ user }, 'my_secret_key');
                    res.send(token);
                }

            }
            else {
                res.send('Invalid credentials!');
            }

        })
        .catch(err => {
            console.log(err);
        })

}