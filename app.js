var express = require('express');
var app = express();

app.get('/zain', function(req, res) {
  res.send({
    "Output": "Hello Zain!"
  });
});

app.get('/rasheed', function(req, res) {
  res.send({
    "Output": "Hello Rasheed!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
