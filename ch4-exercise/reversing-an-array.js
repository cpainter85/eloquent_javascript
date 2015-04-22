var reverseArray = function (array) {
  var result = [];
  for (var index = 0; index < array.length; index++){
    result.unshift(array[index]);
  }
  return result;
};

var reverseArrayInPlace = function(array) {
  for (var index = 0; index < Math.floor(array.length/2); index ++){
    var value_holder = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = value_holder;
  }
  return array;
};
