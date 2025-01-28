// Property assignment is '=' in the object.

// Property assignment '=' can be done in two ways:
// 1. Using dot notation
// 2. Using square bracket notation

// 1. Using dot notation
const obj = {};
obj.name = "Harry Potter";
obj.age = 30;
obj["city"] = "London";
console.log(obj); // { name: 'Harry Potter', age: 30, city: 'London' }

// 2. Using square bracket notation
const obj2 = {};
obj2["name"] = "Ron Weasley";
obj2["age"] = 30;
obj2["city"] = "London";
console.log(obj2); // { name: 'Ron Weasley', age: 30, city: 'London' }