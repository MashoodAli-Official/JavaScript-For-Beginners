// As you know in ES6 some new short hands were introduced. Same like other properties in factory function we can also use short hands in object.
// In shofthand we just have to declare the keys in the object. 

const stundentInfo = (name, age) =>{
    return{
        name,
        age,
        printInfo(){
            console.log(this.name, this.age);
        }
    }
}
const stundent = stundentInfo('Harry', 18);
stundent.printInfo('Harry Potter', 18);