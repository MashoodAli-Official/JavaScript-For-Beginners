// Hight order function in JavaScript is a function that takes another function as an argument or returns a function as a result.
//regular function
function add(a,b){
    return a+b;
}
// Hight order function taking add function as an parameter and argument
function multiply(add){
    return add(2,4)*2;
}
console.log(multiply(add));