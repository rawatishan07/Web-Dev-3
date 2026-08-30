// random dice generator using crypto module

// importing the crypto module
const crypto = require("crypto");

// importing the fs module used to create DiceRollHistory.txt
const fs=require("fs");

console.log("Multiple dice rolls:");

// looping till 5 to get the dice roll multiple time i.e. 5 time 
for (let i = 0; i < 5; i++) {
  // using randomInt module with the proper error handling 
  // and printing the desired output accordingly
  crypto.randomInt(1, 7, (err, value) => {
    if (err) {
      console.log("Error occurred generating the values : ", err);
      return;
    }
    console.log("Dice rolled :", value);

    // adding all the random values generated in the DiceRollHistory file 
    // for maintaining the records in the end of the file with proper error handling
    fs.appendFile('DiceRollHistory.txt', String(value)+'\n', (err) => {
      if (err) {
        console.log("Error in updating the data :", err);
        return;
      }
      console.log("Dice Log History Update Success !!");
    });
  });

}

// using the randomInt function to get the output 
// for the single time dice roll 
crypto.randomInt(1, 7, (err, value) => {
    if (err) {
      console.log("Error occurred generating the values : ", err);
      return;
    }
    console.log("Dice rolled (single dice roll):", value);
  });
  
// to run this write the following command :
// node dice.js