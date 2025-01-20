// GLOBAL scope : The global scope is declared outside of the scope and we can use it anywhere in the code.

const myName = 'Harry Potter';
const studentInfo = (house) => {
    return `My name is ${myName} and I am in ${house} house.`;
} 
confirm('msg', studentInfo('Gryffindor'));