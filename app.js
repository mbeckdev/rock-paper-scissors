'use strict';

function computerPlay() {
  //return randomly  'Rock', 'Paper', or 'Scissors'.
}

function showWinner(stringToShow) {
  console.log(stringToShow);
}

function playOneRound(playerSelection, computerSelection) {
  //inputs - case insenstitve - user should be able to type in  ROCK, rock, rOcK and it'll work
  // already lowercase from another function
  let stringToShow = '';
  //returns a string that declares the winner of the round like: 'You Lose! Paper beats Rock'
  if (playerSelection == 'rock') {
    switch (computerSelection) {
      case 'rock':
        stringToShow = 'You tied! Rock vs Rock';
        showWinner(stringToShow);
        return 'tie';
      case 'paper':
        stringToShow = 'You lose! Paper beats Rock';
        showWinner(stringToShow);
        return 'computer';
      case 'scissors':
        stringToShow = 'You win! Rock beats Scissors';
        showWinner(stringToShow);
        return 'player';
      default:
        //the computer selection isn't one of the three words - error
        console.log('Computer selection is not one of the three words!');
    }
  } else if (playerSelection == 'paper') {
    switch (computerSelection) {
      case 'paper':
        stringToShow = 'You tied! Paper vs Paper';
        showWinner(stringToShow);
        return 'tie';
      case 'scissors':
        stringToShow = 'You lose! Scissors beats Paper';
        showWinner(stringToShow);
        return 'computer';
      case 'rock':
        stringToShow = 'You win! Paper beats Rock';
        showWinner(stringToShow);
        return 'player';
      default:
        //the computer selection isn't one of the three words - error
        console.log('Computer selection is not one of the three words!');
    }
  } else if (playerSelection == 'scissors') {
    switch (computerSelection) {
      case 'scissors':
        stringToShow = 'You tied! Scissors vs Scissors';
        showWinner(stringToShow);
        return 'tie';
      case 'rock':
        stringToShow = 'You lose! Rock beats Scissors';
        showWinner(stringToShow);
        return 'computer';
      case 'paper':
        stringToShow = 'You win! Scissors beats Paper';
        showWinner(stringToShow);
        return 'player';
      default:
        //the computer selection isn't one of the three words - error
        console.log('Computer selection is not one of the three words!');
    }
  } else {
    return "You didn't enter something correctly";
  }
}

//test
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playOneRound(playerSelection, computerSelection));

function checkUserInput(playerInput) {
  //returns the result of the prompt

  // check that the input is one of three words, else make them type it in again

  switch (playerInput) {
    case 'rock':
    case 'paper':
    case 'scissors':
      //it's ok, do nothing and return the same thing that was input
      return playerInput;
    default:
      //else prompt for new input
      let newInput = prompt('Write "rock", "paper", or "scissors"', 'rock');
      //set input to lowercase version
      newInput = newInput.toLowerCase();
      //check the input and return the value -- recursion here
      return checkUserInput(newInput);
  }
}

function getComputerChoice() {
  let compChoice = '';
  let rndInt = 0; //will hold 0,1,or2 later
  rndInt = Math.floor(Math.random() * 3); //gives 0,1,or2
  switch (rndInt) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return 'computer choice is a bad integer';
  }
}

function game() {
  //ask for player input
  let playerInput;
  // let playerInput = prompt(
  //   'Write "rock", "paper", or "scissors"',
  //   "rock"
  // );
  // //translate input text to lowercase
  // playerInput = playerInput.toLowerCase();
  // //check input to make sure it's one of 3 words. - else prompt to fix it
  // playerInput = checkUserInput(playerInput); // Is a string either 'rock', 'paper', or 'scissors'

  // get computer random choice
  let computerChoice = '';

  //play a round - output text saying who won, return a string of who won, 'player' or 'computer'
  let winner = '';
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    // play 5 rounds

    // get new user input
    // let lol = document.getElementById('player-choice-rock');
    // console.log(lol);

    playerInput = acceptChoice();
    // playerInput = prompt('Write "rock", "paper", or "scissors"', 'rock');
    // translate input text to lowercase
    playerInput = playerInput.toLowerCase();
    // check input to make sure it's one of 3 words. - else prompt to fix it
    playerInput = checkUserInput(playerInput); // Is a string either 'rock', 'paper', or 'scissors'
    computerChoice = getComputerChoice(); // Is a string either 'rock', 'paper', or 'scissors'

    console.log(`Player: ${playerInput}   Computer:${computerChoice}`);

    winner = playOneRound(playerInput, computerChoice);
    // check who won
    // if player won, increment player win counter
    // else if computer won, increment computer win counter.
    if (winner == 'player') {
      playerScore++;
    } else if (winner == 'computer') {
      computerScore++;
    }
    //write scores to somewhere visible
    console.log(`player:${playerScore}  computer:${computerScore}`);
  }

  //check who won all rounds
  let gameWinnerMessage = '';
  if (playerScore == computerScore) {
    gameWinnerMessage = 'You tied the game!';
  } else if (playerScore > computerScore) {
    gameWinnerMessage = 'You win the game!';
  } else {
    gameWinnerMessage = 'You lost the game!';
  }
  //write who won all rounds to screen
  console.log(gameWinnerMessage);
}

