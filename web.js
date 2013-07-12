var express = require('express');
var fs = require('fs');

var helloFile = fs.readFileSync('index.html');
var hello = helloFile.toString('utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hello);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
