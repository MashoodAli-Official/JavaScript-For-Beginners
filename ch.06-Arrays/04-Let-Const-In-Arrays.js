// Lets see how Let and const scope works in Arrays

// Let scope
let  myName = "Harry Potter";
console.log(myName); // Harry Potter
// we can change the value of myName array if array is declared with let
myName = "Ron Weasley";
console.log(myName); // Ron Weasley

//Const scope
const myName2 = "Harry Potter";
console.log(myName2); // Harry Potter
// we can change the value of myName array if array is declared with let
// myName2 = "Ron Weasley"; // TypeError: Assignment to constant variable.