// The Async keyword we are use to write the async function code in a more synchronous and readable manner.
// We have to write the synchronous code in this function.

// This function takes two parameters and returns a Promise
// It checks if both parameters are numbers and resolves with their sum
// If parameters are not numbers, it rejects with an error message
async function calculateSum(a, b) {
  return new Promise((resolve, reject) => {
    // Check if both parameters are numbers
    if (typeof a === 'number' && typeof b === 'number') {
      // If they are numbers, resolve Promise with their sum
      resolve(a + b);
    } else {
      // If not numbers, reject Promise with error message
      reject('Parameters must be numbers');
    }
  });
}

// Example usage of the calculateSum function
// The .then() handles successful resolution (when numbers are provided)
// The .catch() handles rejection (when non-numbers are provided)
calculateSum(5, 3).then(sum => {
  console.log('Sum:', sum);
}).catch(err => {
  console.error('Error:', err);
});