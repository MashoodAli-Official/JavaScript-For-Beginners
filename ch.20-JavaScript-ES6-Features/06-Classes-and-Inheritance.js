// Simple class example
class students {
    constructor(stuName, age, address){
        this.stuName = stuName; 
        this.age = age;
        this.address = address;
    }

    display(){
        console.log("Name: "+this.stuName);
        console.log("Age: "+this.age);
        console.log("Address: "+this.address);
    }
}
let studentDetails = new students("Harry Potter", 20, "London, UK");
studentDetails.display();

// Inheritance class example
class student {
    constructor(name, age, address){
        this._name = name;
        this._age = age;
        this._address = address;
    }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }

    get address(){
        return this._address;
    }
}
class studentsDetails extends student{
    constructor (name, age, address){
        super(name, age, address);
    }
    display(){
        console.log("Name: "+this._name);
        console.log("Age: "+this._age);
        console.log("Address: "+this._address);
    }
}
const hogwarts = new studentsDetails("Harry Potter", 20, "London, UK");
hogwarts.display();
console.log(hogwarts.name);
console.log(hogwarts.age);
console.log(hogwarts.address);