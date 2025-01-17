// Helper Function : In helper function we can return another function from a function.

function multiply(num1, num2){
    return num1 * num2;
};

// This is 👇👇 Helper Function
function add(num3, num4){
    return multiply(num3, num4) +3;
};
console.log(add(3,4));