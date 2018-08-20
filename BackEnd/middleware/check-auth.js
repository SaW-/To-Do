var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = (req, res, next)=>{
    try{
        var token = req.headers.authorization.split(" ")[1];
        var decoded = jwt.verify(token, config.JWT.key);
        req.userData = decoded;
        next();
    }catch(err){
        return res.status(401).json({error:"Auth failed"})
    }
}