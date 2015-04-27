// Your code here.
var ArraySeq = function(array) {
  return array;
};

var RangeSeq = function(start, end) {
  var array = [];
  for (var num = start; num <= end; num++) {
    array.push(num);
  }
  return array;
};

var logFive = function(array) {
  if (array.length < 5) {
    for (var i=0; i < array.length; i++) {
    	console.log(array[i]);
    }
  }
  else {
    for (var i=0; i<5; i++) {
    	console.log(array[i]);
    }
  }
};

//console.log(new RangeSeq(5,10));
//console.log(new ArraySeq([1,2]));
logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
