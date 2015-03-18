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

// Creating our own Middleware
function authUser(request, response, next) {
  var user = { name: 'David', admin: true };
  // Attach the user to the request so future handlers can access the info
  request.user = user;
  // when done, go on to the next configured Middleware or Route handler
  next();
}

// Mounting our own Middleware to be used by every request
app.use(authUser);

// Routing (GET) with callback sending JSON as the response
app.get('/', function(request, response) {
  response.send({ message: 'hello world from express' });
});

// Routing (POST) grabbing a request parameter
// and sending it back as a JSON response
app.post('/doStuff', function(request, response) {
  //var param = request.body['message'];
  var param = request.body.message;
  response.send({ message: param, isAdmin: request.user.admin });
});

// Starts the app:
//  - Creates an HTTP Server
//  - Starts listening on port 3000
app.listen(3000);

