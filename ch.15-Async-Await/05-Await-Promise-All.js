// Await Promise.all() in Javascript is used to wait for all the promises to resolve.
// It is used to get the resolved value of all the promises.
// It is used to get the value of all the promises and return them to the caller.
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
    const display = await Promise.all([response, response2]);
    console.log(display);
}    
studentInfo();