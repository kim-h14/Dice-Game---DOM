// Add Event listener to button Roll Dice

document.querySelector("button.roll").addEventListener("click", rollDiceClick);
function rollDiceClick() {
  
  // Random number created gives dice image value linked to event listener 
  let diceValue = Math.floor(Math.random()*6) + 1;
  let image = "images/dice-" + diceValue + ".png";

  document.querySelector(".dice .diceImg").setAttribute("src",image);

  // Get the current round value from the HTML and convert it to a number
  let currentRound = parseInt(document.querySelector(".roundP2").innerHTML);

  if (isNaN(currentRound)) {
    currentRound = 0;
  }

  if (diceValue === 1) {
    currentRound = 0;
  }
  else {
    currentRound += diceValue;
  }
  // Update the HTML with the new value for current round
  document.querySelector(".roundP2").innerHTML = currentRound;
}


// Add Event listener to button Hold

// document.querySelector("button.hold").addEventListener("click", holdScoreClick);

// function linked to event listener to hold score
function holdScoreClick() {

}

// Add Add Event listener to button New Game

// document.querySelector("button.game").addEventListener("click", newGame);

// function linked to event listener to start new game
function newGame() {

}


// Winner loop 

// for (const i = 0; querySelector("globalP1"))