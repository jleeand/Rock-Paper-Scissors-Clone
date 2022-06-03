let userWins = 0
let robotWins = 0
const choices = document.querySelector("#choices")

const resultsP = document.querySelector("#results")


function getWinner(userChoice, robotChoice) { 
    

    

    let userText = userChoice.toString().toLowerCase();
    let robotText =robotChoice.toString().toLowerCase();

    let userImage = "./public/images/" + userText + ".png"
    
    let robotImage = "./public/images/" + robotText + ".png"


    const uImage = document.createElement("img")
    uImage.setAttribute('src', userImage);
    uImage.setAttribute('class', "userImage")
    uImage.setAttribute('height', '26%')
    uImage.setAttribute('width', '26%')

    const rImage = document.createElement("img")
    rImage.setAttribute("class", "robotImage")
    rImage.setAttribute('src', robotImage);
    rImage.setAttribute('height', '26%')
    rImage.setAttribute('width', '26%')


    const uText = document.createElement("p")
    uText.textContent = "Your choice"
    uText.setAttribute("class", "choiceText")
    uImage.append(uText);

    const rText = document.createElement("p")
    rText.textContent = "Opponets choice"
    rImage.append(rText)

    choices.appendChild(uImage);
    choices.appendChild(uText);
    choices.appendChild(rImage);
    choices.appendChild(rText);


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

    removeChilds(choices);


    updateUserChoice("Fire");
    updateRobotChoice();




    getWinner(userChoice,robotChoice)
    checkIfWin();



    userChoice = ""
    robotChoice = ""


})

const iceBTN = document.querySelector("#ice")

iceBTN.addEventListener('click', ()  => {

    removeChilds(choices);
    
    updateUserChoice("Ice")
    updateRobotChoice();


    getWinner(userChoice,robotChoice)
    checkIfWin();
   

    userChoice = ""
    robotChoice = ""

})


const waterBTN = document.querySelector("#water")

waterBTN.addEventListener('click', () => {

    removeChilds(choices);
   
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

    const userSPAN = document.querySelector("#userwins")
    const botSPAN = document.querySelector("#botwins")
   
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


const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};