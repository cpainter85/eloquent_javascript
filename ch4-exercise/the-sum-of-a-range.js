var range = function (start, finish) {
  var result = [];
  for (var i = start; i <= finish; i++) {
    result.push(i);
  }
  return result;
}

var sum = function (range) {
  var result = 0;
  for (var i = 0; i < range.length; i++) {
    result += range[i];
  }
  return result;
}
