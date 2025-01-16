// 👉 👉 This is Coin Flip Simulator
// In this exercise, we will use the Math.random() method to simulate a coin flip.
// The Math.random() method returns a random decimal number between 0 and 1.

let coinFace = Math.floor(Math.random() * 2); // 0 or 1
console.log(coinFace);
let result = '';

switch (coinFace){
    case 0:
        result = "Heads";
        break;
    case 1:
        result = "Tails";
        break;
};
console.log("The result is: ",result);