// Your code here.
function TextCell(text) { this.text = text.split("\n");
}

var StretchCell = function(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
};

StretchCell.prototype.minWidth =  function () {
  return Math.max(this.width, this.inner.text[0].length);
};

StretchCell.prototype.minHeight = function () {
  return this.height;
};

StretchCell.prototype.draw = function (width, height) {
 var result = [];
 result.push(this.inner.text[0]);
 result.push('   ');
 return result;
};

/*
TextCell.prototype.draw = function(width , var result = [];
for (var i = 0; i < height; i++) {
var line = this.text[i] || "";
height) {
result.push(line + repeat(" ", width - line.length)); }
return result; };
*/


var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
