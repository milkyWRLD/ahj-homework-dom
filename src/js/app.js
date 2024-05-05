// TODO: write code here
const gameBoard = document.getElementById("game-board");
const cells = Array.from({ length: 16 }, () => document.createElement("div"));
const character = document.createElement("img");

character.src = "goblin.png";
character.classList.add("character");

cells.forEach((cell, index) => {
  cell.classList.add("cell");
  cell.dataset.index = index;
  gameBoard.appendChild(cell);
});

function moveCharacter() {
  const currentCell = document.querySelector(".cell .character");
  if (currentCell) {
    currentCell.remove();
  }

  const randomCell = cells[Math.floor(Math.random() * cells.length)];
  randomCell.appendChild(character);
}

setInterval(moveCharacter, 1000);
