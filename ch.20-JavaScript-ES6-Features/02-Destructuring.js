// Destructuring in Array
let arr = [1,2,3,4,5];
let [a,b,c,d,e] = arr;
console.log(a); //1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(3); // 5
let [x,y, ...rest] = arr; // Using the rest operator
console.log(x); // 1
console.log(y); // 2
console.log(rest); // [3,4,5]

// Destructuring in Object
let obj ={
    name: 'harry',
    age : 14,
    city: 'London'
}
let {name, age, city} = obj;
console.log(name); // harry
console.log(age); // 14
console.log(city); // London

let {name1, ...restj} = obj; // Using alias
console.log(name1); // harry
console.log(restj); // 14
