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
    for (i=1; i<6; i++) {
        let person = prompt("enter ur choice: ROCK/PAPER/SCISSORS");
        if (choices.includes(person.toLowerCase())) {
            console.log(playRound(getCompChoice(), person.toLowerCase()));
        }
        else {
            let person = prompt("You had a typo, enter again: ROCK/PAPER/SCISSORS");
            i--
        }     
    }
}