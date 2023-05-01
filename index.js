const choices = ["Pierre", "Feuille", "Ciseaux"];
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let playerChoice = this.innerText;
        let computerChoice = computerPlay();
        let winner = playRound(playerChoice, computerChoice);
        result.innerHTML = ` Vous avez choisi ${playerChoice} et l'ordinateur a choisi ${computerChoice}, donc ${winner}`;
    });
});

function computerPlay() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
    
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Égalité !";
    } else if (playerChoice === "Pierre" && computerChoice === "Ciseaux" || 
        playerChoice === "Feuille" && computerChoice === "Pierre" || 
        playerChoice === "Ciseaux" && computerChoice === "Feuille") {
        return "Vous avez gagné !";
    } else {
        return "Vous avez perdu !";
    }
}
