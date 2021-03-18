// Create a temps array here
temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];

// End of temps array

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  // only change code below this line

  for (var i = 0; i < newTemps.length; i++) {
    var perDay = 0;
    for (var j = 0; j < newTemps[i].length; j++) {
      perDay += newTemps[i][j] / newTemps[j].length;
    }
    averageDayTemp.push(perDay);
  }

  // Only change code above this line
  return averageDayTemp;
}

console.log(myArrayFunction(temps)); // Change this line

module.exports = myArrayFunction;
