// Same like variables and functions we have to use scope to declare objects.
// We have to write the object in the block scope to avoid the redeclaration of the object.

// Object Declaration and declared name is "myCar"
const myCar = {
    'Car Name': 'Ford', // we are using the Car Name within single quotes because it has space in between.
     Model: 'Mustang',
     Year : 1969,
     Color : 'Red',
     Mileage : 50000,
};
// In the 👆 properties on left side the text is 'Value' and on the right side the text is 'Key'.
console.log("Old declared myCar value: ", myCar);