var UserService = require("../../services/UserService.js");


exports.signup = (req, res) => {
  
  req.checkBody('name', 'Required').notEmpty();
  req.checkBody('email', 'Check email').isEmail();
  req.checkBody('password', 'Required').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({errors: errors });
  } else {
  }
};


exports.signin = (req, res) => {
  
  req.checkBody('Subject', 'Required').notEmpty();
  req.checkBody('comment', 'Required').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({errors: errors });
  } else {
  }
};


