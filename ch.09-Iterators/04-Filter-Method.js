// Filter method in javascript use to filter out the elements from an array based on a condition.
// It takes a callback function with elements, index, and array as arguments.

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const evenNumbers = numbers.filter(number => number %2 === 0); // number is arrow function as parameter as a callback function
console.log("Even numbers: ", evenNumbers);
const oddNumbers = numbers.filter(number => number %2 !== 0); // number is arrow function as parameter as a callback function
console.log("Odd numbers: ", oddNumbers);

const studentNames = ["Harry", "Ron", "Hermoine", "Luna", "Neville"];
const stuNames = studentNames.filter(Name => Name.includes('a')); // Name is arrow function as parameter as a callback function
console.log("Names starting with H: ", stuNames);