// The let and const hoisting is not working as var hoisting fortunately and it is not return the undefined value.

// Example of hoisting behavior with different variable declarations

// Function hoisting example
sayHello(); // Works because function declarations are hoisted
function sayHello() {
    console.log("Hello!"); 
}

// Variable hoisting examples
console.log(varVariable); // undefined
var varVariable = "I'm using var";

// Let and const create a temporal dead zone (TDZ)
// Uncomment to see ReferenceError:
// console.log(letVariable); 
let letVariable = "I'm using let";

// console.log(constVariable);
const constVariable = "I'm using const";

// Function expression hoisting
// console.log(myFunc()); // Error - myFunc is not a function
var myFunc = function() {
    return "Function expression";
}

// Class hoisting demonstration
// console.log(new MyClass()); // ReferenceError
class MyClass {
    constructor() {
        this.name = "test";
    }
}