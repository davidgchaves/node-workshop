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
  // TODO: How do we store session data on the request?  How do we continue with the request chain?
};

// Handle GET request to root URL
router.get('/', session, function(request, response) {
  // TODO: How do we render the "index.ejs" template from the /views directory?
});

router.post('/login', function(request, response) {
  // Update our session state with the username submitted by the form
  sessionInfo.name = request.body.username;

  // TODO: How do we send the user back to "/" after the request?
  response.CHANGEME('/');
});

module.exports = router;
