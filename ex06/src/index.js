// only change code below this line

var someArray = [[2], [5, 6, 7], [8, 9]];
var someArray2 = [[2.5, 2], [0.5, 0.2], [8]];
var someArray3 = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9],
];

function multiplyArrayFunction(myArray) {
  var product = 1;
  var sum = 0;
  arr = [];
  for (i = 0; i < myArray.length; i++) {
    for (j = 0; j < myArray[i].length; j++) {
      sum += myArray[i][j];
      product *= myArray[i][j];
    }
  }
  arr.push(product, sum);
  return arr;
}

// Only change code above this line

console.log(multiplyArrayFunction(someArray)); // Change this line
console.log(multiplyArrayFunction(someArray2)); // Change this line
console.log(multiplyArrayFunction(someArray3)); // Change this line

module.exports = multiplyArrayFunction;
