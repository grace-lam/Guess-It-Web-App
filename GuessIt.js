/* Game logic for GuessIt!
 */

 // Select a secret numbers
 var secretNumber = Math.floor(Math.random() * 1000000); 
 var numberOfGuesses = 0;
 
 initializeNewGame();

function onClickLess() {
  var textArea = document.getElementById('guessTextArea');
  var guessesDiv = document.getElementById('guessesDiv');
  var guess = parseInt(textArea.value);
  textArea.value = "";
  
  numberOfGuesses++;
  var output = "Guess #" + numberOfGuesses + ": Secret < " + guess + "? ";
  if (secretNumber < guess) {
	guessesDiv.innerHTML += output + " YES!!<br/>";
  } else {
    guessesDiv.innerHTML += output + " NO!!<br/>";
  }
}

function onClickGreater() {
  var textArea = document.getElementById('guessTextArea');
  var guessesDiv = document.getElementById('guessesDiv');
  var guess = parseInt(textArea.value);
  textArea.value = "";
  
  numberOfGuesses++;
  var output = "Guess #" + numberOfGuesses + ": Secret > " + guess + "? ";
  if (secretNumber > guess) {
	guessesDiv.innerHTML += output + " YES!!<br/>";
  } else {
    guessesDiv.innerHTML += output + " NO!!<br/>";
  }
}

function onClickEquals() {
  var textArea = document.getElementById('guessTextArea');
  var guessesDiv = document.getElementById('guessesDiv');
  var guess = parseInt(textArea.value);
  textArea.value = "";
  
  numberOfGuesses++;
  var output = "Guess #" + numberOfGuesses + ": Secret = " + guess + "? ";
  if (secretNumber == guess) {
	guessesDiv.innerHTML += output + " YES!!<br/>";
	endGame();
  } else {
    guessesDiv.innerHTML += output + " NO!!<br/>";
  }
}

function endGame() {
  alert('Congratulations! You took ' + numberOfGuesses + ' guesses.');
  initializeNewGame();  
}

function initializeNewGame() {
  numberOfGuesses = 0;
  var guessesDiv = document.getElementById('guessesDiv');
  guessesDiv.innerHTML = "";
}