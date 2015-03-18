var express = require('express');

// You need to (install and) require most of the Express Middleware
var bodyParser = require('body-parser');

// The express object itself is a function,
// it an be called to create a new express app.
var app = express();

// Mounting Middleware in an Express App with 'use'
//  BEWARE: 'use' applies this Middleware to every request
// bodyParser.urlencoded -> parses the resquest
app.use(bodyParser.urlencoded({ extended: true }));

// Routing (GET) with callback sending JSON as the response
app.get('/', function(request, response) {
  response.send({ message: 'hello world from express' });
});

// Routing (POST) grabbing a request parameter
// and sending it back as a JSON response
app.post('/doStuff', function(request, response) {
  //var param = request.body['message'];
  var param = request.body.message;
  response.send({ message: param });
});

// Starts the app:
//  - Creates an HTTP Server
//  - Starts listening on port 3000
app.listen(3000);

