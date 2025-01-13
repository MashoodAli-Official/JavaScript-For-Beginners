// This is simple project to convert the temperature from Kelvin to Fahrenheit.
const kelvin = 293;
console.log( "Temperature in Kelvin:",kelvin);

// Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
console.log("Temperature in Celsius:",celsius);

// Fahrenheit is 32 degrees less than Celsius.
const fahrenheit = celsius * (9/5) + 32; // 9/5 is a conversion factor.
console.log("Temperature in Fahrenheit:",fahrenheit);