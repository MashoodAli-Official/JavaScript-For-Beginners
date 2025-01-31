// Destructure Assignment: We can even use destructured assignment to grab nested properties of an object:

const studentInfo = {
    name: "Harry Potter",
    age: 16,
    school: {
        name: "Hogwarts",
        location: "England"
    }
};

const {name, age, school: {name: schoolName, location}} = studentInfo;
console.log(name, age, schoolName, location);