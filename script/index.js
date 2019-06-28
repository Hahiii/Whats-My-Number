window.addEventListener("DOMContentLoaded", (event) => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const guesses = document.querySelector(".guesses");
  const lastResult = document.querySelector(".lastResult");
  const backGroundColor = document.querySelector("body");
  const lowOrHi = document.getElementsByClassName("lowOrHi")[0];
  const guessField = document.getElementsByClassName("guessField")[0];
  const guessSubmit = document.getElementsByClassName("guessSubmit")[0];
  guessSubmit.addEventListener("click", checkGuess, false);
  const resetP = document.querySelectorAll(".empty");
  window.addEventListener("keydown", (event) => {
    let keyName = event.key;
    if(keyName === "Enter") {
       checkGuess();
    }
  });
  let guessCount = 1;
  let resetButton;
  console.log(randomNumber)
  let wrong = [" ", "Noo Sadly!", "Again Nop!", "Still Nothing!", "Are You Trying at All!!",
  "Come on thas all you got!", "You will guess it this time.!", "Ooo Nooo you didnt guess it.!", "tztztzt!!", "Last Try" ];
  function checkGuess() {
    let userGuess = Number(guessField.value);
    if(guessCount === 1) {
      guesses.textContent = "Previous guesses: ";
    };
    guesses.textContent += userGuess + " ";
    if(userGuess === randomNumber) {
      for (let i = 0 ; i < resetP.length ; i++) {
        resetP[i].textContent = " ";
      }
      lastResult.classList.add("main-result__end")
      guesses.textContent = randomNumber + " is Correct";
      lastResult.textContent = "Bravoooooo!!!!".toUpperCase();
      lowOrHi.textContent = "You got it right In only " + (guessCount) + " turns.!";
      backGroundColor.style.backgroundColor = "green";
      setGameOver();
    }else if(guessCount === 10) {
      for (let i = 0 ; i < resetP.length ; i++) {
        resetP[i].textContent = " ";
      }
      guesses.textContent = "The Number was: " + randomNumber;
      lastResult.classList.add("main-result__end");
      lastResult.textContent = "!!!GAME OVER!!!";
      backGroundColor.style.backgroundColor = "red";
      setGameOver();
    }else{
      lastResult.textContent = wrong[guessCount].toUpperCase();
      if(userGuess < randomNumber) {
        lowOrHi.textContent = "Your guess was too low!";
      }else if(userGuess > randomNumber) {
        lowOrHi.textContent = "Your guess was too high!";
      }
    };
    guessCount++;
    guessField.value = " ";
    guessField.focus();
  };
  
  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "*** Play Again ***";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
  };
  
  function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = " ";
    }
    lastResult.classList.remove("main-result__end")
    guesses.classList.remove("main-result__end")
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = " ";
    guessField.focus();
    backGroundColor.style.backgroundColor = "lightgray";
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
});
