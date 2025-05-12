const rollBtn = document.getElementById("rollBtn");
const dice = document.getElementById("dice");
const result = document.getElementById("result");
const startGameBtn = document.getElementById("startGameBtn");
const player1NameInput = document.getElementById("player1Name");
const player2NameInput = document.getElementById("player2Name");
const player1Display = document.getElementById("player1");
const player2Display = document.getElementById("player2");
const gameSection = document.querySelector(".game");
const nameInputs = document.querySelector(".name-inputs");

let player1Name = "";
let player2Name = "";
let currentPlayer = 1; 

startGameBtn.addEventListener("click", () => {
  player1Name = player1NameInput.value.trim() || "Player 1";
  player2Name = player2NameInput.value.trim() || "Player 2";

  if (player1Name && player2Name) {
    player1Display.textContent = player1Name;
    player2Display.textContent = player2Name;
    nameInputs.style.display = "none";
    gameSection.style.display = "block";
  } else {
    result.textContent = "Iltimos, har ikkala ismni kiriting.";
  }
});

rollBtn.addEventListener("click", () => {
  result.textContent = `Player ${currentPlayer === 1 ? 1 : 2} is rolling...`;

  const roll = Math.floor(Math.random() * 6) + 1;

  dice.style.animation = "rollDice 1s ease";
  setTimeout(() => {
    dice.style.animation = "none";
    updateDice(roll);
    if (currentPlayer === 1) {
      player1Display.textContent = `${player1Name} - ${roll}`;
      currentPlayer = 2;
      rollBtn.textContent = `🎮 Player 2: Play`;
    } else {
      player2Display.textContent = `${player2Name} - ${roll}`;
      currentPlayer = 1;
      rollBtn.textContent = `🎮 Player 1: Play`;
      checkWinner();
    }
  }, 1000);
});

function updateDice(roll) {
  const number = document.getElementById("number");
  number.textContent = roll;
}

function checkWinner() {
  const player1Score = parseInt(player1Display.textContent.split(" - ")[1]);
  const player2Score = parseInt(player2Display.textContent.split(" - ")[1]);
  
  if (player1Score > player2Score) {
    result.textContent = `${player1Name} yutdi!`;
  } else if (player2Score > player1Score) {
    result.textContent = `${player2Name} yutdi!`;
  } else {
    result.textContent = "Durrang!";
  }
}