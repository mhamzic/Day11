// Create a temps array here

myPetsArray = ["Dog", "Cat"];

// End of temps array

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];

  // only change code below this line

  myNewPets.push("Bird", "Fish");

  firstPet = myNewPets.shift();
  lastPet = myNewPets.pop();

  myNewPets.unshift("Lion");

  console.log(firstPet);
  console.log(lastPet);

  // Only change code above this line
  return myNewPets;
}

console.log(myArrayFunction(myPetsArray)); // Change this line

module.exports = myArrayFunction;
