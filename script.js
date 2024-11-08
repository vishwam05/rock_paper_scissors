console.log("Hello World!")

//Generates a Random from 1 to 3
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//Randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice() {
    const randomNum = getRandom(1, 3);
    let choice;
    if (randomNum === 1) {
        choice = "rock"
        return choice
    } else if (randomNum === 2) {
        choice = "paper"
        return choice
    } else if (randomNum === 3) {
        choice = "scissor"
        return choice
    }
}

//Takes the user choice and returns it.
function getHumanChoice() {
    let user = prompt("Rock, Paper, or Scissor").toLowerCase();

    if (user === "rock" || user === "paper" || user === "scissor") {
        return user;
    } else {
        console.log("Incorrect Input");
        return null; // Optional: return null to indicate an invalid input
    }
}

//Takes the human and computer player choices as arguments and increments the round winner’s score and logs a winner announcement.
function playRound(humanChoice, computerChoice, human_score, computer_score) {
    if (humanChoice === computerChoice) {
        console.log("It's a Draw")
    } else if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
        console.log("Human Wins")
        human_score += 1
        return {
            human_score,
            computer_score
        }
    } else if ((humanChoice === "scissor" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissor")) {
        console.log("Computer Wins")
        computer_score += 1
        return {
            human_score,
            computer_score
        }
    }

}

//play 5 rounds, keeps track of the scores and declares a winner at the end.
function playGame() {
    let human_score = 0;
    let computer_score = 0;

    for (let play = 0; play < 5; play++) {

        const computerChoice = getComputerChoice()
        const humanChoice = getHumanChoice()
        //
        if (!humanChoice) {
            console.log("Invalid choice, please try again.");
            play--;
            continue;
        }
     const scores = playRound(humanChoice, computerChoice, human_score, computer_score);
        human_score = scores.human_score;
        computer_score = scores.computer_score;

        console.log(`Round ${play + 1}: Human - ${humanChoice} | Computer - ${computerChoice}`);
        console.log(`Scores -> Human: ${human_score}, Computer: ${computer_score}\n`);
    }

    //Final Winner
    if (human_score > computer_score) {
        console.log("Human Wins")
    } else if (human_score < computer_score) {
        console.log("Computer Wins")
    } else {
        console.log("Its a Draw")
    } {}
}

//Main
playGame()