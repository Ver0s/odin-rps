const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('results');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

function playRound(e, playerSelection, computerSelection) {
    playerSelection = e.target.value;
    if (playerSelection === computerSelection) {
        console.log('Draw');
        return 'draw';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return `win`;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return `lose`;
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

function decideWinner(playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        console.log(`You win the match! Your points: ${playerPoints} | Computer points: ${computerPoints}`);
    } else if (playerPoints < computerPoints) {
        console.log(`You lose the match! Your points: ${playerPoints} | Computer points: ${computerPoints}`);
    } else {
        console.log('You draw the match!'); 
    }
}

function game(rounds) {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < rounds; i++) {
        let playerSelection = getValidInput('What\'s your choice?', ['rock','paper','scissors']);
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 'win') {
            playerPoints += 1;
        } else if (roundResult === 'lose') {
            computerPoints += 1;
        }
    }
    decideWinner(playerPoints, computerPoints);
}
