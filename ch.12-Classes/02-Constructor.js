// Constructor in classes use to initialize an object's properties. In constructor we can use the this keyword to access the properties of the class.
// Moreover constructor use to incapsulate the properties and makes the code readable and maintainable.

class details {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let person = new details("John", 25, "Male");
console.log(person.name);
console.log(person.age);
console.log(person.gender);