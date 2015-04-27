
var TextCell = function (text) {
  this.text = text.split("\n");
};

var repeat = function(string , times) {
  var result = "";
  for (var i = 0; i < times; i++) {
    result += string;
  }
 return result;
};

// Your code here.
var StretchCell = function(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
};

StretchCell.prototype.minWidth =  function () {
  var longestCell = 0;
  for (var i = 0; i < this.inner.text.length; i++) {
    if (this.inner.text[i].length > longestCell) {
      longestCell = this.inner.text[i].length;
    }
  }
  return Math.max(this.width, longestCell);
};

StretchCell.prototype.minHeight = function () {
  return Math.max(this.height, this.inner.text.length);
};

StretchCell.prototype.draw = function (width, height) {
  result = [];
  for (var i = 0; i < height; i++) {
    var line = this.inner.text[i] || '';
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};


var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

/*
var sc = new StretchCell(new TextCell("abc\nefgh"), 1, 2);
//console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(4, 3));
*/
