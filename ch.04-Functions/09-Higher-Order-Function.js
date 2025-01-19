// Higher Order Function is JavaScript that takes one or more function as an argument and returns another function.
// Example of a higher order function that takes a function as argument
function higherOrderFunction(callback) {
  return function(num) {
    return callback(num) * 2;
  }
}

// Function to be passed as argument
function multiply(x) {
  return x * 3; 
}

// Using the higher order function
const result = higherOrderFunction(multiply);
console.log(result(5));