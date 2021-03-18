// only change code below this line

someArr = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

function largestNumFromArr(arr) {
  var maxNumArray = [];

  //   for (var i = 0; i < someArr.length; i++) {
  //     for (var j = 0; j < someArr[i].length; j++) {
  //       if (arr[i][j] > maxNumArray[i]) {
  //         maxNumArray[i] = arr[i][j];
  //       }
  //     }
  //   }

  for (var i = 0; i < someArr.length; i++) {
    var largest = 0; //set subarray largest element to 0
    for (var j = 0; j < someArr[i].length; j++) {
      largest = Math.max(largest, arr[i][j]); // compares stored largest number with current number, stores the largest one
    }
    maxNumArray.push(largest); // add largest to maxNumArray
  }
  return maxNumArray;
}

// Only change code above this line

console.log(largestNumFromArr(someArr)); // Change this line

module.exports = largestNumFromArr;
