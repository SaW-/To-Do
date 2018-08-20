var UserRepository = require("../repositories/UserRepository.js");


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

return module.exports;