// Creating our own Middleware
exports.authUser = function authUser(request, response, next) {
  var user = { name: 'David', admin: true };
  // Attach the user to the request so future handlers can access the info
  request.user = user;
  // when done, go on to the next configured Middleware or Route handler
  next();
}

