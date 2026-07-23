let end = false
let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1
    return rand
}
function getHumanChoice() {
    let answer = prompt("Enter your choice 1:Rock/2:Paper/3:Scissors")
    let result = 0
    while (result != answer) {
        if (answer === null) answer = prompt("I SAID PICK A NUMBER!")
        if (answer == 1 || answer == 2 || answer == 3) result = parseInt(answer)
        else answer = prompt("Wrong answer please enter again")
    }
    return result
}
function translate(num) {
    switch (num) {
        case 1:
            return "Rock"
            break
        case 2:
            return "Paper"
            break
        case 3:
            return "Scissors"
            break
    }
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Draw")
        // Wins when computer - human is -1 or 2
    } else if ((computerChoice - humanChoice == -1) || (computerChoice - humanChoice == 2)) {
        humanScore++
        console.log(`You Won! ${translate(humanChoice)} beats ${translate(computerChoice)}\nScore is comp:${computerScore} to hum:${humanScore}`)
    } else {
        computerScore++
        console.log(`You Lost! ${translate(computerChoice)} beats ${translate(humanChoice)}\nScore is comp:${computerScore} to hum:${humanScore}`)
    }
}
function playGame() {
    let rounds = 5
    while (rounds > 0) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        rounds--
    }
    if (humanScore > computerScore) console.log("!!!YOU WON!!!")
    else console.log("!!!YOU LOST!!!")
}