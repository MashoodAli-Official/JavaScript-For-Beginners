// Looping Through object: The for...in loop can be used to loop through the properties of an object.
// This loop will return the key and value of the object.
const studentInfo = {
    name: "John",
    age: 20,
    hobbies: ["reading", "games", "coding"],
  };
for (let key in studentInfo) {
    let value;
    // get the value
    value = studentInfo[key];
    console.log(key + " - " +  value);
}