// const choices = querySelectorAll('.choice-button');
// choices.forEach((choice) => {
//   choice.addEventListener('keydown', accpetChoice);
// });

// window.addEventListener('click', acceptChoice);
// document
//   .querySelector(`.choice-button`)
//   .addEventListener('click', acceptChoice);

//
//
//

let btns = document.querySelectorAll(`.choice-button`);
btns.forEach((btn) => {
  btn.addEventListener('click', acceptChoice);
  btn.addEventListener('mousedown', setMouseDownStyles);
  btn.addEventListener('mouseup', setMouseUpStyles);
  btn.addEventListener('mousedown', playSound);
});
// let btnImgs = document.querySelectorAll(`.choice-image`);
let fuzzBalls = document.querySelectorAll(`.fuzz-ball`);
//
//
//

function acceptChoice(e) {
  // let choice = document.querySelector(`.choice-button[data-choice='rock']`);
  // let choice = document.querySelector(
  //   `.choice-button[data-choice='${e.target}']`
  // );
  let choice = e.target.parentElement;
  // console.log(e.target.parentElement);
  // choice.style.boxShadow = '1px 1px 20px red';
  // console.log(choice);
  // console.log(e);
  addBackgroundGlow(e);
}

function setMouseDownStyles(e) {
  let choice = e.target.parentElement;
  // choice.style.transform = 'scale(2.0)';
  if (choice.classList.contains('choice-mouse-up')) {
    choice.classList.remove('choice-mouse-up');
  }
  choice.classList.add('choice-mouse-down');

  choice.classList.remove('hover-bigger');

  // choice.style.boxShadow = '1px 1px 20px red';
}

function setMouseUpStyles(e) {
  // This runs when mouse button is let up. - just to make the click exciting
  // add a class
  let choice = e.target.parentElement;
  choice.classList.remove('choice-mouse-down');
  choice.classList.add('choice-mouse-up');
  let background = choice.previousSibling.previousSibling;
  console.log(choice);
  console.log(background);
  background.classList.remove('hidden');
  console.log(background);

  // choice.classList.add('hover-bigger');

  // choice.style.transform = 'scale(1.5)';
}

function addBackgroundGlow(e) {
  let fuzzBall = e.target.parentElement.firstElementChild; //div thing
  fuzzBall.classList.remove('hidden');

  // let glowElement = document.createElement('div');
  //glowElement.textContent = 'adsf';
  // // let newContent = document.createTextNode('asdfasdfasdf');
  // glowElement.style.position = 'relative';
  // glowElement.style.zIndex = 4;
  // choice.appendChild(glowElement);
}

function resetChoiceSizes() {
  btns.forEach((btn) => {
    btn.classList.add('hover-bigger');
    // btn.style.transform = 'scale(1)';
    btn.classList.remove('choice-mouse-up');
    console.log(btn);
  });

  fuzzBalls.forEach((fuzzBall) => {
    if (!fuzzBall.classList.contains('hidden')) {
      fuzzBall.classList.add('hidden');
    }
  });
}

function playSound(e) {
  const audio = document.querySelector(`audio#select`);
  // const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running - like when you hit q
  audio.currentTime = 0; // rewind to the start - so you can press it a bunch of times fast
  audio.play();
  // key.classList.add('playing');
}

// will add a new div behind the picture and box-shadow with a large bloom

//add new div
//position new div
//add style of box-shadow  0 0 50px white
//set z-index -1

//then we can take out the focus border - i think that'll be obvious enough

// game();
// let testElement = document.querySelector('input');

// let testElement = document.querySelector(`.choice-button[data-choice='paper']`);
// testElement.style.boxShadow = '1px 1px 20px black';
