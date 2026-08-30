// logger function 

// creating a logger function that will merge the 
// time stamp and the message passed by the user
const logger = (message) =>{
    const date = new Date();
    return (date+" "+message)
}

// exporting the above made function using "module.exports"
// in the file app.js
module.exports={
    logger
}