// THE NUMBER IS EVEN OR NOT

// creating a function for finding whether the number is 
// even or odd based on the input 
const isEven = (input) => {
  if (input % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

// exporting the above made function using "module.exports"
// in the file app.js
module.exports = {
    isEven
}