// Async-Await in JavaScript is a way to handle asynchronous code. The Asynchronous code is a code that runs in the background and doesn't block the main thread.
// Promises are used to handle in asnychronous code in javascript. Promises are used to handle the result of an asynchronous operation.
// Await keyword is used to wait for a Promise to resolve. It is used to get the resolved value of a Promise.


// ********** Promises with Async Function **********
async function calculate (a,b){
    return new Promise((resolve, reject)=>{
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else {
            reject('Parameters must be numbers');
        }
    });
};
calculate(5,3).then(sum =>{
    console.log('Sum:', sum);
}).catch(err =>{
    console.error('Error:', err);
});

// ********** Async-Await **********
async function calculateSum() {
    const response = new Promise((resolve, reject) =>{
        setTimeout(()=>{
                resolve('this is a promise');
        },4000);
    });

    const sum = await response;
    // return sum;
    console.log(sum);
};
calculateSum()
