console.log("hello");

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

function game() {
    let typo = "";
    for (i=1; i<6; i++) {
        let person = prompt(typo + "Enter ur choice: ROCK/PAPER/SCISSORS");
        typo = "";
        if (person === null) {
            console.log("Game aborted");
            break;
        }
        else if (choices.includes(person.toLowerCase())) {
            console.log(playRound(getCompChoice(), person.toLowerCase()));
        }
       
        else {
            typo = "You had a typo! ";
            i--;
        }
    }
}