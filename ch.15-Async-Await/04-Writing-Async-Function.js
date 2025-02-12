// Writing Async function, using the Async keyword.
// The async keyword is used to write the async function code in a more synchronous and readable manner.

// Async function with await operator
async function studentDetails(){
    console.log('This is simple Async Function with Promise function and await operator');
    // Promise with setTimeout
    const studentInfo = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Harry Potter, student of Hogwarts School of Witchcraft and Wizardry');
        }, 2000);
    });
    // await operator
    const display = await studentInfo;
    console.log(display);
};
studentDetails();