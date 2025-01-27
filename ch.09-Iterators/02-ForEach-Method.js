// .forEach() method: This is a iteration method which is used to iterate over the elements of an array.
// It takes a callback function with elements, index, and array as arguments. 
// It is a concise way to iterate over the elements of an array.

const students = ['Harry Potter', 'Hermione Granger', 'Ron Weasley'];
students.forEach(function(student){
    console.log(`${student} is a student at Hogwarts.`);
})