function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.print = function() { console.log('Point: (' + this.x + ',' + this.y + ')'); };

// Exporting the instantiable Point object
module.exports = Point;

