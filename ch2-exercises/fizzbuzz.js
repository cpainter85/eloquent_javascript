for(var number = 1; number <= 100; number ++) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
  }
  else if (number % 3 === 0) {
    console.log('Fizz');
  }
  else if (number % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(number);
  }
}

//Andreas solution below:

var fizzBuzz = function () {
  for (var i =1; i<= 100; i++) {
    var output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
};

fizzBuzz();
