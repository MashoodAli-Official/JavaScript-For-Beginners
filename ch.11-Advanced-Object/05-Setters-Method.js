// Setters method in javascript are use to set the properties within the object and reasign the value of the property.
// For setter we are using set() method.

const studentInfo = {
    name: 'Harry Potter',
    age: 18,
    set changeName(newName) {
        if(typeof newName === 'string'){
            return this.name = newName
        }else{
           return console.log('Please enter a valid name');
        };
    }
};
console.log('Original name: ', studentInfo.name); // output will be Harry Potter
studentInfo.changeName = 'Ron Weasley';
console.log('Updated name: ',studentInfo.name); // output will be Ron Weasley