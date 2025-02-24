// Arrow functions are a more concise way to write function expressions.
// They utilize a new token, =>, that looks like a fat arrow, which is where the name “arrow functions” comes from.

// Defaut Arrow Function
const arrowFunction = () => {
    console.log("Arrow Function");
    return "Arrow Function";
}
arrowFunction();

// Arrow with one parameter
const ArrowFunc = (name) =>{
    name = name || "Default Name";
    console.log(name);
}
ArrowFunc(); // Default Parameter value
ArrowFunc("Harry Potter"); // Assign value to parameter

// Arrow with multiple parameters
const ArrowFunc1 = (name, age) =>{
    console.log(name, age);
    return name, age;
}
ArrowFunc1("Harry Potter", 18);