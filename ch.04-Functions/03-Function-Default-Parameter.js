// Function default parameter, in javascript ES6 is a feature which is called default parameter.
// In this case if user does not pass the proper argument after calling the function then the default parameter will be used.

function greetingMessage(message = "Hello Universe!"){
    console.log(message);
}
// without 👇👇 passing the argument
greetingMessage(); // Output: Hello Universe!

// with 👇👇 passing the argument
greetingMessage("Hello World!"); //Output: Hello World!