const verify = require('jsonwebtoken/verify');

exports.checkToken = (req, res, next) => {
    let token = req.get('authorization');

    if(token){
        
        token =  token.slice(7);

        verify(token, 'my_secret_key', (err, decoded) => {
            if(err){
                res.send('Invalid token');
            }
            else{
                next();
            }
        })
    }
    else{
        res.send('Unauthorized access!');
    }
}