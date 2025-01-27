// We are using the findIndex() method to find the index of the element that satisfies the condition.

const studentNames = ["Harry", "Ron", "Hermoine", "Luna", "Neville"];
const stuNames = studentNames.findIndex(Name => Name.includes('a')); // Name is arrow function as parameter as a callback function
console.log("Names starting with H: ", stuNames);

const randomNumbers = [11,22,444,55,66,77,88,99,100,111,222,333,444,555,666,777,888,999,1000];
const sameNumber = randomNumbers.findIndex(number => number === 444); // number is arrow function as parameter as a callback function
console.log("Same number: ", sameNumber); // output: 2