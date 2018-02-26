const getUserInput = (userInput) => {
  userInput = prompt('rock, paper, scissors?').toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    console.log(`user: ${userInput}`);
  }

  else {
    console.log('user: wrong input');
  }

  return userInput;

}


const getCompChoice = () => {

  let compChoice = Math.random();

  if(compChoice <= 0.33) {
    compChoice = 'rock';
  }
  else if(compChoice <= 0.66) {
    compChoice = 'paper';
  }
  else {
    compChoice = 'scissors';
  }

  console.log(`computer: ${compChoice}`);

}


let winner = (userInput, compChoice) => {

  if (userInput === compChoice) {
    console.log('it\'s a tie');
  }

  else {

    if (userInput === 'rock') {
      if (compChoice === 'scissors') {
        console.log('user wins');
      }
      else  {
        console.log('computer wins');
      }
    }

    if (userInput === 'paper') {
      if (compChoice === 'rock') {
        console.log('user wins');
      }
      else  {
        console.log('computer wins');
      }
    }

    if (userInput === 'scissors') {
      if (compChoice === 'paper') {
        console.log('user wins');
      }
      else  {
        console.log('computer wins');
      }
    }
  }
}

let play = () => {
  let userInput = getUserInput();
  let compChoice = getCompChoice();
  winner(userInput, compChoice);
}

play();
