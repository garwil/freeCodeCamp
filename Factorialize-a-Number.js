// Return the factorial of a number e.g. 5! == 1 * 2 * 3 * 4 * 5

function factorialize(num) {

var numbers = [];
var factor = 1;
for (var i = 1; i<=num; i++){
  numbers.push(i);
}
  
for (var j = 0; j < numbers.length; j++) {
  factor *= numbers[j];

}
return factor;
}
