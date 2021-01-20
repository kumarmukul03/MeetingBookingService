const ct = require('countries-and-timezones');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  const timezone = ct.getTimezonesForCountry(id);

  res.send({
    "data": req.data
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
