// Block Scope: The Variables are declared with let and const within a block are only available within that block.

function multiply(num){
    let result = num * 4;
    return result;
};
// console.log(result); // ReferenceError: result is not defined because result is declared within the block of the function multiply.
console.log(multiply(4));