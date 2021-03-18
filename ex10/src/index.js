// Only change code below this line

function mySplice(arr1, arr2, n) {
  for (var i = arr1.length; i-- > 0; ) {
    arr2.splice(n, 0, arr1[i]);
    n++;
  }
  return arr2;
}

// Only change code above this line

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));

module.exports = mySplice;
