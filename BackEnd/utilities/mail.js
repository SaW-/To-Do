var Mailgun = require('mailgun-js');
var config = require('../config');

exports.send = (to,data)=>{
    var api_key = config.mailgun.api_key;
    var domain = config.mailgun.domain;
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});

    var data = {
    //Specify email data
      from: config.mailgun.from,
    //The email to contact
      to: to,
    //Subject and text data  
      subject: 'Hello from ToDo',
      html: data
    }

    mailgun.messages().send(data, function (err, body) {
        if (err) {
            console.log("got an error: ", err);
        }
        else {
            console.log(body);
        }
    });
}