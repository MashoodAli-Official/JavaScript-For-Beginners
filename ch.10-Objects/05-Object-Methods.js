// Same like Number, Array and String, the object is also having some methods.
// these methods are used to manipulate the object properties.

// Object Methods
// Object.keys()     Get property names
// Object.values()   Get property values
// Object.entries()  Get key-value pairs
// Object.assign()   Copy properties
// Object.freeze()   Make immutable(unchangeable)
// Object.seal()     Prevent new properties
// Object.retreat()  Remove property
// Object.create()   Create new object

// Simple variable and assign a string value to it.
let harryIntro = "I am Harry Potter, I am a student at Hogwarts School of Witchcraft and Wizardry.";
// Create an object and assign the variable to the object property.
let harry = {
    retreat(){
        console.log(harryIntro);
    }
}
// Call the object method.
harry.retreat();

let studentInfo = {
    name: "Harry Potter",
    age: 18,
    school: "Hogwarts School of Witchcraft and Wizardry",
}
console.log(Object.keys(studentInfo));
console.log(Object.values(studentInfo));
console.log(Object.entries(studentInfo));
console.log(Object.assign(studentInfo, {name: "Hermione Granger", age: 17}));
console.log(Object.keys(studentInfo));