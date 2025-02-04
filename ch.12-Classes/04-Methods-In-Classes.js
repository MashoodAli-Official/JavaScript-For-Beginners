// Methods in Classes are same like methods in objects. we can declare the name the method in the class and can access the properties of the class inside the method.
// We can use 'this' keyword to access the properties of the class.

class studentinfo{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // This 👇 is the method in the class
    getname(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
}
const user = new studentinfo("Harry", 25);
console.log(user.getname());
console.log(user.getAge());
console.log(`My name is ${user.getname()} and my age is ${user.getAge()}`);