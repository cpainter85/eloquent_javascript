var range = function (start, finish, step) {
  var result = [];
  if (arguments.length === 2 && start < finish) {
    var step = 1
  }
  else if (arguments.length ===2 && start > finish) {
    var step = -1
  }
  if (step > 0) {
    for (var i = start; i <= finish; i+=step) {
      result.push(i);
    }
  }
  else {
    for (var i = start; i >= finish; i+=step) {
      result.push(i);
    }
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
