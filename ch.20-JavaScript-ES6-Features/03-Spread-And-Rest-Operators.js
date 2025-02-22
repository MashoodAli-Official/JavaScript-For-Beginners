
// Spread operator examples
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

const person = {
  name: 'John',
  age: 30
};
const newPerson = {
  ...person,
  city: 'New York'
}; // {name: 'John', age: 30, city: 'New York'}

// Rest operator examples
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

const {name, ...remaining} = {
  name: 'John',
  age: 30,
  city: 'New York'
};
console.log(name); // 'John'
console.log(remaining); // {age: 30, city: 'New York'}