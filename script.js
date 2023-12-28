// Add Event listener to button Roll Dice

document.querySelector("button").addEventListener("click", rollDiceClick);

// Random number created gives dice image value linked to event listener 
function rollDiceClick() {
  let randomNumber = Math.floor(Math.random()*6) + 1;
  let image = "images/dice-" + randomNumber + ".png";

  document.querySelector(".dice .diceImg").setAttribute("src",image);
  // Random number adds value to current round
  let currentRound = randomNumber;
  document.querySelector(".roundP2").innerHTML = currentRound;

  // Current increases with value of random number after each click
}

