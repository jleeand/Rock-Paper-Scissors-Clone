let userWins = 0
let robotWins = 0


function getUserChoice() {

    return prompt("Please enter a choice or input q to quit").toLowerCase()

}

function getRobotChoice() {
    let choices =  { 
        1 : "rock",
        2 : "paper",
        3 : "scissors"
    };

    let robotChoice = choices[Math.round(Math.random() * 2 + 1)]
    return robotChoice;

}

function getWinner(userChoice, robotChoice) {

    if (userChoice == robotChoice) {
        console.log("tie!")
    }

    else if(userChoice == "paper") {
       
        if(robotChoice == "rock") {
            console.log("You win)")
            userWins++
        }
        else {
            console.log("You lose!")
            robotWins++
        }   
    }
    else if(userChoice == "rock") {
       if(robotChoice == "paper") {
           console.log("You win!")
           userWins++
       }
       else {
           console.log("You lose!")
           robotWins++
        }   
    }
    else {
        if(robotChoice == "rock") {
            console.log("You win!")
            userWins++
        }
        else {
            console.log("You lose!")
            robotWins++
        }
    }
}

function game(){

    console.log("Welcome to Rock paper scissors!")
    console.log("Rock beats scissors, scissors beats paper, and paper beats rock.")

    let wantsToPlayAgain = true;
    
    while(wantsToPlayAgain) {

        let userChoice = getUserChoice()

        if(userChoice == 'q') {
            wantsToPlayAgain = false
            continue
        }

        let robotChoice = getRobotChoice()

        console.log("user : " + userChoice)
        console.log("robot :" + robotChoice)


        getWinner(userChoice,robotChoice)

        userChoice = ""
        robotChoice = ""

    }

    console.log("Game over!")
    console.log("Stats:")
    console.log("User wins : " + userWins)
    console.log("Robot wins : " + robotWins)

}

game()