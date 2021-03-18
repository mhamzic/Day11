// Create a temps array here

monitorsListArray = ["Apple", "Peach", "Berry"];

// End of temps array

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  var monitorsList = [];
  var index = 1;
  // only change code below this line
  for (var i = 0; i < newMonitorsList.length; i++) {
    itemToAdd = newMonitorsList[i];
    monitorsList.push([itemToAdd, index]);
    index++;
  }
  // Only change code above this line
  return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray)); // Change this line

module.exports = myMonitorsFunction;
