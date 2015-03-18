var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

// Render our home page with all blog posts
router.get('/', function(request, response) {
  Post.find(function(err, posts) {
    if (err) { response.send(500, 'There was an error - tough luck.'); }
    else { response.render('index', { posts: posts }); }
  });
});

// Render a form to enter a new post
router.get('/new', function(request, response) {
  response.render('new', {});
});

// Create a new blog post object
router.post('/create', function(request, response) {
  var post = new Post({
    title: request.body.title,
    content: request.body.content
  });

  post.save(function(err, model) {
    if (err) { response.send(500, 'There was an error - tough luck.'); }
    else { response.redirect('/'); }
  });
});

module.exports = router;
