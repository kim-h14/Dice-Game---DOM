let currentRound = 0;
let globalP1 = 0;
let globalP2 = 0;
let currentPlayer =1;

// Add Event listener to button Roll Dice

document.querySelector("button.roll").addEventListener("click", rollDiceClick);
function rollDiceClick() {
  
  // Random number created gives dice image value linked to event listener 
  let diceValue = Math.floor(Math.random()*6) + 1;
  let image = "images/dice-" + diceValue + ".png";

  document.querySelector(".dice .diceImg").setAttribute("src",image);

  // Get the current round value from the HTML and convert it to a number
  currentRound = parseInt(document.querySelector(".roundP" + currentPlayer).innerHTML);

  if (isNaN(currentRound)) {
    currentRound = 0;
  }

  if (diceValue === 1) {
    currentRound = 0;
    switchPlayer();
  }
  else {
    currentRound += diceValue;
  }
  // Update the HTML with the new value for current round
  document.querySelector(".roundP" + currentPlayer).innerHTML = currentRound;
}


// Add Event listener to button Hold

document.querySelector("button.hold").addEventListener("click", holdScoreClick);

function holdScoreClick() {
  // add round value to global
  if (currentRound > 0) {
    if (currentPlayer === 1) {
      globalP1 =+ currentRound
    } else {
      globalP2 += currentRound
    }
  }
  
  currentRound = 0;

  // Update HTML with new values
  document.querySelector(".globalP1").innerHTML = globalP1;
  document.querySelector(".globalP2").innerHTML = globalP2;
  document.querySelector(".roundP" + currentPlayer).innerHTML = currentRound;

  switchPlayer()
}

function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

// Add Add Event listener to button New Game

document.querySelector("button.game").addEventListener("click", newGame);

// function linked to event listener to start new game
function newGame() {

}


// Winner loop 

// for (const i = 0; querySelector("globalP1"))