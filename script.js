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
	let ps = playerSelection.toLowerCase();
	let cs = computerSelection.toLowerCase();
	let winningChoice;
	let losingChoice;
	let playerResult;
	let resultMessage;

	// Check for tie
	if (ps === cs) {
		let tieResult = cap(ps);
		return `Tie! You both picked ${tieResult}.`;
	}
	if (ps === "rock") {
		if (cs === "scissors") {playerResult = "win";}
		else {playerResult = "lose";}
	}
	if (ps === "paper") {
		if (cs === "rock") {playerResult = "win";}
		else {playerResult = "lose";}
	}
	if (ps === "scissors") {
		if (cs === "paper") {playerResult = "win";}
		else {playerResult = "lose";}
	}

	// Set win and lose variables
	if (playerResult === "win") {
		winningChoice = cap(ps);
		losingChoice = cap(cs);
	}
	else {
		winningChoice = cap(cs);
		losingChoice = cap(ps);
	}

	resultMessage = `You ${playerResult}! ${winningChoice} beats ${losingChoice}.`;
	return resultMessage;
}

function game() {
	let playerChoice;
	let gameResult;
	let playerWins = 0;
	const options = ["rock", "paper", "scissors"];
	console.log("Let's play!");

	for (let i = 0; i < 5; i++) {
		console.log(`Round ${(i+1).toString()}:`);
		playerChoice = prompt("What do you pick: rock, paper, or scissors?");
		// Check for invalid input
		while (options.includes(playerChoice.toLowerCase() === false)) {
			playerChoice = prompt("The options are rock, paper, or scissors. Which do you pick?");
		}
		gameResult = playRound(playerChoice, computerChoice());
		if (gameResult.indexOf("win") > -1) {
			playerWins++;
		}
		console.log(gameResult);
	}
	if (playerWins >= 3) {
		console.log("You are the winner of this game :D");
	} else {
		console.log("You didn't win this time :/ Play again?");
	}
}

///////