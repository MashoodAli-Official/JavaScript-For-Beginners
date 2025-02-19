// Runtime errors occur during program execution, after the code has been parsed
// Here's a simple example of accessing an undefined property
const user = {
  name: 'John'
};

// This will cause a runtime error since age property doesn't exist
console.log(user.age.toString());
// TypeError: Cannot read properties of undefined (reading 'toString')