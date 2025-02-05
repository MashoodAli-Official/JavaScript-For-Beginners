// Modules in JavaScript is separate piece of reuseaboe code, which we can use in other project files buy calling there files names and code functions. 
// Modules are used to organize code into separate files, making it easier to maintain and reuse code.

// Importing the entire module
const calculator = require("./test-module");

// Importing specific functions from the module
const { add, multiply, divide } = require("./test-module");

// Using the imported functions
console.log(calculator.add(2, 5)); // Output: 7
console.log(calculator.multiply(2, 5)); // Output: 10
console.log(calculator.divide(2, 5)); // Output: 0.4

// Using the imported functions directly
console.log(add(2, 5)); // Output: 7
console.log(multiply(2, 5)); // Output: 10
console.log(divide(2, 5)); // Output: 0.4

// Caching
// When we import a module, it is executed only once. The result of that execution is cached, and the cached result is returned for subsequent imports.
// This caching mechanism is implemented by Node.js and is called "caching module".

// Importing the entire module again (no effect since it's cached)
require("./test-module")(); // Output: Calculator started.
require("./test-module")(); // Output: Calculator started.
require("./test-module")(); // Output: Calculator started.
