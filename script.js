var computerChoice = "rock";
var playerChoice = "rock";
function getComputerChoice (){
    let computerNumber = Math.floor(Math.random() * 3);
    if(computerNumber == 0){
        computerChoice = "rock" 
        return computerChoice
    }
    else if(computerChoice == 1){
        computerChoice = "paper" 
        return computerChoice
    }
    else{
        computerChoice = "scissor" 
        return computerChoice
    }
}

function getPlayerChoice(){
     playerChoice = prompt("Enter Your Choice!")
    return playerChoice
}


// playerChoice = getPlayerChoice();
// computerChoice = getComputerChoice();
// console.log(playerChoice)
// console.log(computerChoice)

function playRound(playerChoice,computerChoice){
    
    if(playerChoice === computerChoice){
        return console.log("Draw! " + playerChoice + " and " + computerChoice + " cause a draw." )
    }
    if(playerChoice === "rock" & computerChoice === "paper"){
        return console.log("You loose! " + playerChoice + " looses to " + computerChoice)
    }
    else if(playerChoice === "rock" & computerChoice === "scissor"){
        return console.log("You won! " + playerChoice + " wins to " + computerChoice)
    }
    else if(playerChoice === "paper" & computerChoice === "scissor"){
        return console.log("You loose! " + playerChoice + " looses to " + computerChoice)
    }
    else if(playerChoice === "paper" & computerChoice === "rock"){
        return console.log("You won! " + playerChoice + " wins to " + computerChoice)
    }
    else if(playerChoice === "scissor" & computerChoice === "rock"){
        return console.log("You loose! " + playerChoice + " looses to " + computerChoice)
    }
    else if(playerChoice === "scissor" & computerChoice === "paper"){
        return console.log("You won! " + playerChoice + " wins to " + computerChoice)
    }
}


function game(){
    for(let j = 0;j<=4;j++){
        console.log(playRound(getPlayerChoice(),getComputerChoice()))
    }

}
game();