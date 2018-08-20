var TodoRepository = require("../repositories/TodoRepository.js");
var mail = require("../../../utilities/mail.js");

exports.listAll = (userId) => {
    return TodoRepository.listAll(userId).then((todos)=>{
        return todos;
        }
    );
}

exports.showById = (id) => {
    return TodoRepository.getOne(id).then((todo)=>{
        return todo;
        }
    );
}

exports.create = (data,userId) => {
    data.user_id = userId;
    return TodoRepository.create(data).then((todo)=>{
        return todo;
        }
    );
}

exports.update = (id,data,userData) => {

    return TodoRepository.update(id,data,userData.userId).then((todo)=>{
        mail.send(userData.email,"You Have update in "+data.Subject+" Subject");
        return todo;
        }
    );
}

exports.delete = (id,userId) => {
    return TodoRepository.delete(id,userId).then((todo)=>{
        return todo;
        }
    );
}
  
return module.exports;