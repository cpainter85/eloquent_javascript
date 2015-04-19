var countBs = function(string) {
  var count = 0;

  for(var index = 0; index < string.length; index ++) {
    if (string.charAt(index) === 'B') {
      count++;
    }
  }
  return count;
}

var countChar = function(string, character) {
  var count = 0;

  for(var index = 0; index < string.length; index ++) {
    if (string.charAt(index) === character) {
      count++;
    }
  }
  return count;
}
