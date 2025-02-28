
// Closures in JavaScript

// Example 1: Basic closure
function createCounter() {
  let count = 0;  // This variable is enclosed in the closure
  
  return function() {
    count++;  // The inner function has access to the outer function's variables
    return count;
  };
}

const counter = createCounter();
// counter() would return 1
// counter() would return 2
// counter() would return 3

// Example 2: Closures with parameters
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
// double(5) would return 10
// triple(5) would return 15

// Example 3: Closures to create private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
// account.getBalance() would return 100
// account.deposit(50) would return 150
// account.withdraw(30) would return 120
// balance is not accessible directly from outside

// Example 4: Closures in loops
function createFunctions() {
  const funcs = [];
  
  // Using let creates a new binding for each iteration
  for (let i = 0; i < 3; i++) {
    funcs.push(function() {
      return i;
    });
  }
  
  return funcs;
}

const functions = createFunctions();
// functions[0]() would return 0
// functions[1]() would return 1
// functions[2]() would return 2

// Example 5: Immediately Invoked Function Expression (IIFE) with closure
const counter2 = (function() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getValue: function() {
      return count;
    }
  };
})();

// counter2.increment() would return 1
// counter2.increment() would return 2
// counter2.decrement() would return 1
// counter2.getValue() would return 1