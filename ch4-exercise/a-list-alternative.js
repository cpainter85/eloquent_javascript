/* result:
{
  value: 'a',
  rest: {
    value: 'b',
    rest: {
      value: 'c',
      rest: null
    }
  }
};
*/
var input = ['a', 'b', 'c'];

var result = {};
var i = 0;

result.value = input[i];
result.rest = {};
i++;
result.rest.value = input[i];
result.rest.rest = {};
i++;
result.rest.rest.value = input[i];
result.rest.rest.rest = null;



console.log(result);
