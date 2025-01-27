// Reduce() Method used to reduce the array to a single value.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Sum: ", sum); // output: 15