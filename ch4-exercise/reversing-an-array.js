var reverseArray = function (array) {
  var result = [];
  for (var index = 0; index < array.length; index++){
    result.unshift(array[index]);
  }
  return result;
}
