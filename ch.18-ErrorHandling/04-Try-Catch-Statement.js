// The Try...Catch statement is used to handle errors in JavaScript.
// The try block allows you to define a block of code to be tested for errors while it is being executed. 
// The catch block allows you to define a block of code to be executed if an error occurs in the try block.

try {
    throw new Error("This is an error");
}catch (error) {
    console.log(error);
}