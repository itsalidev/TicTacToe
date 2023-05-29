/**
 * 1. alert to start the game
 * 2. click to player text and
 * 3. alert to enter name
 * 4. alert to enter symbol
 * 5. put name and symbol in given button space
 * 6. click any of the squares
 */

let start = document.getElementById("start");

let player1Name = document.getElementById("p1-name");
let player2Name = document.getElementById("p2-name");

let player1Symbol = document.getElementById("p1-symbol");
let player2Symbol = document.getElementById("p2-symbol");

let square1Details = document.getElementById("square1");
let square2Details = document.getElementById("square2");
let square3Details = document.getElementById("square3");
let square4Details = document.getElementById("square4");
let square5Details = document.getElementById("square5");
let square6Details = document.getElementById("square6");
let square7Details = document.getElementById("square7");
let square8Details = document.getElementById("square8");
let square9Details = document.getElementById("square9");

function startGame() {
  alert("Play the Game");
}

function player1() {
  alert("Please Enter Player 1's Details");
  player1Symbol.textContent = prompt("Enter Player 1 Symbol");
  player1Name.textContent = prompt("Enter Player 1 Name");
}

function player2() {
  alert("Please Enter Player 2's Details");
  player2Symbol.textContent = prompt("Enter Player 2 Symbol");
  player2Name.textContent = prompt("Enter Player 2 Name");
}

function square1() {
  console.log("square 1 clicked");
}
function square2() {
  console.log("square 2 clicked");
}
function square3() {
  console.log("square 3 clicked");
}
function square4() {
  console.log("square 4 clicked");
}
function square5() {
  console.log("square 5 clicked");
}
function square6() {
  console.log("square 6 clicked");
}
function square7() {
  console.log("square 7 clicked");
}
function square8() {
  console.log("square 8 clicked");
}
function square9() {
  console.log("square 9 clicked");
}
