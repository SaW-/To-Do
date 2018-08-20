var UserRepository = require("../repositories/UserRepository.js");
var jwt = require('jsonwebtoken');
var config = require('../../../config');

exports.signup = (data) => {
    return UserRepository.findUserByEmail(data.email).then((user)=>{
            if(user){
                return {error:'mail exits'}
            }else{
                return UserRepository.create(data).then((user)=>{
                    return user;
                });
            }
        }
    );
}

exports.signin = (data) => {
    return UserRepository.findUserByEmail(data.email).then((user)=>{
            if(!user){
                return {error:'mail not found'}
            }else{
                return user.validPassword(data.password,user.password,user).then(isMatched =>{
                    if(isMatched){
                        var token = jwt.sign({ email:user.email,userId:user.id }, config.JWT.key);
                        return user.toJSON(token);
                    }else{
                        return {error:'password wrong'}
                    }
                });
            }
        }
    );
}

return module.exports;