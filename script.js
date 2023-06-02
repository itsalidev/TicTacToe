/**
 * 1. alert to start the game
 * 2. click to player text and
 * 3. alert to enter name
 * 4. alert to enter symbol
 * 5. put name and symbol in given button space
 * 6. click any of the squares
 */

let start = document.getElementById("start");

let playerX_Name = document.getElementById("p1-name");
let playerO_Name = document.getElementById("p2-name");

let playerX_Symbol = document.getElementById("p1-symbol");
let playerO_Symbol = document.getElementById("p2-symbol");

let sq1 = document.getElementById("square1");
let sq2 = document.getElementById("square2");
let sq3 = document.getElementById("square3");
let sq4 = document.getElementById("square4");
let sq5 = document.getElementById("square5");
let sq6 = document.getElementById("square6");
let sq7 = document.getElementById("square7");
let sq8 = document.getElementById("square8");
let sq9 = document.getElementById("square9");

/**
 * disabling all square buttons first
 */

disableAllSquares();

// playerX_Name.textContent=

/**
 * add event listeners to all 9 square buttons
 */

sq1.addEventListener("click", square1);
sq2.addEventListener("click", square2);
sq3.addEventListener("click", square3);
sq4.addEventListener("click", square4);
sq5.addEventListener("click", square5);
sq6.addEventListener("click", square6);
sq7.addEventListener("click", square7);
sq8.addEventListener("click", square8);
sq9.addEventListener("click", square9);

let flag = playerX_Symbol.textContent;

let userEntries = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function startGame() {
  alert("Play the Game!");
  playerX();
}

function playerX() {
  playerX_Name.textContent = prompt("Enter Player X's Name");
  while (!playerX_Name.textContent) {
    playerX_Name.textContent = prompt("Invalid Name: Enter Player X's Name");
  }
  enableAllSquares();
  playerO();
  alert("Player X has the first turn");
}

function playerO() {
  playerO_Name.textContent = prompt("Enter Player O's Name");
  while (!playerO_Name.textContent) {
    playerO_Name.textContent = prompt("Invalid Name: Enter Player 0's Name");
  }
  enableAllSquares();
}
/**
 * initializing turn function for change of turns from
 * Player X to Player O and Player O to Player X
 */
function turn() {
  if (flag === playerX_Symbol.textContent) {
    flag = playerO_Symbol.textContent;
  } else {
    flag = playerX_Symbol.textContent;
  }
}
/**
 * functionality of square 1
 */
function square1() {
  console.log("square 1 clicked");
  if (flag === playerX_Symbol.textContent) {
    sq1.textContent = playerX_Symbol.textContent;
    disableElement(sq1);
    userEntries[0][0] = playerX_Symbol.textContent;
    winner();
    turn();
  } else {
    sq1.textContent = playerO_Symbol.textContent;
    disableElement(sq1);
    userEntries[0][0] = playerO_Symbol.textContent;
    winner();
    turn();
  }
}
/**
 * functionality of square 2
 */
function square2() {
  console.log("square 2 clicked");
  if (flag === playerX_Symbol.textContent) {
    sq2.textContent = playerX_Symbol.textContent;
    disableElement(sq2);
    userEntries[0][1] = playerX_Symbol.textContent;
    winner();
    turn();
  } else {
    sq2.textContent = playerO_Symbol.textContent;
    disableElement(sq2);
    userEntries[0][1] = playerO_Symbol.textContent;
    winner();
    turn();
  }
}
/**
 * functionality of square 3
 */
function square3() {
  console.log("square 3 clicked");
  if (flag === playerX_Symbol.textContent) {
    sq3.textContent = playerX_Symbol.textContent;
    disableElement(sq3);
    userEntries[0][2] = playerX_Symbol.textContent;
    winner();
    turn();
  } else {
    sq3.textContent = playerO_Symbol.textContent;
    disableElement(sq3);
    userEntries[0][2] = playerO_Symbol.textContent;
    winner();
    turn();
  }
}
/**
 * functionality of square 4
 */
function square4() {
  console.log("square 4 clicked");
  if (flag === playerX_Symbol.textContent) {
    sq4.textContent = playerX_Symbol.textContent;
    disableElement(sq4);
    userEntries[1][0] = playerX_Symbol.textContent;
    winner();
    turn();
  } else {
    sq4.textContent = playerO_Symbol.textContent;
    disableElement(sq4);
    userEntries[1][0] = playerO_Symbol.textContent;
    winner();
    turn();
  }
}
/**
 * functionality of square 5
 */
function square5() {
  console.log("square 5 clicked");
  if (flag === playerX_Symbol.textContent) {
    sq5.textContent = playerX_Symbol.textContent;
    disableElement(sq5);
    userEntries[1][1] = playerX_Symbol.textContent;
    winner();
    turn();
  } else {
    sq5.textContent = playerO_Symbol.textContent;
    disableElement(sq5);
    userEntries[1][1] = playerO_Symbol.textContent;
    winner();
    turn();
  }
}
/**
 * functionality of square 6
 */
