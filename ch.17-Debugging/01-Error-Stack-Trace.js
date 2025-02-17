// The stack trace is a list of function calls that led to the error. 
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return multiply(a, b) / multiply(b, b);
}

function main() {
  try {
    console.log(divide(2, 0));
  } catch (error) {
    console.error(error);
    console.error(error.stack);
  }
}

main();