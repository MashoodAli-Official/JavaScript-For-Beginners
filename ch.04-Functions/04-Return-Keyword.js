// Return Keyword in Function: The return keyword is used to return a value from a function.
// The return keyword stops the execution of a function and returns a value from that function.
// If the return keyword is not used in any function and then the function will return undefined by default. 

// Function 👇👇 without using the return keyword
function totalArea(length, width){
    let area = length * width;
}
console.log(totalArea(3,4));

// Function 👇👇 using the return keyword
function inchToFeet(inches){
    let feet = inches/12;
    return feet;
}
console.log("Feet: ",inchToFeet(24));