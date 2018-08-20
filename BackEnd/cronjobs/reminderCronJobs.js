
var cron = require('node-cron');
var models = require("../models");
var moment = require('moment');
var mail = require("../utilities/mail.js");

exports.reminders = ()=>{
    

    cron.schedule("* * * * *", function() {
        console.log("running a task every minute");
        models.msgQueue.findAll({
            where: {
                reminder: {
                    $between: [ moment().subtract(1, 'hours').toDate(),  moment().toDate()]
                }
            }
    
          }).then(msgQueues => {
            msgQueues.forEach(function(value){
                mail.send(value.to,"You Have update in "+value.Subject+" Subject"); // should use queue
                models.msgQueue.destroy({
                    where: {
                      todoId: value.todoId
                    }
                  }).then(result  => {
                    
                  });
              });
          });
    });
}