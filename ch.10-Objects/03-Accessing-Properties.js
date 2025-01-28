// There are two methods to access the properties of an object:
// 1. Dot notation
// 2. Bracket notation

// 👉 1. Dot notation: Using the dot notation, you can access the properties of an object like Object name [.] dot and property key name.
const studentInfo = {
    name: "Harry Potter",
    age: 18,
    isStudent: true,
    address: {
        city: "London",
        country: "UK"
    }
};
let basicInfo = studentInfo.name;
console.log("Student name: ", basicInfo);
let sutdentAddress = studentInfo.address.city;
console.log("Student address: ", sutdentAddress);

// 👉 2. Bracket notation: Using the bracket notation[], first write the object name and then [] inside the name of the property key.
const studentDetails = {
    name : 'Ron Weasley',
    age : 19,
    isStudent : true,
    address : {
        city : 'England',
        country : 'UK'
    }
};
let studentName = studentDetails['name'];
console.log("Student name: ", studentName);
let studentCity = studentDetails['address']['city'];
console.log("Student city: ", studentCity);
