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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert('Draw');
        return 'draw';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        return `win`;
    } else {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        return `lose`;
    }
}

function decideWinner(playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        alert(`You win the match! Your points: ${playerPoints} | Computer points: ${computerPoints}`);
    } else if (playerPoints < computerPoints) {
        alert(`You lose the match! Your points: ${playerPoints} | Computer points: ${computerPoints}`);
    } else {
        alert('You draw the match!'); 
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

game(5);
