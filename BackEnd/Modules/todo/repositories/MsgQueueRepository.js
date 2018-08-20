var models = require("../../../models");

exports.listAll = () => {
  return models.msgQueue.findAll().then(msgQueues => {
    return msgQueues;
  });
}

exports.create = (msgQueue) => {
  return models.msgQueue.create(msgQueue).then(msgQueue => {
    return msgQueue;
  });
}

exports.update = (id,data) => {
  return models.msgQueue.update(
    data,
    { where: { 
      todoId: id
     } }
  ).then(result  => {
    return result;
  });
}

exports.delete = (id) => {
  return models.msgQueue.destroy({
    where: {
      todoId: id
    }
  }).then(result  => {
    return result;
  });
}

return module.exports;