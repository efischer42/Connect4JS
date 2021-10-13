const body = document.querySelector("body");
const board = document.querySelector(".board");
const boardCells = document.querySelectorAll(".boardcell");
let token = undefined;
let player = 1;
let tokenKey = 0;
let tokenOffsetLeft = 20;

function newTurn() {
  board.innerHTML += `<div class="player ${
    player ? "player1" : "player2"
  }" id=token${tokenKey}></div>`;
  token = document.getElementById("token" + tokenKey);
}

function moveTokenToLeft() {
  tokenOffsetLeft -= 120;
  token.style.setProperty("--tokenOffsetLeft", `${tokenOffsetLeft}px`);
}

function moveTokenToRight() {
  tokenOffsetLeft += 120;
  token.style.setProperty("--tokenOffsetLeft", `${tokenOffsetLeft}px`);
}

function playToken() {
  token.style.setProperty("--tokenOffsetTop", `${6 * 120 - 100}px`);
  setTimeout(() => {
    player = !player;
    tokenKey++;
    tokenOffsetLeft = 20;
    newTurn();
  }, 300);
}

body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") moveTokenToLeft();
  else if (e.key === "ArrowRight") moveTokenToRight();
  else if (e.key === "Enter") playToken();
});

newTurn();
