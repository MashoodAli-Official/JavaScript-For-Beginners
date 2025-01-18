// Arrow function: in arrow function we are not using the function keyword and using =>() instead of {}.
const studentInfo = (stuName, age, grades) =>{
    console.log(`Name: ${stuName}, Age: ${age}, Grades: ${grades}`);
    return `Name: ${stuName}, Age: ${age}, Grades: ${grades}`;
};
studentInfo("Harry Potter", 20, 90);

const myName  = () =>{
    console.log("My Name is Harry");
    return;
}
myName();