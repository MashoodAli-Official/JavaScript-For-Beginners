// Scope Pollution: We are defining many global variables and we can use it and modify it from anywhere in the block scope code. This is called Scope Pollution.
 
let myName = 'Harry Potter'; // declaring a global scope variable
console.log(myName);
function studentInfo(info){
    myName = 'Ron Weasley'; // modifying the global scope variable
    console.log('Modified myName value: ',myName);
    console.log(info);
    return myName;
};
studentInfo(myName); // unmodified myName value