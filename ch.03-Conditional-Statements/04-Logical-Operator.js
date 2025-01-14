// Logical Operator, are short hand for conditional statements. They are used to combine two or more conditions together.
// In JavaScript there are three Logical operators. they are:

// AND (&&) operator - returns true if both conditions are true
let studentName = "Harry Potter";
let age = 18;
if (studentName === "Harry Potter" && age == 18){
    console.log("Welcome to Hogwarts");
}else{
    console.log("You are not allowed to enter in Hogwarts");
}; 

// OR (||) operator - returns true if one of the conditions is true
let num1 = 10;
let num2 = 20;
if (num1 === 10 || num2 ===20){
    console.log("One of the condition is true.")
}else {
    console.log("Both conditions are false.")
}

// NOT (!) operator - returns true if the condition is false and vice versa
let num3 = 20;
let num4 = 30;
if (num3 !== num4){
    console.log("The condition is true.")
}else{
    console.log("The condition is false.")
}