
// ARRAY METHODS

// forEach - executes a provided function once for each array element
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
  console.log(number);
});

// map - creates a new array with the results of calling a function on every element
const doubled = numbers.map(number => number * 2);
// doubled: [2, 4, 6, 8, 10]

// filter - creates a new array with elements that pass the test
const evens = numbers.filter(number => number % 2 === 0);
// evens: [2, 4]

// reduce - applies a function against an accumulator and each element to reduce to a single value
const sum = numbers.reduce((total, number) => total + number, 0);
// sum: 15

// find - returns the first element that satisfies the provided testing function
const firstEven = numbers.find(number => number % 2 === 0);
// firstEven: 2

// some - tests whether at least one element passes the provided function
const hasEven = numbers.some(number => number % 2 === 0);
// hasEven: true

// every - tests whether all elements pass the provided function
const allPositive = numbers.every(number => number > 0);
// allPositive: true

// includes - determines whether an array includes a certain value
const hasThree = numbers.includes(3);
// hasThree: true

// indexOf - returns the first index at which a given element can be found
const indexOfThree = numbers.indexOf(3);
// indexOfThree: 2

// slice - returns a shallow copy of a portion of an array
const portion = numbers.slice(1, 4);
// portion: [2, 3, 4]

// splice - changes contents by removing or replacing existing elements
const numbersCopy = [...numbers];
numbersCopy.splice(2, 1, 10);
// numbersCopy: [1, 2, 10, 4, 5]

// concat - merges two or more arrays
const moreNumbers = [6, 7, 8];
const combined = numbers.concat(moreNumbers);
// combined: [1, 2, 3, 4, 5, 6, 7, 8]

// sort - sorts the elements of an array in place
const unsorted = [5, 2, 8, 1, 4];
unsorted.sort((a, b) => a - b);
// unsorted: [1, 2, 4, 5, 8]

// OBJECT METHODS

// Object.keys - returns an array of a given object's own property names
const person = { name: 'John', age: 30, job: 'developer' };
const keys = Object.keys(person);
// keys: ['name', 'age', 'job']

// Object.values - returns an array of a given object's own enumerable property values
const values = Object.values(person);
// values: ['John', 30, 'developer']

// Object.entries - returns an array of a given object's own enumerable property [key, value] pairs
const entries = Object.entries(person);
// entries: [['name', 'John'], ['age', 30], ['job', 'developer']]

// Object.assign - copies all enumerable own properties from one or more source objects to a target object
const target = { id: 1 };
const source = { name: 'Jane', age: 25 };
const result = Object.assign(target, source);
// result: { id: 1, name: 'Jane', age: 25 }

// Object.freeze - prevents modification of existing properties and prevents properties from being added or removed
const frozen = { name: 'Harry' };
Object.freeze(frozen);
// frozen.name = 'Bob'; // This won't work, object is frozen

// Object.seal - prevents new properties from being added and marks all existing properties as non-configurable
const sealed = { name: 'Potter' };
Object.seal(sealed);
// sealed.age = 40; // This won't work, object is sealed
// sealed.name = 'Alice'; // This works, existing properties can be modified

// Object.create - creates a new object with the specified prototype object and properties
const personProto = {
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};
const student = Object.create(personProto);
student.name = 'Emma';
// student.greet() returns: "Hello, my name is Emma"

// Object.hasOwnProperty - returns a boolean indicating if the object has the specified property
const hasName = person.hasOwnProperty('name');
// hasName: true

// Object.is - determines whether two values are the same value
const isSame = Object.is(5, 5);
// isSame: true