// This keyword in arrow function in Object is little bit complex. 
// To access the properties of the object inside the same object, we have to use the This keyword.
// But in arrow function, we can't use the This keyword.
// So, we have to use the normal function to access the properties of the object inside the same object.

const studentInfo = {
    name : 'Harry Potter',
    age: 16,
    // Arrow 👇 function
    studentAbout : () =>{
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }, // 🚨 Output: My name is undefined and I am undefined years old.
    studentDetails : function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    } // 🚨 Output: My name is Harry Potter and I am 16 years old.
}
studentInfo.studentAbout(); //Output will be undefined where this keyword used with Arrow function
studentInfo.studentDetails(); // Output will be Harry Potter where this keyword used with normal function