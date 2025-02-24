
// Example of default parameters in JavaScript functions
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}
console.log(greet());

// Function with multiple default parameters
function calculateTotal(price = 0, taxRate = 0.1, shipping = 5) {
    const tax = price * taxRate;
    return price + tax + shipping;
}
console.log(calculateTotal());

// Arrow function with default parameters
const multiply = (a = 1, b = 1) => a * b;
console.log(multiply());
 
// Function with default object parameters
function createUser({
    username = 'anonymous',
    email = 'noemail@example.com',
    active = true
} = {}) {
    return {
        username,
        email,
        active
    };
}
console.log(createUser());

// Function with default array parameters
function processItems(items = [], callback = item => item) {
    return items.map(callback);
}
console.log(processItems());