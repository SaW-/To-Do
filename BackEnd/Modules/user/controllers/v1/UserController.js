var UserService = require("../../services/UserService.js");


exports.signup = (req, res) => {
  
  req.checkBody('name', 'Required').notEmpty();
  req.checkBody('email', 'Check email').isEmail();
  req.checkBody('password', 'Required').notEmpty();
  req.checkBody('provider', 'Required').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({error: errors });
  } else {
    UserService.signup(req.body).then(user=>{
      return res.status(201).json(user);
      if(typeof(user.error) !== "undefined"){
        return res.status(500).json(user);
      }else{
        return res.status(201).json(user);
      }
    })
  }
};


exports.signin = (req, res) => {
  
  req.checkBody('Subject', 'Required').notEmpty();
  req.checkBody('comment', 'Required').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({error: errors });
  } else {
  }
};


