var models = require('../models');

exports.send = function(req, res) {

  console.log(req.body);

  var message = new models.Message({
      email: req.body.email,
      content: req.body.content,
      created: Date.now()
  });

  message.save(function(err, data) {
    if (err) console.log(err);
  });

  res.redirect('/');

};
