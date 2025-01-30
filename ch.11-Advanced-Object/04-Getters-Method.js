// Getters in method are use to access the properties of the object.
// For getter we are using get() method.

const studentInfo = {
    name : "Harry Potter",
    age: 16,
    // getter method definition
    get getName(){
        return this.name.toUpperCase();
    }
};
console.log(studentInfo.getName);