var express = require('express');
var router = express.Router();

// Store "session" information.
// Check the following link to see how to actually store sessions in a cookie:
// https://github.com/expressjs/cookie-session
var sessionInfo = {
  name:'Guest'
};

// Create session middleware
var session = function(request, response, next) {
  request.sessionInfo = sessionInfo;
  next();
};

// Handle GET request to root URL
router.get('/', session, function(request, response) {
  response.render('index', { name: request.sessionInfo.name });
  // another way
  //response.render('index', request.sessionInfo);
});

router.post('/login', function(request, response) {
  sessionInfo.name = request.body.username;
  response.redirect('/');
});

module.exports = router;
