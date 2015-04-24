// [[1,2],[3,4],[5,6]]
//
// typeof
//
// var flatten = function(array) {
//   var result = [];
//   forEach(array, function(element) {}
//     if Array.isArray(array)
//   }
// }


var flatten = function(array, result) {
  array.forEach(function(elem) {
    if (Array.isArray(elem)) {
      flatten(elem, result);
    } else {
      result.push(elem);
    }
  });
  return result;
};

console.log(flatten([[1,2],[3,4],[5,6]],[]));
