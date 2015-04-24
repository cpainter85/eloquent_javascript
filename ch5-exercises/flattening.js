var arrays = [[1, 2, 3], [4, 5], [6]];

var flatten = function (array) {
  var newArray = array.reduce(function (carry, element) {
    return carry.concat(element);
  });
  return newArray;
};

console.log(flatten(arrays));
