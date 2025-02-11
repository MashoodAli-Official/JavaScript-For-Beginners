// Promise.all() is a JavaScript function that is used to handle the result of multiple Promise objects at once.
// Promise.all() taking an array of multiple promises.

// Example promises that simulate API calls
const Promise1 = new Promise((resolve)=> setTimeout(() => resolve ('First'),1000));
const Promise2 = new Promise((resolve)=> setTimeout(() => resolve('Second'),2000));
const Promise3 = new Promise((resolve)=> setTimeout(() => resolve('Third'), 3000));

// Here we have to declare the Promise.all() function and pass any array of all promises.
Promise.all([Promise1,Promise2,Promise3])
.then((values) => {
    console.log(values)
})
.catch((error) =>{
    console.log('There is an error',error)
})