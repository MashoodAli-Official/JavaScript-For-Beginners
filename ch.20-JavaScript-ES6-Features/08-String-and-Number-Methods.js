
// *******String Methods Examples*******

// 1. String length property
let text = "Hello World";
let length = text.length;  // Returns 11

// 2. String slice() - extracts a part of a string and returns the extracted part
let slice1 = text.slice(0, 5);      // Returns "Hello"
let slice2 = text.slice(6);         // Returns "World"
let slice3 = text.slice(-5);        // Returns "World" (counts from the end)

// 3. String substring() - similar to slice but cannot accept negative indexes
let substring = text.substring(0, 5);  // Returns "Hello"

// 4. String replace() - replaces a specified value with another value
let newText = text.replace("World", "JavaScript");  // Returns "Hello JavaScript"

// 5. String toUpperCase() and toLowerCase()
let upper = text.toUpperCase();  // Returns "HELLO WORLD"
let lower = text.toLowerCase();  // Returns "hello world"

// 6. String concat() - joins two or more strings
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);  // Returns "John Doe"

// 7. String trim() - removes whitespace from both sides
let untrimmed = "   Hello World   ";
let trimmed = untrimmed.trim();  // Returns "Hello World"

// 8. String charAt() - returns the character at a specified index
let char = text.charAt(0);  // Returns "H"

// 9. String split() - converts string to array
let words = text.split(" ");  // Returns ["Hello", "World"]
let chars = text.split("");   // Returns ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// *******Methods Examples*******

// 1. toString() - returns a number as a string
let num = 123;
let numAsString = num.toString();  // Returns "123"

// 2. toFixed() - formats a number with a specific number of decimals
let pi = 3.14159;
let formatted = pi.toFixed(2);  // Returns "3.14"

// 3. toPrecision() - formats a number to a specified length
let precise = pi.toPrecision(3);  // Returns "3.14"

// 4. Number() - converts variables to numbers
let strNum = "10";
let convertedNum = Number(strNum);  // Returns 10 as a number
let bool = true;
let boolAsNum = Number(bool);       // Returns 1

// 5. parseInt() - parses a string and returns a whole number
let parsedInt = parseInt("10.33");  // Returns 10
let parsedHex = parseInt("0xFF", 16);  // Returns 255 (parses hexadecimal)

// 6. parseFloat() - parses a string and returns a number
let parsedFloat = parseFloat("10.33");  // Returns 10.33

// 7. Math.round(), Math.ceil(), Math.floor()
let rounded = Math.round(4.7);    // Returns 5
let ceiling = Math.ceil(4.2);     // Returns 5
let floored = Math.floor(4.7);    // Returns 4

// 8. Math.max() and Math.min()
let maximum = Math.max(5, 10, 15);  // Returns 15
let minimum = Math.min(5, 10, 15);  // Returns 5

// 9. Math.random() - returns a random number between 0 (inclusive) and 1 (exclusive)
let random = Math.random();  // Returns a random decimal
let randomInt = Math.floor(Math.random() * 10) + 1;  // Random integer between 1 and 10