let userWins = 0
let robotWins = 0

let resultsP = document.querySelector("#results")


function getWinner(userChoice, robotChoice) {

    if (userChoice == robotChoice) {
        resultsP.textContent = "Draw!"
    }

    else if(userChoice == "Ice") {
       
        if(robotChoice == "Fire") {
            resultsP.textContent = "You lose!"
            robotWins++
        }
        else {
            resultsP.textContent = "You win!"
            userWins++
        }   
    }
    else if(userChoice == "Fire") {
       if(robotChoice == "Water") {
           resultsP.textContent = "You lose!"
           robotWins++
       }
       else {
           resultsP.textContent = "You win!"
           userWins++
        }   
    }
    else {
        if(robotChoice == "Fire") {
            resultsP.textContent = "You win!"
            userWins++
        }
        else {
            resultsP.textContent = "You lose!"
            robotWins++
        }
    }
}

// game()

let userChoice;
let robotChoice;

const fireBTN = document.querySelector("#fire")


fireBTN.addEventListener('click', () => {


    updateUserChoice("Fire");
    updateRobotChoice();

    getWinner(userChoice,robotChoice)
    checkIfWin();



    userChoice = ""
    robotChoice = ""


})

const iceBTN = document.querySelector("#ice")

iceBTN.addEventListener('click', ()  => {
    
    updateUserChoice("Ice")
    updateRobotChoice();


    getWinner(userChoice,robotChoice)
    checkIfWin();
   

    userChoice = ""
    robotChoice = ""

})


const waterBTN = document.querySelector("#water")

waterBTN.addEventListener('click', () => {
   
    updateUserChoice("Water")
    updateRobotChoice();


    getWinner(userChoice,robotChoice)
    checkIfWin();
    


    userChoice = ""
    robotChoice = ""



})


function updateUserChoice(type) {
    userChoice = String(type)
    console.log(`user choice:  ${type}`)
    
}

function updateRobotChoice() {
    let choices =  { 
        1 : "Fire",
        2 : "Ice",
        3 : "Water"
    };

    robotChoice = choices[Math.round(Math.random() * 2 + 1)]

    console.log(`robot choice: ${robotChoice}`)   
}

function checkIfWin() {

    let userSPAN = document.querySelector("#userwins")
    let botSPAN = document.querySelector("#botwins")
   
    userSPAN.textContent = userWins.toString();
    botSPAN.textContent = robotWins.toString();

    if(userWins == 5) {
        resultsP.textContent = "You have won the game! Congrats!"
        userWins = 0
        robotWins = 0
        return;
    }
    else if(robotWins == 5) {
        resultsP.textContent = "You have lost the game! Way to go!"
        userWins = 0
        robotWins = 0
        return;
    }
    else return;
}