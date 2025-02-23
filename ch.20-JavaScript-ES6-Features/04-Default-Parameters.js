
// Example of default parameters in JavaScript functions
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

// Function with multiple default parameters
function calculateTotal(price = 0, taxRate = 0.1, shipping = 5) {
    const tax = price * taxRate;
    return price + tax + shipping;
}

// Arrow function with default parameters
const multiply = (a = 1, b = 1) => a * b;

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

// Function with default array parameters
function processItems(items = [], callback = item => item) {
    return items.map(callback);
}