// Consuming Promises is a JavaScript function that is used to handle the result of a Promise object.
// 1️⃣ We have to use the .then() method to consume the Promise object.

let num1 = 40;
let num2 = 20;
// Create Promise with executor function that takes resolve/reject parameters
const promise1 = new Promise((resolve, reject) => {
    if(num1 > num2) {
        console.log('num1 is greater than num2');
        resolve(true);
    } else {
        reject(false);
    }
});

// Handle both success and error cases
promise1
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });