// Object Pass by Reference: When an object is passed to a function, it is passed by reference. 
// This means that the function can modify the object's properties directly. 
// However, if the object is reassigned within the function, 
// it will not affect the original object outside the function.

// Declaration of object studentInfo
const studentInfo = {
    name: "Harry Potter",
    age: 18,
    isStudent: true,
    address: "London, England",
};
console.log("Before editing: ",studentInfo);

// Passing the object to a function by reference
let changeInfo = obj =>{
    obj.name = "Hermione Granger";
    obj.age = 19;
}
changeInfo(studentInfo); // Calling the function and passing the object as an argument
console.log(studentInfo);