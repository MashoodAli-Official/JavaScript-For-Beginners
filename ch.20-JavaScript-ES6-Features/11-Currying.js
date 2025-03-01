
/**
 * Currying is a technique in functional programming where a function that takes multiple arguments
 * is transformed into a sequence of functions, each taking a single argument.
 * 
 * The curried function returns a new function for each argument until all arguments have been provided,
 * at which point it returns the final result.
 */

// Simple curry function that transforms a multi-argument function into a curried version
function curry(fn) {
  return function curried(...args) {
    // If enough arguments have been provided, call the original function
    if (args.length >= fn.length) {
      return fn(...args);
    }
    // Otherwise, return a function that collects more arguments
    return function(...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}

// Example usage:
// Regular function that adds three numbers
function add(a, b, c) {
  return a + b + c;
}

// Curried version of the add function
const curriedAdd = curry(add);

// Different ways to call the curried function
console.log(curriedAdd(1, 2, 3));     // 6
console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6

// Another example with a different function
function multiply(a, b) {
  return a * b;
}

const curriedMultiply = curry(multiply);
const double = curriedMultiply(2);    // Creates a function that doubles its input
const triple = curriedMultiply(3);    // Creates a function that triples its input

console.log(double(5));               // 10
console.log(triple(5));               // 15