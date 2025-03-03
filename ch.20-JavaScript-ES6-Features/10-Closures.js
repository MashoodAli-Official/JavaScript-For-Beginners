// A closure is a function that has access to its own scope, as well as the scope of its outer functions,
// even when the outer functions have returned.
function outer() {
  let x = 'Harry Potter';
  function inner() {
    console.log(x);
  }
  return inner;
}

const myClosure = outer();
myClosure(); // outputs Harry Potter

// In this 👆👆 example, the inner function has access to the x variable from the outer function,
// even after outer has returned. This is a closure.