var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var buffer = new Buffer("Hello World 3", "utf-8")

   response.send(buffer);
  //response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
