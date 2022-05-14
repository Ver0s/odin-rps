const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const scoreTracker = document.getElementById('score-tracker');
const roundTracker = document.getElementById('round-tracker');

let playerPoints = 0;
let computerPoints = 0;

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

function playRound(e) {
    playerSelection = e.target.value;
    let computerSelection = computerPlay();
    scoreTracker.textContent = `Your points: ${playerPoints} | Computer points: ${computerPoints}`;

    if (computerPoints === 5 || playerPoints === 5) {
        decideWinner();
        let resetButton = document.createElement('button');
        resetButton.textContent = 'Reset Game';
        resetButton.classList.add('reset');
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', reset);
    }

    if (playerSelection === computerSelection) {
        roundTracker.textContent = 'Draw';
        return
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        roundTracker.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return playerPoints++;
    } else {
        roundTracker.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        return computerPoints++;
    }
}

function computerPlay() {
    options = ['rock','paper','scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

function getValidInput(text, acceptedInput) {  
    let userInput = prompt(text).toLowerCase();
    while (!(acceptedInput.includes(userInput))) {
        userInput = prompt(`Input has to be either: ${acceptedInput}`).toLowerCase();   
    }
    return userInput;
}

function decideWinner() {
    if (playerPoints > computerPoints) {
        scoreTracker.textContent = `You win the match! Your points: ${playerPoints} | Computer points: ${computerPoints}`;
    } else if (playerPoints < computerPoints) {
        scoreTracker.textContent = `You lose the match! Your points: ${playerPoints} | Computer points: ${computerPoints}`;
    } else {
        scoreTracker.textContent = 'You draw the match!'; 
    }
}

function reset(e) {
    playerPoints = 0;
    computerPoints = 0;
    scoreTracker.textContent = `Your points: 0 | Computer points: 0`;
    roundTracker.textContent = '';
    e.target.remove();
}