function square6() {
  console.log("square 6 clicked");
  if (flag === playerX_Symbol.textContent) {
    sq6.textContent = playerX_Symbol.textContent;
    disableElement(sq6);
    userEntries[1][2] = playerX_Symbol.textContent;
    winner();
    turn();
  } else {
    sq6.textContent = playerO_Symbol.textContent;
    disableElement(sq6);
    userEntries[1][2] = playerO_Symbol.textContent;
    winner();
    turn();
  }
}
/**
 * functionality of square 7
 */
function square7() {
  console.log("square 7 clicked");
  if (flag === playerX_Symbol.textContent) {
    sq7.textContent = playerX_Symbol.textContent;
    disableElement(sq7);
    userEntries[2][0] = playerX_Symbol.textContent;
    winner();
    turn();
  } else {
    sq7.textContent = playerO_Symbol.textContent;
    disableElement(sq7);
    userEntries[2][0] = playerO_Symbol.textContent;
    winner();
    turn();
  }
}
/**
 * functionality of square 8
 */
function square8() {
  console.log("square 8 clicked");
  if (flag === playerX_Symbol.textContent) {
    sq8.textContent = playerX_Symbol.textContent;
    disableElement(sq8);
    userEntries[2][1] = playerX_Symbol.textContent;
    winner();
    turn();
  } else {
    sq8.textContent = playerO_Symbol.textContent;
    disableElement(sq8);
    userEntries[2][1] = playerO_Symbol.textContent;
    winner();
    turn();
  }
}
/**
 * functionality of square 9
 */
function square9() {
  console.log("square 9 clicked");
  if (flag === playerX_Symbol.textContent) {
    sq9.textContent = playerX_Symbol.textContent;
    disableElement(sq9);
    userEntries[2][2] = playerX_Symbol.textContent;
    winner();
    turn();
  } else {
    sq9.textContent = playerO_Symbol.textContent;
    disableElement(sq9);
    userEntries[2][2] = playerO_Symbol.textContent;
    winner();
    turn();
  }
}

/**
 * winner function when a player wins
 */

function winner() {
  if (flag === playerX_Symbol.textContent) {
    if (
      userEntries[0][1] === flag &&
      userEntries[0][0] === flag &&
      userEntries[0][2] === flag
    ) {
      console.log("Ali wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[1][0] === flag &&
      userEntries[1][1] === flag &&
      userEntries[1][2] === flag
    ) {
      console.log("Ali wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[2][0] === flag &&
      userEntries[2][1] === flag &&
      userEntries[2][2] === flag
    ) {
      console.log("Ali wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][0] === flag &&
      userEntries[1][0] === flag &&
      userEntries[2][0] === flag
    ) {
      console.log("Ali wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][1] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][1] === flag
    ) {
      console.log("Ali wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][1] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][1] === flag
    ) {
      console.log("Ali wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][2] === flag &&
      userEntries[1][2] === flag &&
      userEntries[2][2] === flag
    ) {
      console.log("Ali wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][0] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][2] === flag
    ) {
      console.log("Ali wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][2] === flag &&
      userEntries[2][1] === flag &&
      userEntries[2][0] === flag
    ) {
      console.log("Ali wins");
      disableAllSquares();
      return true;
    }
  } else if (flag === playerO_Symbol.textContent) {
    if (
      userEntries[0][1] === flag &&
      userEntries[0][0] === flag &&
      userEntries[0][2] === flag
    ) {
      console.log("Nomi wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[1][0] === flag &&
      userEntries[1][1] === flag &&
      userEntries[1][2] === flag
    ) {
      console.log("Nomi wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[2][0] === flag &&
      userEntries[2][1] === flag &&
      userEntries[2][2] === flag
    ) {
      console.log("Nomi wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][0] === flag &&
      userEntries[1][0] === flag &&
      userEntries[2][0] === flag
    ) {
      console.log("Nomi wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][1] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][1] === flag
    ) {
      console.log("Nomi wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][1] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][1] === flag
    ) {
      console.log("Nomi wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][2] === flag &&
      userEntries[1][2] === flag &&
      userEntries[2][2] === flag
    ) {
      console.log("Nomi wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[0][0] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][2] === flag
    ) {
      console.log("Nomi wins");
      disableAllSquares();
      return true;
    } else if (
      userEntries[2][1] === flag &&
      userEntries[0][2] === flag &&
      userEntries[2][0] === flag
    ) {
      console.log("Nomi wins");
      disableAllSquares();
      return true;
    }
  } else {
  }
}

function disableElement(el) {
  el.disabled = true;
}

function enableElement(el) {
  el.disabled = false;
}

function enableAllSquares() {
  enableElement(sq1);
  enableElement(sq2);
  enableElement(sq3);
  enableElement(sq4);
  enableElement(sq5);
  enableElement(sq6);
  enableElement(sq7);
  enableElement(sq8);
  enableElement(sq9);
}

function disableAllSquares() {
  disableElement(sq1);
  disableElement(sq2);
  disableElement(sq3);
  disableElement(sq4);
  disableElement(sq5);
  disableElement(sq6);
  disableElement(sq7);
  disableElement(sq8);
  disableElement(sq9);
}
