var arrays = [[1, 2, 3], [4, 5], [6]];

var flatten = function (array) {
  var newArray = array.reduce(function (a, b) {
    return a.concat(b);
  });
  return newArray
};

console.log(flatten(arrays));
