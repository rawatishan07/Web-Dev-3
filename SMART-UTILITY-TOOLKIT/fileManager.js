// creating a file manager

// importing the fs module 
const fs = require("fs");

// storing the content to add in the file in the variable 
const d = "Hello World !!";

// INSERT
// adding the contents in the test.txt and handling the errors 
// properly and printing the messages accordingly
fs.writeFile("test.txt", d, (err) => {
  if (err) {
    console.log("Error in writing the data :", err);
    return;
  }
  console.log("Data Written Successfully !!");
});

// READ
// reading the contents in the file with proper error handling
// and printing the results accordingly
fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error in reading the file :", err);
    return;
  }
  console.log("File Contents are :", data);
});

// UPDATE
// storing the content to append in a variable 
const content = "Here we are implementing the update feature !!";
// using the appendFile function to add the contents in the file and 
// handling errors properly and printing the messages accordingly
fs.appendFile("test.txt", content, (err) => {
  if (err) {
    console.log("Error in updating the data :", err);
    return;
  }
  console.log("Data updated Successfully !!");
});

// DELETE
// using the unlink function to implement the delete operation
// on a sample.txt file
fs.unlink("sample.txt", (err) => {
  if (err) {
    console.log("Error Deleting :", err);
    return;
  }
  console.log("Deletion Successfull !!");
});
