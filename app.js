'use strict';

function computerPlay() {
  //return randomly  'Rock', 'Paper', or 'Scissors'.
}

function showWinner(stringToShow) {
  document.getElementById('what-beats-what').textContent = stringToShow;
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
      blnAcceptingInput = true;
    // tell user something is wrong

    // let newInput = prompt('Write "rock", "paper", or "scissors"', 'rock');
    // //set input to lowercase version
    // newInput = newInput.toLowerCase();
    // //check the input and return the value -- recursion here
    // return checkUserInput(newInput);
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

let thePlayerInput = '';
let blnAcceptingInput = 'false';

intro(); // start of everything! after reload.
function intro() {
  //do intro animations. !
  introTextAnimations();
}
const intro1 = document.getElementById('intro1');
intro1.addEventListener('animationend', afterTextAnimation1);
const intro2 = document.getElementById('intro2');
intro2.addEventListener('animationend', afterTextAnimation2);
const intro3 = document.getElementById('intro3');
intro3.addEventListener('animationend', afterTextAnimation3);
const nowServing = document.getElementById('now-serving');
nowServing.addEventListener('animationend', afterNowServing);
const makeYourChoice = document.getElementById('make-choice');
makeYourChoice.addEventListener('animationend', afterMakeYourChoice);

function introTextAnimations() {}
function afterTextAnimation1() {
  intro1.classList.add('hidden-display');
  intro1.classList.remove('container-fade-in-and-out-initial');
  intro2.classList.remove('hidden-display');
  intro2.classList.add('container-fade-in-and-out');
}
function afterTextAnimation2() {
  intro2.classList.add('hidden-display');
  intro2.classList.remove('container-fade-in-and-out');
  intro3.classList.remove('hidden-display');
  intro3.classList.add('container-fade-in');
}
function afterTextAnimation3() {
  // intro3.classList.add('hidden-display');
  intro3.classList.remove('container-fade-in-and-out');
  nowServing.classList.remove('hidden');
  nowServing.classList.add('container-fade-in');
}
function afterNowServing() {
  // intro3.classList.add('hidden-display');
  nowServing.classList.remove('container-fade-in');

  document.getElementById('choice-container').classList.remove('hidden');
  makeYourChoice.classList.remove('hidden');
  makeYourChoice.classList.add('drop-in');
}
function afterMakeYourChoice() {
  document.getElementById('three-choices').classList.remove('hidden');
  document.getElementById('score-and-label').classList.remove('hidden');
  document.getElementById('shake-area').classList.remove('hidden');

  // when done...
  blnAcceptingInput = true;
  //show everything else
}

function nextRound() {
  thePlayerInput = '';
  blnAcceptingInput = true;
}

let theComputerChoice = '';
let playerScore = 0;
let computerScore = 0;
function afterInputRecieved() {
  // sets blnAcceptingInput = true;
  if (blnAcceptingInput == false) {
    // blnAcceptingInput is false because we clicked something

    // check playerinput
    thePlayerInput = checkUserInput(thePlayerInput);

    // create computer input

    theComputerChoice = getComputerChoice(); // Is a string either 'rock', 'paper', or 'scissors'

    shakeAnimations(thePlayerInput, theComputerChoice);
  }
}
function afterAnimations() {
  // check who wins
  let winner = '';
  winner = playOneRound(thePlayerInput, theComputerChoice);

  // check who won
  // if player won, increment player win counter
  // else if computer won, increment computer win counter.
  if (winner == 'player') {
    playerScore++;
    // write playerScore to the screen
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('player-score').classList.add('score-glow');
  } else if (winner == 'computer') {
    computerScore++;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('computer-score').classList.add('score-glow');
  } else {
    // tie - do nothing
  }

  //take off selection glow
  resetChoiceSizes();

  //write scores to somewhere visible
  // console.log(`player:${playerScore}  computer:${computerScore}`);

  //  and set bln to true for next round -- if <5 rounds played, else ending
  blnAcceptingInput = true;
  checkForEndOfGame();

  // animate player and computer
  // at the end of this animation,
}

const endGameMessageEl = document.getElementById('end-game-message');
function checkForEndOfGame() {
  if (playerScore >= 5) {
    endGameMessageEl.textContent =
      'You beat Bruce Bogtrotor! You get his ticket!';
    document.getElementById('ticket-number-you').textContent = '15';
    document.getElementById('ticket-number-computer').textContent = '97';
    getReadyForNewGame();
  } else if (computerScore >= 5) {
    endGameMessageEl.textContent =
      "You lost to Bruce Bogrotor! You're going to be here all day!";
    getReadyForNewGame();
  }
}

function getReadyForNewGame() {
  blnAcceptingInput = false;
  removeButtonEventListeners();
  removeButtonHover();
  enablePlayAgainButton();
  btnImgs.forEach((btnImg) => {
    btnImg.classList.remove('cursor-pointer');
    btnImg.classList.add('cursor-default');
  });
}
function setShakerPicsToFists() {
  playerHand.setAttribute('src', `media/left-rock.png`);
  computerHand.setAttribute('src', `media/right-rock.png`);
}
function removeButtonEventListeners() {
  btns.forEach((btn) => {
    btn.removeEventListener('click', acceptChoice);
    btn.removeEventListener('mousedown', setMouseDownStyles);
    btn.removeEventListener('mouseup', setMouseUpStyles);
    btn.removeEventListener('mousedown', playSound);
  });
}

function removeButtonHover() {
  btns.forEach((btn) => {
    btn.classList.remove('hover-bigger');
  });
}
function addButtonEventListeners() {
  btns.forEach((btn) => {
    btn.addEventListener('click', acceptChoice);
    btn.addEventListener('mousedown', setMouseDownStyles);
    btn.addEventListener('mouseup', setMouseUpStyles);
    btn.addEventListener('mousedown', playSound);
  });
}

document.getElementById('play-again').style.visibility = 'hidden'; //the opposite is visible

function enablePlayAgainButton() {
  document.getElementById('play-again').style.visibility = 'visible';
  document.getElementById('play-again').addEventListener('click', playAgain);
}
function playAgain() {
  document.getElementById('play-again').removeEventListener('click', playAgain);
  document.getElementById('play-again').style.visibility = 'hidden'; //the opposite is visible

  document.getElementById('ticket-number-you').textContent = '97';
  document.getElementById('ticket-number-computer').textContent = '15';

  resetScores();
  resetTexts();
  resetChoiceSelections();
  blnAcceptingInput = true;
  setShakerPicsToFists();
  addButtonEventListeners();
  //hereherehere add hoverbigger to all
}

function resetChoiceSelections() {
  resetChoiceSizes();
}
function resetScores() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function resetTexts() {
  document.getElementById('what-beats-what').textContent = '';
  document.getElementById('end-game-message').textContent = '';
}

// CHANGES ON SCORE DIGITS
document
  .getElementById('player-score')
  .addEventListener('transitionend', removeTransition);
document
  .getElementById('computer-score')
  .addEventListener('transitionend', removeTransition);

function removeTransition(e) {
  // if (e.propertyName !== 'score-glow') return; // skip it if it's not a transform
  this.classList.remove('score-glow');
}

// WHAT BEATS WHAT
function waitABit() {
  document.getElementById('what-beats-what').style.color = 'blue';
}

// CHANGES AND ANIMATIONS ON PLAYER-SHAKER AND COMPUTER-SHAKER
let playerHand = document.getElementById('player-shaker');
let computerHand = document.getElementById('computer-shaker');
function shakeAnimations(playerChoice, theComputerChoice) {
  //change to fists

  playerHand.setAttribute('src', `media/left-rock.png`);
  computerHand.setAttribute('src', `media/right-rock.png`);
  //shake fists
  // add class .fist-shaking (this will start the animation)

  playerHand.classList.add('fist-shaking');
  computerHand.classList.add('fist-shaking');

  //wait for shaking to finish
  //  we will wait to continue by adding an even listener to each that
  //    fires when animation is over - will go to function afterShakeAnimation
}

playerHand.addEventListener('animationend', afterShakeAnimationPlayer); //dont use () like afterShakeAnimation() because it calls that on page load!
computerHand.addEventListener('animationend', afterShakeAnimationComputer);

let lastRoundPlayerAnimation = '';
let lastRoundComputerAnimation = '';
function afterShakeAnimationPlayer() {
  changeHandPics();

  //take off 'fist-shaking'  from playerHand and computerHand
  playerHand.classList.remove('fist-shaking');
  computerHand.classList.remove('fist-shaking');

  //add animation class depending on thePlayerInput playerHand or theComputerChoice computerHand

  //test
  lastRoundPlayerAnimation = 'player-paper-beats-rock';
  lastRoundComputerAnimation = 'player-paper-beats-rock';
  //add the class
  playerHand.classList.add(`${lastRoundPlayerAnimation}`);
  computerHand.classList.add(`${lastRoundComputerAnimation}`);
  afterAnimations();
}

function removeOldFistAnimations() {
  if (playerHand.classList.contains(`${lastRoundPlayerAnimation}`)) {
    playerHand.classList.remove(`${lastRoundPlayerAnimation}`);
  }
  if (computerHand.classList.contains(`${lastRoundComputerAnimation}`)) {
    computerHand.classList.remove(`${lastRoundComputerAnimation}`);
  }

  // playerHand.classList.remove('fist-shaking');
  // computerHand.classList.remove('fist-shaking');
}

function afterShakeAnimationComputer() {
  // changeHandPics();
}

function changeHandPics() {
  document
    .getElementById('player-shaker')
    .setAttribute('src', `media/left-${thePlayerInput}.png`);
  document
    .getElementById('computer-shaker')
    .setAttribute('src', `media/right-${theComputerChoice}.png`);
}

let btns = document.querySelectorAll(`.choice-button`);
btns.forEach((btn) => {
  btn.addEventListener('click', acceptChoice);
  btn.addEventListener('mousedown', setMouseDownStyles);
  btn.addEventListener('mouseup', setMouseUpStyles);
  btn.addEventListener('mousedown', playSound);
});
let btnImgs = document.querySelectorAll(`.choice-image`);
let fuzzBalls = document.querySelectorAll(`.fuzz-ball`);

function acceptChoice(e) {
  // don't continue if this boolean is false - means someone got to score 5
  if (blnAcceptingInput == true) {
    // reset
    document.getElementById('what-beats-what').textContent = '';
    document.getElementById('player-score').classList.remove('score-glow');
    document.getElementById('computer-score').classList.remove('score-glow');

    //remove old animations from fist shaking
    removeOldFistAnimations();

    // playerHand.removeEventListener('transitionend', afterShakeAnimation());
    // computerHand.removeEventListener('transitionend', afterShakeAnimation());
    // playerHand.addEventListener('transitionend', afterShakeAnimation());
    // computerHand.addEventListener('transitionend', afterShakeAnimation());

    // This resetting a random offsetWidth will allow the animation to happen more than once. Keep it!
    void document.getElementById('player-score').offsetWidth;
    void document.getElementById('computer-score').offsetWidth;
    void playerHand.offsetWidth;
    void computerHand.offsetWidth;

    // let choice = e.target.parentElement;

    addBackgroundGlow(e);

    thePlayerInput = e.target.parentElement.getAttribute('data-choice');
    // return e.target.parentElement.getAttribute('data-choice');
    blnAcceptingInput = false;
    afterInputRecieved();
  }
  blnAcceptingInput = false;
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

  background.classList.remove('hidden');

  // choice.classList.add('hover-bigger');

  // choice.style.transform = 'scale(1.5)';
}

function addBackgroundGlow(e) {
  let fuzzBall = e.target.parentElement.firstElementChild; //div thing
  fuzzBall.classList.remove('hidden');
}

function resetChoiceSizes() {
  btns.forEach((btn) => {
    btn.classList.add('hover-bigger');
    // btn.style.transform = 'scale(1)';
    btn.classList.remove('choice-mouse-up');
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
