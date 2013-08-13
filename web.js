var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var html = fs.readFileSync(htmlfile).toString('utf-8');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
