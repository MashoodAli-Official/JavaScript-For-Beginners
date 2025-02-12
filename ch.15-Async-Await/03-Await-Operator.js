// Await operator in Javascript is used to wait for a Promise to resolve.
// It is used to get the resolved value of a Promise.
// It is used to get the value of a Promise and return it to the caller.

// Async function with await operator
async function studentInfo() {
    // Promise with setTimeout function
    const response = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Harry Potter, student of Hogwarts School of Witchcraft and Wizardry')
        }, 2000);
    });

    const response2 = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Hermione Granger, student of Hogwarts School of Witchcraft and Wizardry')
        }, 4000);
    });
    // Await operator
    const display = await response;
    const display2 = await response2;

    console.log(display);
    console.log(display2);
}
studentInfo();