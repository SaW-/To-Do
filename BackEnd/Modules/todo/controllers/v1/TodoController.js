var TodoService = require("../../services/TodoService.js");

exports.index = (req, res) => {
  TodoService.listAll().then(todos=>{
    return  res.json(todos);
  });
};

exports.show = (req, res) => {
  TodoService.showById(req.params.id).then(todo=>{
    if (!todo)
      return res.status(404).json({error:"Not found"});
    return res.json(todo);
  })
};

exports.store = (req, res) => {
  
  req.checkBody('Subject', 'Required').notEmpty();
  req.checkBody('comment', 'Required').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({errors: errors });
  } else {
    TodoService.create(req.body).then(todo=>{
      if (!todo)
        return res.status(400).json({error:"error"});
      return res.status(201).json(todo);
    })
  }

  
};