/**
 * 1. Press "Start the Game click handler" and the it shows alert to start the game
 * 2. invoked player X form startGame function and then after player X runs and on
 *    the end of that function, invoked next player which is player O
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

// added event listener to Start the Game button
start.addEventListener("click", startGame);

// added event listeners to all 9 square buttons
sq1.addEventListener("click", square1);
sq2.addEventListener("click", square2);
sq3.addEventListener("click", square3);
sq4.addEventListener("click", square4);
sq5.addEventListener("click", square5);
sq6.addEventListener("click", square6);
sq7.addEventListener("click", square7);
sq8.addEventListener("click", square8);
sq9.addEventListener("click", square9);

let flag = null;

let userEntries = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// function to start the game
function startGame() {
  alert("Play the Game!");
  disableElement(start);
  playerX();
}

function playerX() {
  playerX_Name.textContent = prompt("Enter Player X's Name");
  while (!playerX_Name.textContent) {
    playerX_Name.textContent = prompt(
      "Invalid Name: Please Enter Player X's Name"
    );
  }
  enableAllSquares();
  playerO();
  turn();
}

function playerO() {
  playerO_Name.textContent = prompt("Enter Player O's Name");
  while (!playerO_Name.textContent) {
    playerO_Name.textContent = prompt(
      "Invalid Name: Please Enter Player O's Name"
    );
  }
  enableAllSquares();
}
/**
 * initializing turn function for change of turns from
 * Player X to Player O and Player O to Player X
 */
function turn() {
  if (flag === null) {
    // Randomly choose the first player
    flag =
      Math.random() < 0.5
        ? playerX_Symbol.textContent
        : playerO_Symbol.textContent;
    alert(`Player ${flag} has the first turn`);
  } else {
    // Toggle between players for subsequent turns
    flag =
      flag === playerX_Symbol.textContent
        ? playerO_Symbol.textContent
        : playerX_Symbol.textContent;
  }
}
/**
 * functionality of square 1
 */
function square1() {
  if (flag === playerX_Symbol.textContent) {
    sq1.textContent = playerX_Symbol.textContent;
    disableElement(sq1);
    userEntries[0][0] = playerX_Symbol.textContent;
    winner();
    isDraw();
    turn();
  } else {
    sq1.textContent = playerO_Symbol.textContent;
    disableElement(sq1);
    userEntries[0][0] = playerO_Symbol.textContent;
    winner();
    isDraw();
    turn();
  }
}
/**
 * functionality of square 2
 */
function square2() {
  if (flag === playerX_Symbol.textContent) {
    sq2.textContent = playerX_Symbol.textContent;
    disableElement(sq2);
    userEntries[0][1] = playerX_Symbol.textContent;
    winner();
    isDraw();
    turn();
  } else {
    sq2.textContent = playerO_Symbol.textContent;
    disableElement(sq2);
    userEntries[0][1] = playerO_Symbol.textContent;
    winner();
    isDraw();
    turn();
  }
}
/**
 * functionality of square 3
 */
function square3() {
  if (flag === playerX_Symbol.textContent) {
    sq3.textContent = playerX_Symbol.textContent;
    disableElement(sq3);
    userEntries[0][2] = playerX_Symbol.textContent;
    winner();
    isDraw();
    turn();
  } else {
    sq3.textContent = playerO_Symbol.textContent;
    disableElement(sq3);
    userEntries[0][2] = playerO_Symbol.textContent;
    winner();
    isDraw();
    turn();
  }
}
/**
 * functionality of square 4
 */
function square4() {
  if (flag === playerX_Symbol.textContent) {
    sq4.textContent = playerX_Symbol.textContent;
    disableElement(sq4);
    userEntries[1][0] = playerX_Symbol.textContent;
    winner();
    isDraw();
    turn();
  } else {
    sq4.textContent = playerO_Symbol.textContent;
    disableElement(sq4);
    userEntries[1][0] = playerO_Symbol.textContent;
    winner();
    isDraw();
    turn();
  }
}
/**
 * functionality of square 5
 */
function square5() {
  if (flag === playerX_Symbol.textContent) {
    sq5.textContent = playerX_Symbol.textContent;
    disableElement(sq5);
    userEntries[1][1] = playerX_Symbol.textContent;
    winner();
    isDraw();
    turn();
  } else {
    sq5.textContent = playerO_Symbol.textContent;
    disableElement(sq5);
    userEntries[1][1] = playerO_Symbol.textContent;
    winner();
    isDraw();
    turn();
  }
}
/**
 * functionality of square 6
 */
