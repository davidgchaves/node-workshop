var express = require('express');
var router = express.Router();
var Post = require('./models/Post');

// Render our home page with all blog posts
router.get('/', function(request, response) {

  // TODO: How do we get a list of all model objects using a mongoose model?
  Post.CHANGEME(function(err, posts) {
    if (err) { response.send(500, 'There was an error - tough luck.'); }
    else { response.render('index', { posts:posts }); }
  });
});

// Render a form to enter a new post
router.get('/new', function(request, response) {
  response.render('new', {});
});

// create a new blog post object
router.post('/create', function(request, response) {
  // TODO: Create and save a Post model
  var post = CHANGEME();

  // TODO: Save the model
  post.CHANGEME(function(err, model) {
    if (err) { response.send(500, 'There was an error - tough luck.'); }
    else { response.redirect('/'); }
  });
});

module.exports = router;
