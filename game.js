// generate a random number between 1 and 100
var number = Math.floor(Math.random() * 100) + 1;

// set number of tries
var tries = 10;

// define function to compare user's guess with the random number
function compare(guess) {
  if (guess < number) {
    alert("Your guess is too low. Tries left: " + tries);
  } else if (guess > number) {
    alert("Your guess is too high. Tries left: " + tries);
  } else {
    alert("Congratulations, you guessed the correct number!");
    clearInterval(interval);
  }
  tries--;
  if (tries == 0) {
    alert("Sorry, you ran out of tries. The number was " + number);
    clearInterval(interval);
  }
}

// define function to ask user for input and call compare function
function guessNumber() {
  var guess = prompt("Guess a number between 1 and 100:");
  compare(guess);
}

// ask user to start the game and call guessNumber function every 10 seconds
var interval = setInterval(function() {
  if (confirm("Welcome to my number guessing game! Do you want to play?")) {
    guessNumber();
  } else {
    clearInterval(interval);
  }
}, 10000);
