// importing the isEven function
const Even = require('./modules/isEven');

// importing the logger function 
const log = require('./modules/logger');

// storing the input
const input= process.argv[2]

// if the input is NaN then logger will implement
if (Number.isNaN(Number(input))){
    console.log(log.logger(input))
}else{
    // otherwise the iseven will implement
    console.log(Even.isEven(Number(input)))
}

// to use the isEven function use the following command :
// node app.js <number>

// to use the logger function use the following command :
// node app.js <sentence>