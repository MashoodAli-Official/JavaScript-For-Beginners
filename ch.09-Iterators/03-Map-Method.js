// Map Method is used to create a new array by calling a function on each element of the array.

const numbers = [1,2,3,4,5,6];
const square = numbers.map(number => number * number); // number is arrow function (callback function) as parameter
console.log("Suqare root: ",square);

const studentNames = ["Harry", "Ron", "Hermoine"];
const firstLetter = studentNames.map(name => name[0]); // name is arrow function (callback function) as parameter
console.log("First Letters of student names: ", firstLetter);
const nameLength = studentNames.map(stuName => stuName.length); // stuName is arrow function (callback function) as parameter
console.log("Length of student names: ", nameLength);