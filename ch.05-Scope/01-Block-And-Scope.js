// The BLOCK we have already used in Functions and Conditional Statements.
// BLOCK is a set of statements that are executed together and written within {}.

// Scope in JavaScript defines the accessibility and visibility of variables
// There are 3 types of scope: Global, Function, and Block scope

const myName = 'Harry Potter';
const studentInfo = (house) =>{
    return `My name is ${myName} and I am in ${house} house.`;
}
console.log(studentInfo('Gryffindor'));