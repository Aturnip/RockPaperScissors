const choices = ["rock", "paper", "scissors"];

function getCompChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function playRound(computer_choice, player_choice) {
    if (computer_choice === player_choice) return "Draw";
    else if (computer_choice === "rock") return player_choice === "paper" ? "Player wins" : "Computer wins";
    else if (computer_choice === "paper") return player_choice === "scissors" ? "Player wins" : "Computer wins";
    else return player_choice === "rock" ? "Player wins" : "Computer wins";
}

function gameDemo(weapon) {
    let result = playRound(getCompChoice(), weapon);
    resultWindow.textContent = result;
    if (result === "Player wins") {
        playerPoints++;
    } else if (result === "Computer wins") {
        computerPoints++;
    }
    computerPoints>=5 ? scoreComp.textContent = "Computer wins the match!" : scoreComp.textContent = "Computer: " + computerPoints;
    playerPoints>=5 ? scorePlayer.textContent = "Player wins the match!" : scorePlayer.textContent = "Player: " + playerPoints;
}

// function game() {
//     let typo = "";
//     for (i=1; i<6; i++) {
//         let person = prompt(typo + "Enter ur choice: ROCK/PAPER/SCISSORS");
//         typo = "";
//         if (person === null) {
//             console.log("Game aborted");
//             break;
//         }
//         else if (choices.includes(person.toLowerCase())) {
//             console.log(playRound(getCompChoice(), person.toLowerCase()));
//         }
       
//         else {
//             typo = "You had a typo! ";
//             i--;
//         }
//     }
// }

const buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
    button.addEventListener("click", () => gameDemo(button.id));
})

let playerPoints = 0;
let computerPoints = 0;
const resultWindow = document.querySelector("#result");
const scorePlayer = document.querySelector("#scorePlayer");
const scoreComp = document.querySelector("#scoreComp");



