// Require mongoose
var mongoose = require('mongoose');

var config      = require('../config.js'),
    mongoDBConn = config.mongoDBConn;

// Configure connection URL (only needs to happen once per app)
mongoose.connect(mongoDBConn);

// Create a database schema for our Post object, which will describe both it's
// data and it's behavior.
var postSchema = mongoose.Schema({
    title: String,
    content: String
});

// Create a model object constructor that will have ODM functionality like .save()...
var Post = mongoose.model('Post', postSchema);

// Expose out model as the module interface
module.exports = Post;
