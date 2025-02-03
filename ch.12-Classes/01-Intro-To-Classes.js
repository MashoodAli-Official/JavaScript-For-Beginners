// Classes in JavaScript, are used to define a blueprint for creating objects.
// Classes are used to create reusable code. Classes are used to create objects.

class student{
    //The 👇 constructor method is used to initialize an object's properties.
    constructor(name,age,marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    display(){
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        console.log("Marks: "+this.marks);
    }
}
const s1 = new student("John", 20, 80);
s1.display();