// This Keyword in Object: By using This keyword we can access the properties of the object inside the same object. 

const studentInfo = {
    name: "Harry Potter",
    age : 16,
    school: "Hogwarts",
    //Now use the This keyword to acces the properties of the object inside the same object.
    editInfo(){
        return`My Name is ${this.name} and i am ${this.age} years old. I am studying in ${this.school}`;
    }
}
console.log(studentInfo.editInfo());