function square6() {
  if (flag === playerX_Symbol.textContent) {
    sq6.textContent = playerX_Symbol.textContent;
    disableElement(sq6);
    userEntries[1][2] = playerX_Symbol.textContent;
    winner();
    isDraw();
    turn();
  } else {
    sq6.textContent = playerO_Symbol.textContent;
    disableElement(sq6);
    userEntries[1][2] = playerO_Symbol.textContent;
    winner();
    isDraw();
    turn();
  }
}
/**
 * functionality of square 7
 */
function square7() {
  if (flag === playerX_Symbol.textContent) {
    sq7.textContent = playerX_Symbol.textContent;
    disableElement(sq7);
    userEntries[2][0] = playerX_Symbol.textContent;
    winner();
    isDraw();
    turn();
  } else {
    sq7.textContent = playerO_Symbol.textContent;
    disableElement(sq7);
    userEntries[2][0] = playerO_Symbol.textContent;
    winner();
    isDraw();
    turn();
  }
}
/**
 * functionality of square 8
 */
function square8() {
  if (flag === playerX_Symbol.textContent) {
    sq8.textContent = playerX_Symbol.textContent;
    disableElement(sq8);
    userEntries[2][1] = playerX_Symbol.textContent;
    winner();
    isDraw();
    turn();
  } else {
    sq8.textContent = playerO_Symbol.textContent;
    disableElement(sq8);
    userEntries[2][1] = playerO_Symbol.textContent;
    winner();
    isDraw();
    turn();
  }
}
/**
 * functionality of square 9
 */
function square9() {
  if (flag === playerX_Symbol.textContent) {
    sq9.textContent = playerX_Symbol.textContent;
    disableElement(sq9);
    userEntries[2][2] = playerX_Symbol.textContent;
    winner();
    isDraw();
    turn();
  } else {
    sq9.textContent = playerO_Symbol.textContent;
    disableElement(sq9);
    userEntries[2][2] = playerO_Symbol.textContent;
    winner();
    isDraw();
    turn();
  }
}

/**
 * winner function when a player wins
 */

let playerHasWon = false;

function winner() {
  let isWinnerFound = false;
  if (flag === playerX_Symbol.textContent) {
    if (
      userEntries[0][0] === flag &&
      userEntries[0][1] === flag &&
      userEntries[0][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[1][0] === flag &&
      userEntries[1][1] === flag &&
      userEntries[1][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[2][0] === flag &&
      userEntries[2][1] === flag &&
      userEntries[2][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][0] === flag &&
      userEntries[1][0] === flag &&
      userEntries[2][0] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][1] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][1] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][2] === flag &&
      userEntries[1][2] === flag &&
      userEntries[2][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][0] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][2] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][0] === flag
    ) {
      isWinnerFound = true;
    }
  } else if (flag === playerO_Symbol.textContent) {
    if (
      userEntries[0][0] === flag &&
      userEntries[0][1] === flag &&
      userEntries[0][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[1][0] === flag &&
      userEntries[1][1] === flag &&
      userEntries[1][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[2][0] === flag &&
      userEntries[2][1] === flag &&
      userEntries[2][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][0] === flag &&
      userEntries[1][0] === flag &&
      userEntries[2][0] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][1] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][1] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][2] === flag &&
      userEntries[1][2] === flag &&
      userEntries[2][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][0] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][2] === flag
    ) {
      isWinnerFound = true;
    } else if (
      userEntries[0][2] === flag &&
      userEntries[1][1] === flag &&
      userEntries[2][0] === flag
    ) {
      isWinnerFound = true;
    }
  }
  if (isWinnerFound) {
    if (flag === playerX_Symbol.textContent) {
      setTimeout(() => {
        alert(
          `Player ${playerX_Symbol.textContent}: ${playerX_Name.textContent} won`
        );
      });
    } else if (flag === playerO_Symbol.textContent) {
      setTimeout(() => {
        alert(
          `Player ${playerO_Symbol.textContent}: ${playerO_Name.textContent} won`
        );
      });
    }
    playerHasWon = true;
    disableAllSquares();
    return true;
  }
  return false;
}

function isDraw() {
  for (let i = 0; i < userEntries.length; i++) {
    for (let j = 0; j < userEntries[i].length; j++) {
      if (userEntries[i][j] === "") {
        return false;
      }
    }
  }
  if (!playerHasWon && !winner()) {
    setTimeout(() => {
      alert("Game drawn!");
    });
    disableAllSquares();
    return true;
  }
  return false;
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
