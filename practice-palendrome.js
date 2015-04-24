var palindrome = function(string) {
  var string = string.toLowerCase().trim()
  if (string.length > 1) {
    if (string[0] === string[string.length -1] ) {
      newString = string.slice(1, -1);
      return palindrome(newString);
    }
    else {
      return false;
    }
  }
  return true;
}

console.log(palindrome('Murder for a jar of red rum'));
