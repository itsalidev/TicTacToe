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
  sq1.textContent = flag;
  userEntries[0][0] = flag;
  disableElement(sq1);
  checkWinner();
  turn();
}
/**
 * functionality of square 2
 */
function square2() {
  sq2.textContent = flag;
  userEntries[0][1] = flag;
  disableElement(sq2);
  checkWinner();
  turn();
}
/**
 * functionality of square 3
 */
function square3() {
  sq3.textContent = flag;
  userEntries[0][2] = flag;
  disableElement(sq3);
  checkWinner();
  turn();
}
/**
 * functionality of square 4
 */
function square4() {
  sq4.textContent = flag;
  userEntries[1][0] = flag;
  disableElement(sq4);
  checkWinner();
  turn();
}
/**
 * functionality of square 5
 */
function square5() {
  sq5.textContent = flag;
  userEntries[1][1] = flag;
  disableElement(sq5);
  checkWinner();
  turn();
}
/**
 * functionality of square 6
 */
function square6() {
  sq6.textContent = flag;
  userEntries[1][2] = flag;
  disableElement(sq6);
  checkWinner();
  turn();
}
/**
 * functionality of square 7
 */
function square7() {
  sq7.textContent = flag;
  userEntries[2][0] = flag;
  disableElement(sq7);
  checkWinner();
  turn();
}
/**
 * functionality of square 8
 */
function square8() {
  sq8.textContent = flag;
  userEntries[2][1] = flag;
  disableElement(sq8);
  checkWinner();
  turn();
}
/**
 * functionality of square 9
 */
function square9() {
  sq9.textContent = flag;
  userEntries[2][2] = flag;
  disableElement(sq9);
  checkWinner();
  turn();
}

function threeStringsAreEqual(a, b, c) {
  if (!a || !b || !c) {
    return false;
  }
  return a === b && b === c;
}

/**
 * winner function when a player wins
 */

let isWinnerFound = false;

function checkWinner() {
  if (
    threeStringsAreEqual(
      userEntries[0][0],
      userEntries[0][1],
      userEntries[0][2]
    )
  ) {
    isWinnerFound = true;
  } else if (
    threeStringsAreEqual(
      userEntries[1][0],
      userEntries[1][1],
      userEntries[1][2]
    )
  ) {
    isWinnerFound = true;
  } else if (
    threeStringsAreEqual(
      userEntries[2][0],
      userEntries[2][1],
      userEntries[2][2]
    )
  ) {
    isWinnerFound = true;
  } else if (
    threeStringsAreEqual(
      userEntries[0][0],
      userEntries[1][0],
      userEntries[2][0]
    )
  ) {
    isWinnerFound = true;
  } else if (
    threeStringsAreEqual(
      userEntries[0][1],
      userEntries[1][1],
      userEntries[2][1]
    )
  ) {
    isWinnerFound = true;
  } else if (
    threeStringsAreEqual(
      userEntries[0][2],
      userEntries[1][2],
      userEntries[2][2]
    )
  ) {
    isWinnerFound = true;
  } else if (
    threeStringsAreEqual(
      userEntries[0][0],
      userEntries[1][1],
      userEntries[2][2]
    )
  ) {
    isWinnerFound = true;
  } else if (
    threeStringsAreEqual(
      userEntries[0][2],
      userEntries[1][1],
      userEntries[2][0]
    )
  ) {
    isWinnerFound = true;
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
    disableAllSquares();
    return true;
  } else {
    if (isAllSquaresFilled()) {
      setTimeout(() => {
        alert("Game drawn!");
      });
      disableAllSquares();
      return true;
    }
  }

  return false;
}

function isAllSquaresFilled() {
  for (let i = 0; i < userEntries.length; i++) {
    for (let j = 0; j < userEntries[i].length; j++) {
      if (userEntries[i][j] === "") {
        return false;
      }
    }
  }

  return true;
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
