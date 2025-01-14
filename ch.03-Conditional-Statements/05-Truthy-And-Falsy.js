// Truthy and Falsy Assignment operator, use to determine if a value is truthy or falsy.

// in the given below example, if the userName is empty, then the displayName will be 'Anonymous User'
let userName = '';
let displayName = userName || 'Anonymous User';
console.log(displayName); // Anonymous User

// in the given below example, if the userAge is empty, then the displayAge will be 18
let userAge = 22;
let displayAge = userAge || 18;
console.log(displayAge); // 22