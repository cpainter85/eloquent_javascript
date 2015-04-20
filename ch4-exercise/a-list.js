var arrayToList = function (array) {
  var list = null;
  for (var index = array.length -1; index >= 0; index--) {
    list = {value: array[index], rest: list};
  }
  return list;
};

var listToArray = function (list) {
  var array = [];
  for (var listSection = list; listSection; listSection = listSection.rest){
    array.push(listSection.value);
  }
  return array;
};

var prepend = function(element, list) {
  return {value: element, rest: list};
};

var nth = function(list, position) {
  for (var index = 0; index < position; index++) {
    if (list.rest !== null){
    	list = list.rest;
    }
    else {
      return undefined;
    }
  }
  return list.value;
};
