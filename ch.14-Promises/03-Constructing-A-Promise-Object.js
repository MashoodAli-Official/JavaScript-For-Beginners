//For constructing an Promise object we have to use the new keyword with Promise keyword.

// 1️⃣  have to declare an object with properties.
const studentInfo = {
    name: "Harry Potter",
    age: 10, // Change the value here to see the result
    school: "Hogwarts",
};
// 2️⃣ we have to declare the excutor function with two parameters resolve and reject.
const infoValidator = (valid, inValid) =>{
    if(studentInfo.age >= 15){
        valid('Student is valid');
    }else{
        inValid('Student is not valid');
    }
};

// 3️⃣ we have to create a new Promise object with excutor function.
const promise = new Promise(infoValidator)
// 🚨 Console log will just works fine if the Pending and fulfilld state is there. IF the reject state is there then it will show an error.
// 🚨 To avoiding the error in the log we are using the .then(result) and catch(error) method. By this we will get the proper log result in both fulfilld and rejected state.
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.log(error);
});

//  4th we Can log the promise object to check is it working OR not but it will show in rejected state.
// console.log(promise);