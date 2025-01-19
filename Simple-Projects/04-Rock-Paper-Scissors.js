// In this simple project exercise we will use the the ARROW FUNCTION with IF-ELSE-IF statement.

console.log('hi');
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Please use valid input');
  }
};
const userChoice = getUserChoice('scissors');
console.log(userChoice);

const getComputerChoice = () => {
  const computerInput = Math.floor(Math.random() * 3);
  console.log(computerInput);
  if (computerInput === 0) {
    console.log("rock")
    return 'rock';
  } else if (computerInput === 1) {
    console.log("paper")
    return 'paper';
  } else {
    console.log("scissors")
    return 'scissors';
  }
};
const computerChoice = getComputerChoice();
console.log(computerChoice);

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  }
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You win!';
  }

  if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You win!';
  }
  if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You win!';
  }
  // computer wins
  return 'You lose!';
};
console.log(determineWinner(userChoice, computerChoice));