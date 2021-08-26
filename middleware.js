const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    try{
        let token = req.header('token');
        if(!token){
            return res.send('Token Not found');
        }
        let decode = jwt.verify(token,'jwtsecret');
        req.user = decode.user
        next();
    }
    catch(error){
        console.log(error);
        return res.send('Invalid token')
    }
}