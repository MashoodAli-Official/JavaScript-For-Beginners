// Static method in javaScript is a method that is associated with a class rather than an instance of the class.
// Static method can be called without creating an instance of the class.
// Static method can be called using the class name and it is declaring in parent class.

class user {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    // This 👇 is Static method (and it will call as not instance method)
    static message(){
        console.log("Hello, I am static method");
    }
}
class userDetails extends user{
    constructor(name,age){
        super(name);
        this._age = age;
    }
    get age(){
        return this._age;
    }   
}
let newUser = new userDetails("Harry", 30);
console.log(newUser.name, newUser.age);
user.message()
