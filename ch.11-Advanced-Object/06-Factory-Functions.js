// Functory Functions in JavaScript Object are use to create objects without using the new keyword and we have to declare parameters in functions.
// In simple words functory functions are use to create objects without using the new keyword And we can use factory functions to create new objects without using the new keyword.

// Factory Function declaration 
let studentInfo = (name, age, school) => {
    return{
        name: name,
        age: age,
        school: school,
        schoolInfo(){
            console.log(`My Name is ${name} and i am ${age} years old. I am studying in ${school}`);
        }
    }
}
const studentDetails = studentInfo('Harry Potter', 16, 'Hogwarts School of Witchcraft and Wizardry');
studentDetails.schoolInfo();