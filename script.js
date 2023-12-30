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

  turnIndicator()
  checkWinner()
}


// Add Event listener to button Hold

document.querySelector("button.hold").addEventListener("click", holdScoreClick);

function holdScoreClick() {
  // add round value to global
  if (currentRound > 0) {
    if (currentPlayer === 1) {
      globalP1 += currentRound
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
  turnIndicator()
  checkWinner()
}

function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
}

// Add Add Event listener to button New Game

document.querySelector("button.game").addEventListener("click", newGame);

// function linked to event listener to start new game
function newGame() {
  // Reset all scores
  currentRound = 0;
  globalP1 = 0;
  globalP2 = 0;
  currentPlayer = 1;

  // Update HTML
  document.querySelector(".globalP1").innerHTML = globalP1;
  document.querySelector(".globalP2").innerHTML = globalP2;
  document.querySelector(".roundP1").innerHTML = currentRound;
  document.querySelector(".roundP2").innerHTML = currentRound;

  turnIndicator()
}


// Function to check winner

function checkWinner() {
  if (globalP1 >= 100) {
    alert("🎉 Player 1 Wins 🎉")
    newGame();
  } else if (globalP2 >= 100) {
    alert("🎉 Player 2 Wins 🎉")
    newGame();
  }
} 

// Dice emoji appears when it's player's turn to play

function turnIndicator() {
  // Reset indicators 
  document.querySelector(".player1Indicator").style.display = "none";
  document.querySelector(".player2Indicator").style.display = "none";

  // Show the emoji for the current player
  if (currentPlayer === 1) {
    document.querySelector(".player1Indicator").style.display = "inline-flex";
  } else {
    document.querySelector(".player2Indicator").style.display = "inline-block";
  }
}
