// Only change code below this line

function myMutation(arr) {
  let searchString = arr[1].toLowerCase();
  let targetString = arr[0].toLowerCase();
  for (let i = 0; i < searchString.length; i++) {
    if (targetString.indexOf(searchString[i]) < 0) return false;
  }
  return true;
}

// Only change code above this line

console.log(myMutation(["hello", "hey"])); // Change this line
console.log(myMutation(["hello", "Hello"])); // Change this line
console.log(myMutation(["Mary", "Army"])); // Change this line
console.log(myMutation(["ate", "Date"])); // Change this line

module.exports = myMutation;
