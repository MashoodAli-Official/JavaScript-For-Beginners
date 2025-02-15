
// Error stack trace shows the sequence of function calls that led to an error
// It helps in debugging by showing where exactly the error occurred in the code

// Example function that will throw an error
function functionC() {
    // Deliberately throwing an error
    throw new Error('Something went wrong in functionC!');
}

// This function calls functionC
function functionB() {
    functionC();
}

// This function calls functionB
function functionA() {
    functionB();
}

try {
    // Start the chain of function calls
    functionA();
} catch (error) {
    // Log the error stack trace
    console.log('Error Stack Trace:');
    console.log(error.stack);
    
    // The stack trace will show:
    // 1. Where the error was thrown (functionC)
    // 2. Which function called functionC (functionB)
    // 3. Which function called functionB (functionA)
    // 4. The initial call from try block
}

// You can also create a custom error with more details
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
        this.date = new Date();
    }
}

try {
    throw new CustomError('This is a custom error message');
} catch (error) {
    console.log(error.name);    // Outputs: CustomError
    console.log(error.message); // Outputs: This is a custom error message
    console.log(error.stack);   // Outputs: Stack trace with line numbers
    console.log(error.date);    // Outputs: Current date/time
}