//Javascript Array is having built-in properties and methods. We can use these properties to retrieve the information about the array.The following are the properties of the array.
// 1: .length
// 2: .push()
// 3: .pop()
// 4: .shift()
// 5: .unshift()
// 6: .slice()
// 7: .indexOf()

// .Length Property, used to check the length of the array.
const fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
console.log("Length property: ",fruits.length); // 4

// .push() Property, used to add an element to the end of the array without changing the existing elements.
const cars = ['BMW', 'Audi', 'Mercedes', 'Volvo'];
console.log("Without push() method",cars.push('Toyota')); // 5
console.log("With push() method",cars); // ['BMW', 'Audi', 'Mercedes', 'Volvo', 'Toyota']

// .pop() method is used to remove the last element from the array.
const cars1 = ['BMW', 'Audi', 'Mercedes', 'Volvo'];
console.log("pop() method",cars1.pop());
console.log("After pop() method",cars1); // ['BMW', 'Audi', 'Mercedes']

// .shift() method in javascript use to remove the first element from the array.
const cars2 = ['BMW', 'Audi', 'Mercedes', 'Volvo'];
cars2.shift();
console.log("shift() method: ",cars2); // ['Audi', 'Mercedes', 'Volvo']

// .unshift() method in javascript use to add an element to the beginning of the array.
const cars4 = ['BMW', 'Audi', 'Mercedes', 'Volvo'];
cars4.unshift('Toyota');
console.log("unshift() method: ",cars4); // ['Toyota', 'BMW', 'Audi', 'Mercedes', 'Volvo']

// .slice() method in javascript use to extract a section of the array and return a new array using the start and end index number.
const cars5 = ['BMW', 'Audi', 'Mercedes', 'Volvo'];
console.log(cars5);
console.log("slice() method: ", cars5.slice(1, 3)); // ['Audi', 'Mercedes']

// indexOf() method in javascript use to find the index of the element in the array.
const cars6 = ['BMW', 'Audi', 'Mercedes', 'Volvo'];
console.log("indexOf() method:", cars6.indexOf('Mercedes')); // 2