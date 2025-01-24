// Functions in JavaScript are act like data. We can assign them different type of variables and pass them as arguments to other functions.


const studentsListOfHogwarts = () =>{
    let count = 0;
    for (let a = 0; a < 100; a++){
        console.log('Harry Potter '+ count ++);
    };
};
console.log(studentsListOfHogwarts()); // This console log will print the function itself, but it will take time moreover the function name is too long. 

const stuList = studentsListOfHogwarts; // Assigning the function to a variable
console.log(stuList());