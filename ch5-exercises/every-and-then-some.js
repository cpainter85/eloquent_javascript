var every = function (array, predicate_function) {
  for (var i = 0; i < array.length; i++ ) {
    if (!predicate_function(array[i])) {
      return false;
    }
  }
  return true;
};

var some = function (array, predicate_function) {
  for (var i =0; i < array.length; i++ ) {
    if (predicate_function(array[i])) {
      return true;
    }
  }
  return false;
};
