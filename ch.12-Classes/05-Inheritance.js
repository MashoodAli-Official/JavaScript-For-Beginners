// In JavaScript Inheritance is a feature that allows a class to inherit properties and methods from another class.
// It is a way to reuse code and reduce code duplication.

// Parent class
class StudentDetails{
    constructor(school){
        this.school = school;
    }
    get schoolName(){
        return this.school.toUpperCase();
    }
}
// Child class
class studentName extends StudentDetails{
    constructor(name, age, school){
        super(school);
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
    }
    get Age(){
        return this._age;
    }
}
const user = new studentName("Harry", 25, "Hogwarts");
console.log(user.name);
console.log(user.Age);
console.log(user.schoolName);