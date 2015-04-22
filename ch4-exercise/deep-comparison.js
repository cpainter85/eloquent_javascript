var deepEqual = function(a, b) {
  if (a === b) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var propsInA = 0, propsInB =0;

    for (var x in a) {
      propsInA +=1;
    }

  	for (var y in b) {
        propsInB +=1;
      }

    if (propsInA !== propsInB) {
      return false;
    }

    for (var z in a) {
      if (!deepEqual(a[z], b[z])) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// if props are the same -> true
//are value for props the same -> true
// Alex's solution - very elegant and efficient
// function deepEqual(value1, value2) {
//   if (value1 === value2) {return true;}
//   if (value1 == null || value2 == null) {return false;}
//
//   if (typeof value1 === 'object' || typeof value2 === 'object') {
//     if (Object.keys(value1).length !== Object.keys(value2).length) {return false;}
//     for (var i in value1) {
//       if (!deepEqual(value1[i], value2[i])) {return false;}
//     }
//     return true;
//   }
//   return false;
// }
