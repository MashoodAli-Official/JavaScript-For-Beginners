// Javascript is providing us with a lot of built-in methods and properties to manipulate strings.
// These methods in properties are;

// 1. length property
const studentName = "Harry Potter";
console.log(studentName.length); // 12

// 2. charAt() method helps to get the character at a specific index in the string 
console.log(studentName.charAt(2));

// 3. Concat() method helps to concatenate two strings
let firstName = "Harry";
let lastName = "Potter";
console.log('My full name is ' + firstName.concat(' ', lastName)); 

// 4. indexOf() this method helps to get the index number if the character is found in the string
const sentence = "I am a student of Hogwarts";
console.log(sentence.indexOf('Hogwarts'));

// 5. replace() this method helps to replace the available character with new character
const sentence1 = "I am a student of Hogwarts";
console.log(sentence1.replace('Hogwarts', 'Oxford'));

// 6. slice() this method helps to get the substring from the string, we have to provide the starting index and ending index
const sentence2 = "I am a student of Hogwarts";
console.log(sentence2.slice(5,10));

// 7. split() this method helps to convert the string into an array/object
const sentence3 = "I am a student of Hogwarts";
console.log(sentence3.split(", "));

// 8. toLowerCase() this method helps to convert the string into lowercase
const sentence4 = "I am a student of Hogwarts";
console.log(sentence4.toLowerCase());

// 9. toUpperCase() this method helps to convert the string into uppercase
const sentence5 = "I am a student of Hogwarts";
console.log(sentence5.toUpperCase());

// 10. trim() this method helps to remove the white spaces from the string
const sentence6 = "   I am a student of Hogwarts   ";
console.log(sentence6.trim());