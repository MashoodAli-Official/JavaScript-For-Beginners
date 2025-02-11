// 1️⃣ Introduction to Asynchronous
// JavaScript is single-threaded, but asynchronous operations allow non-blocking execution.
// Common async operations: API calls, file reading, timers.
// Callbacks were initially used but led to "callback hell."


// 2️⃣ Introduction to Promises
// A Promise is an object representing the eventual completion (or failure) of an async operation. States are:
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Operation completed successfully.
// Rejected: Operation failed.


// 3️⃣ Constructing a Promise Object
// Create a Promise using the Promise constructor:
const promise1 = new Promise((resolve, reject) => {
    if (resolve){
        console.log(resolve);
    }else{
        console.log(reject)
    }
});


// 4️⃣ Node Set Timeout Function
// Simulate async operations using setTimeout:
const promise2 = new Promise((resolve) => {setTimeout(()=> resolve('Done!'), 1000)});


// 5️⃣ Consuming Promises
// Use .then() to handle fulfilled promises:
myPromise.then((result)=>{
    console.log(result);
});


// 6️⃣ Catch with Promise
// Use .catch() to handle errors:
myPromise1.catch((error) =>{
    console.log(error)
});


// 7️⃣ Catching Multiple Promises
// Chain multiple promises using .then() and handle errors with .catch():
promise1
  .then((result1) => promise2(result1))
  .then((result2) => console.log(result2))
  .catch((error) => console.error(error));


// 8️⃣ Using Promise.all() Function
// Execute multiple promises in parallel and wait for all to resolve:
Promise.all([promise1, promise2])
.then((results) => console.log(results))
.catch((error)=> console.log(error));


// 👉 Key Points:
// Promises simplify async code and avoid callback hell.
// Use .then() for success, .catch() for errors, and .finally() for cleanup.
// Promise.all() is useful for parallel async operations.