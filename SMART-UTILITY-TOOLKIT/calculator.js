// COMMAND LINE BASED CALCULATOR

// accessing the user inputs 
const operation = process.argv[2];
const value1 = process.argv[3];
const value2 = process.argv[4];

// assuming the output as 0
let output = 0;

// handling the missing value errors
if ((value1 === undefined) || (value2 === undefined)) {
  output = "Please provide both the input values !!";
} else {
  // otherwise performing the respective operation 
  // operations are : add, subtract, divide, multiply
  if (operation === "add") {
    output = Number(value1) + Number(value2);
  } else if (operation === "subtract") {
    output = Number(value1) - Number(value2);
  } else if (operation === "divide") {
    if (Number(value2) !== 0) {
      output = Number(value1) / Number(value2);
    } else {
      output = "Division by Zero is not allowed !!";
    }
  } else if (operation === "multiply") {
    output = Number(value1) * Number(value2);
  } else {
    output = "Please enter a valid operator name !!";
  }
}

// consoling the desired output
console.log(output);

// write the command : node calculator.js <operation> <value1> <value2>