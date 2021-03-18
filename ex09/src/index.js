// Only change code below this line

function myBouncer(arr) {
  newTrueOnlyArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (
      arr[i] != false &&
      arr[i] != null &&
      arr[i] != undefined &&
      !Number.isNaN(arr[i])
    ) {
      newTrueOnlyArr.push(arr[i]);
    }
  }
  return newTrueOnlyArr;
}

// Only change code above this line

console.log(myBouncer([7, "ate", "", false, 9])); // Change this line
console.log(myBouncer(["a", "b", "c"])); // Change this line
console.log(myBouncer([false, null, undefined, 0, NaN, ""])); // Change this line

module.exports = myBouncer;
