/* Variables */
var numberGuesses = 0;
// var randomNumber = Math.floor((Math.random() * + 100) + 1);
var randomNumber = 50;

$("form").on("submit", function(event) {
  event.preventDefault();
  var $userGuess = +$(".user-guess").val();

  var difference = Math.abs($userGuess - randomNumber);

  var isNotANumber = isNaN($userGuess)

  if (isNotANumber) {
    $(".feedback").text("Type in a real number.")
  } else {

    runCheck()
  }

  function runCheck() {
    numberGuesses += 1
    $(".numberofguesses").text(numberGuesses)

    if ($userGuess == randomNumber) {
      $(".feedback").text("you got it! play again?")
      $("form").trigger("reset");
      randomNumber = Math.floor((Math.random() * 100) + 1);
      numberGuesses = 0
    } else if (difference <= 6) {
      $(".feedback").text("hot")
    } else if (difference <= 10) {
      $(".feedback").text("warm")
    } else if (difference <= 15) {
      $(".feedback").text("lukewarm")
    } else {
      $(".feedback").text("cold")
    }
  }

});