// In Promise object we are using the .catch() method to handle the error same like .then() for to catch the fulfilled state.
const num1 = 10;
const num2 = 40;

const promise = new Promise((resolve, reject) => {
    if(num1 > num2){
        resolve('num1 is greater than num2');
    }else{
        reject('num1 is not greater than num2');
    }
});
promise 
    .then((result)=>{
        console.log(result);
    })
    // This is Catch() method to handle the error same like then() method
    .catch((error)=>{
        console.log(error); 
    });