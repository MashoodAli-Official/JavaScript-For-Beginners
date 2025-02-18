
// Basic console logging
console.log("Basic log message");

// Console logging with multiple values
console.log("Multiple values:", 42, {name: "Harry"}, [1,2,3]);

// Console error for errors
console.error("This is an error message");

// Console warning for warnings
console.warn("This is a warning message");

// Console info for informational messages
console.info("This is an info message");

// Console debug for debug messages
console.debug("This is a debug message");

// Console table for tabular data
console.table([
  {name: "Harry", age: 30},
  {name: "Potter", age: 25}
]);

// Console group for grouping related logs
console.group("Group 1");
console.log("Message inside group");
console.log("Another message inside group");
console.groupEnd();

// Console time to measure execution time
console.time("Timer");
for(let i = 0; i < 1000000; i++) {
  // Some operation
}
console.timeEnd("Timer");

// Console trace to show stack trace
function foo() {
  console.trace("Stack trace");
}
foo();

// Console assert for conditional logging
console.assert(1 === 2, "This will show because assertion is false");

// Console dir for object inspection
const obj = {
  name: "Harry Potter",
  age: 30,
  address: {
    street: "123 Main St",
    city: "London",
  }
};
console.dir(obj);