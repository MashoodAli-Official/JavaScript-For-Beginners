// As we know the High order functions are the functions that take the other functions as a parameter or return a function as a result.

const studentName = name =>{
    return name;
} 
const upperCaseName = (studentName) => {
    return studentName.toUpperCase();
}
console.log(studentName("Harry Potter"));
console.log(upperCaseName("Harry Potter")); // HARRY POTTER

