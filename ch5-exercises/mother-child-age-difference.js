// var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

var hasMother = ancestry.filter(function(person) {
  return byName[person.mother] != null;
});

var ageDifference = hasMother.map(function(person) {
	return person.born - byName[person.mother].born;
});

console.log(average(ageDifference));


// → 31.2
