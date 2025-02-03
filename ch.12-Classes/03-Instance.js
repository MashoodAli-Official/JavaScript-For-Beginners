// In JavaScript the Instance is an object that is created using a class.
class personalDetails{
    // constructor in class use to initialize an object's properties and capsulate the properties
    constructor(name, age, gender){
        // this keyword use to access the properties of the class and set the value of the properties
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
// The personalDetails is an new 👇 Instance of the class
let harryDetails = new personalDetails("Harry", 25, "Male");
console.log(harryDetails.name, harryDetails.age, harryDetails.gender);
let hermoineDetails = new personalDetails("Hermoine", 25, "Female");
console.log(hermoineDetails.name, hermoineDetails.age, hermoineDetails.gender);