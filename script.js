let playerWins = 0;
let computerWins = 0;
const current = document.querySelector("#current");
const runningTotal = document.querySelector("#runningtotal");
const gameResult = document.querySelector("#gameresult");


function computerChoice() {
	let randomNum = Math.ceil(Math.random() * 3);
	if (randomNum === 1) {return "rock";}
	if (randomNum === 2) {return "paper";}
	if (randomNum === 3) {return "scissors";}
}

function cap(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
	let ps = playerSelection;
	let cs = computerSelection;
	let winningChoice;
	let losingChoice;
	let playerResult;
	let resultMessage;
	let statusMessage;
	let tieResult;

	// If starting a new game, delete result message for previous game
	if (gameResult.textContent) {
		gameResult.textContent = "";
	}

	// Check for tie
	if (ps === cs) {
		tieResult = cap(ps);
		current.textContent = `Tie! You both picked ${tieResult}.`;
		return;
	}
	else if (ps === "rock") {
		if (cs === "scissors") {playerResult = "win";}
		else {playerResult = "lose";}
	}
	else if (ps === "paper") {
		if (cs === "rock") {playerResult = "win";}
		else {playerResult = "lose";}
	}
	else if (ps === "scissors") {
		if (cs === "paper") {playerResult = "win";}
		else {playerResult = "lose";}
	}

	// Set win and lose variables
	if (playerResult === "win") {
		winningChoice = cap(ps);
		losingChoice = cap(cs);
		playerWins++;
	} else if (playerResult === "lose") {
		winningChoice = cap(cs);
		losingChoice = cap(ps);
		computerWins++;
	}

	resultMessage = `You ${playerResult} this round: ${winningChoice} beats ${losingChoice}.`;
	statusMessage = `Player: ${playerWins}. Computer: ${computerWins}.`;

	current.textContent = resultMessage;
	runningTotal.textContent = statusMessage;

	// Check if either player has reached five points yet
	if (playerWins >= 5) {
		gameResult.textContent = "You win this game!";
		playerWins = 0;
		computerWins = 0;
	} else if (computerWins >= 5) {
		gameResult.textContent = "The computer wins this game :( Play again?";
		playerWins = 0;
		computerWins = 0;
	}
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
	button.addEventListener("click", (e) => {
		let playerChoice = button.id;
		playRound(playerChoice, computerChoice());
	});
});

///////