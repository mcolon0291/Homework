
let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;
const resetBtn = document.querySelector('.reset');

let choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for oppponent
    opponent = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = opponent + ".png";


    const winner = document.querySelector("winner");
    //check for winner
    if (you === opponent) {
        setTimeout(() => {
        alert('It is a Draw! ')
        },1000)
        // yourScore += 1;
        // opponentScore += 1;
    }
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
                
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
    }
    
 let playerScore =  document.getElementById("your-score");
    playerScore.innerHTML = `Player: ${yourScore}`;
    playerScore.style.color = "white";

let computerScore = document.getElementById("opponent-score");
    computerScore.innerHTML = `Computer: ${opponentScore}`;
    computerScore.style.color = "white";

}



// reset button
resetBtn.addEventListener('click', (e) => {
    location.reload();
})

















