var TodoRepository = require("../repositories/TodoRepository.js");
var MsgQueueRepository = require("../repositories/MsgQueueRepository.js");
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

exports.create = (data,userData) => {
    data.user_id = userData.userId;
    return TodoRepository.create(data).then((todo)=>{
        if(todo.reminder){
            var msg = {
                subject:todo.Subject,
                todoId:todo.id,
                reminder:todo.reminder,
                to:userData.email
            }
            return MsgQueueRepository.create(msg).then((todo)=>{
                return todo;
                });
        }else{
            return todo;
        }
    });
}

exports.update = (id,data,userData) => {

    return TodoRepository.update(id,data,userData.userId).then((todo)=>{
        var msg = {
            subject:data.Subject,
            todoId:data.id,
            reminder:data.reminder,
            to:userData.email
        }
        return MsgQueueRepository.update(id,msg).then((queue)=>{
            mail.send(userData.email,"You Have update in "+data.Subject+" Subject");
            return todo;
            });
        });
}

exports.delete = (id,userId) => {
    return TodoRepository.delete(id,userId).then((todo)=>{
        return MsgQueueRepository.delete(id).then((queue)=>{
            return todo;
            });
        }
    );
}
  
return module.exports;