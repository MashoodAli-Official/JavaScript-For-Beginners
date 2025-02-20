// Hoisting in JavaScript is a behavior in which variable and function declarations are moved to the top of their containing scope during the compile phase.
// This means that you can use variables and functions before they have been declared in your code. 
// This is a common source of bugs in JavaScript, so it is important to understand how hoisting works.

// Example 
a = 1; // assign 1 to a
b = 2; // assign 2 to b
console.log(a+b);
var a; // declare a
var b; // declare b
// In this example, the variable declarations are hoisted to the top of their scope, so the code is equivalent to: