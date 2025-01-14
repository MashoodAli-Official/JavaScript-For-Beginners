// Comparison operators in Javascript, these operators are using to compare two values and return a boolean value.

// Less Than (<) Operator
let a = 10;
let b = 20;
console.log('Less than operator: ',a < b); // true

// Greater Than (>) Operator
let c = 10;
let d = 20;
console.log('Greater than operator: ',c > d); // false

// Less Than or Equal (<=) Operator
let e = 100;
let f = 20;
console.log('Less than or equal operator: ', e <= f); // false

// Greater Than or Equal (>=) Operator
let g = 100;
let h = 20;
console.log('Greater than or equal operator: ', g >= h); // true

// Equal (==) Operator
let i = 10;
let j = 10;
console.log('Equal operator: ', i == j); // true

// Not Equal (!=) Operator
let k = 10;
let l = 20;
console.log('Not equal operator: ', k != l); // true

// Strict Equal to (===) Operator
let m = 10;
let n = '10'; 
console.log('Strict Equal to operator (===): ', m === n); // false
// m and n are not equal because m is a number and n is a string. The strict equal operator checks the value and the type of the variable.