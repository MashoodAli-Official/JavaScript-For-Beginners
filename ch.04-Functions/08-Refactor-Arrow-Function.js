// Refactor Arrow function, If a function is having just one parameter the we don't have to inclose in Parentheses.
// Like if we are having the code with one or multiple parameters then we have to use the parentheses. 

// Code with multiple PARAMETERS
const addNumbers = (num1, num2) =>{
    console.log("Multiple Parameters and without refactor: ",num1 + num2);
    return num1 + num2;
};
addNumbers(2, 3);

// REFACTOR code with single parameter
const multiplyNumber = num =>{
    console.log("Arrow function withRefactor with Single parameter: ",num * 5);
    return num * 5;
};
multiplyNumber(5);