// The Nested Objects is work same like Arrays or Nested Loops. We can declared objects within an object.
const studentInfo = {
    name: "Harry Potter",
    age: 19,
    address:{
        house: "4 Privet Drive",
        city: "London",
        country: "UK"
    }
}
const studentDetails = `My name is ${studentInfo.name} and I am ${studentInfo.age} years old. My address is ${studentInfo.address.house}, ${studentInfo.address.city}, ${studentInfo.address.country}.`;
console.log(studentDetails);