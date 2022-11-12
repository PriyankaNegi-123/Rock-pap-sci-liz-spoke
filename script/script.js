"use strict"

let userScoreEl = document.getElementById("user-score");
let compScoreEl = document.getElementById("comp-score");
let userChoiceEl = document.getElementById("user-choice");
let compChoiceEl = document.getElementById("comp-choice");
let resultEl = document.getElementById("result");

let userScore = 0;
let compScore = 0;

let getCompChoice = function(){
    let weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomNumber = Math.trunc(Math.random()*5);
    let randomChoice = weapons[randomNumber];
    return randomChoice;
}

let getResult = function(userChoice, compChoice){
    if(userChoice === 'rock'){
        if(compChoice === 'rock'){
            return "Draw"
        }else if(compChoice === 'paper'){
            return "You lost"
        }else if(compChoice === 'scissors'){
            return "You Won"
        }else if(compChoice === 'lizard'){
            return "You Won"
        }else if(compChoice === 'spock'){
            return "You Lost"
        }
    }else if(userChoice === 'paper'){
        if(compChoice === 'rock'){
            return "You Won"
        }else if(compChoice === 'paper'){
            return "Draw"
        }else if(compChoice === 'scissors'){
            return "You Lost"
        }else if(compChoice === 'lizard'){
            return "You Lost"
        }else if(compChoice === 'spock'){
            return "You Won"
        }
    }else if(userChoice === 'scissors'){
        if(compChoice === 'rock'){
            return "Lost"
        }else if(compChoice === 'paper'){
            return "You Won"
        }else if(compChoice === 'scissors'){
            return "Draw"
        }else if(compChoice === 'lizard'){
            return "You Won"
        }else if(compChoice === 'spock'){
            return "You Lost"
        }
    } else if(userChoice === 'lizard'){
        if(compChoice === 'rock'){
            return "You Lost"
        }else if(compChoice === 'paper'){
            return "You Won"
        }else if(compChoice === 'scissors'){
            return "You Lost"
        }else if(compChoice === 'lizard'){
            return "Draw"
        }else if(compChoice === 'spock'){
            return "You Won"
        }
    }else if(userChoice === 'spock'){
        if(compChoice === 'rock'){
            return "You won"
        }else if(compChoice === 'paper'){
            return "You lost"
        }else if(compChoice === 'scissors'){
            return "You Won"
        }else if(compChoice === 'lizard'){
            return "You Lost"
        }else if(compChoice === 'spock'){
            return "Draw"
        }
    }
};

let updateScores = function(result, userChoice, compChoice){
    if(result=== 'You Won'){
        userScore++;
        userScoreEl.innerText = userScore;
        resultEl.innerText = 'YOU WON';
        resultEl.style.color = "green";
    }else if(result=== 'You Lost'){
        compScore++;
        compScoreEl.innerText = compScore;
        resultEl.innerText = 'YOU LOST';
        resultEl.style.color = "red";
    }else if(result=== 'Draw'){
        resultEl.innerText = 'DRAW';
        resultEl.style.color = "blue";
    }
    userChoiceEl.innerText = `You Chose ${userChoice}`;
    compChoiceEl.innerText = `Comp Chose ${compChoice}`;
    
};

let playGame = function (weapon){
    let userChoice = weapon;
    let compChoice = getCompChoice();
    let result = getResult(userChoice, compChoice);
    updateScores(result, userChoice, compChoice);
}










