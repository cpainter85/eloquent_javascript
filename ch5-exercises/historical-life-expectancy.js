// var ancestry = JSON.parse(ANCESTRY_FILE);
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var assignAgeToCentury = function (array) {
  var centuries = {};

  for (var i = 0; i < array.length; i++) {
    if (centuries[Math.ceil(array[i].died / 100)]) {
    	centuries[Math.ceil(array[i].died / 100)] = centuries[Math.ceil(array[i].died / 100)].concat([array[i].died-array[i].born]);
    }
    else {
      centuries[Math.ceil(array[i].died / 100)] = [array[i].died-array[i].born];
    }
  }
  return centuries;
};

var lifeExpectancy = function (centuriesWithAges) {
  var centuriesWithLifeExpectancy = {};
  for (var prop in centuriesWithAges) {
  	centuriesWithLifeExpectancy[prop] = average(centuriesWithAges[prop]);
  }
  return centuriesWithLifeExpectancy;
};

console.log(lifeExpectancy(assignAgeToCentury(ancestry)));

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94



/*
var assignPersonToCentury = function (array) {
  var centuries = {};

  for (var i = 0; i < array.length; i++) {
    if (centuries[Math.ceil(array[i].died / 100)]) {
    	centuries[Math.ceil(array[i].died / 100)] = centuries[Math.ceil(array[i].died / 100)].concat([array[i]]);
    }
    else {
      centuries[Math.ceil(array[i].died / 100)] = [array[i]];
    }
  }
  return centuries;
};
*/
