var TodoRepository = require("../repositories/TodoRepository.js");


exports.listAll = () => {
    return TodoRepository.listAll().then((todos)=>{
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

exports.create = (data) => {
    return TodoRepository.create(data).then((todo)=>{
        return todo;
        }
    );
}

exports.update = (id,data) => {
    return TodoRepository.update(id,data).then((todo)=>{
        return todo;
        }
    );
}

exports.delete = (id) => {
    return TodoRepository.delete(id).then((todo)=>{
        return todo;
        }
    );
}
  
return module.exports;