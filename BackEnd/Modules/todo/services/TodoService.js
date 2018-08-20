var TodoRepository = require("../repositories/TodoRepository.js");


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

exports.update = (id,data,userId) => {
    return TodoRepository.update(id,data,userId).then((todo)=>{
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