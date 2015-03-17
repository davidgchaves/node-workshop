// Every property attached to the exports object
// becomes the public interface for the logger module
exports.info = function(msg) {
  console.log(new Date() + ': ' + msg);
};

exports.error = function(msg) {
  console.error(new Date() + ': ' + msg);
};

