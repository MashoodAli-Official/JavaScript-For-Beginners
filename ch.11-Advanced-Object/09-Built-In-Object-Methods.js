// Built-In Object Methods
// 1. Object.keys() method helps to get the keys of the object as an array
const studentInfo = {
    name: "Harry Potter",
    age: 16,
    school: "Hogwarts",
}
console.log(Object.keys(studentInfo));  // Output will be ['name', 'age', 'school']

// 2. Object.values() method helps to get the values of the object as an array
console.log(Object.values(studentInfo)); // Output will be ['Harry Potter', 16, 'Hogwarts']

// 3. Object.entries() method helps to get the both keys and values of the object as an array
console.log(Object.entries(studentInfo));

// 4. Object.assign() method helps to copy the properties of one object to another object
const studentInfo1 = {
    name: "Harry Potter",
    age: 16,
    school: "Hogwarts",
}
const studentInfo2 = {
    name: "Harry Potter",
    age: 16,
    school: "Hogwarts",
}
console.log(Object.assign(studentInfo1, studentInfo2));

// 5. Object.freeze() method helps to make the object immutable(unchangeable)
const studentInfo3 = {
    name: "Harry Potter",
    age: 16,
    school: "Hogwarts",
}
Object.freeze(studentInfo3);
studentInfo3.name = "Hermione Granger";
console.log(studentInfo3);

// 6. Object.seal() method helps to prevent new properties from being added to the object
const studentInfo4 = {
    name: "Harry Potter",
    age: 16,
    school: "Hogwarts",
}
Object.seal(studentInfo4);
studentInfo4.name = "Hermione Granger";
console.log(studentInfo4);

// 7. Object.retreat() method helps to remove a property from the object
const studentInfo5 = {
    name: "Harry Potter",
    age: 16,
    school: "Hogwarts",
}
delete studentInfo5.name;
console.log(studentInfo5);

// 8. Object.preventExtensions() method helps to prevent the addition of new properties to the object
const studentInfo6 = {
    name: "Harry Potter",
    age: 16,
    school: "Hogwarts",
}
Object.preventExtensions(studentInfo6);
studentInfo6.name = "Hermione Granger";
console.log(studentInfo6);

// 9. Object.create() method helps to create a new object
const studentInfo7 = {
    name: "Harry Potter",
    age: 16,
    school: "Hogwarts",
}
const studentInfo8 = Object.create(studentInfo7);
console.log(studentInfo8);