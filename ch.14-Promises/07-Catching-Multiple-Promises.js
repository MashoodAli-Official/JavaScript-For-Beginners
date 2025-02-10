// We can catch the multiple promises in the catch block
// Example of catching multiple promises

// First promise with setTimeout function
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error from promise 1'), 1000);
});

// Second promise with setTimeout function
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error from promise 2'), 2000);
});

// Use Promise.all() to handle multiple promises
Promise.all([promise1, promise2])
  .then(results => {
    console.log('All promises resolved:', results);
  })
  .catch(error => {
    console.error('One of the promises was rejected:', error);
  });