'use strict';

const confirmButton = document.getElementById('confirmButton');
const playerInput = document.getElementsByClassName('name');
const start = document.getElementById('start');
const playerAName = document.getElementById('playerAName');
const playerBName = document.getElementById('playerAName');

let playerTurn = Math.trunc(Math.random() * 2) + 1;
var pA, pB;
// console.log(playerTurn);

function getvalueA(pAName) {
    pA = pAName.value;
    console.log(pA);
}

function getvalueB(pBName) {
    pB = pBName.value;
    console.log(pB);
}
if (pA && pB) {
    localStorage.setItem('playerA', pA);
    localStorage.setItem('playerB', pB);
}

function selectPlayer(playerTurn) {
    console.log(playerTurn);
    if (playerTurn == 1)
        document.querySelector('.pDecide').innerHTML = pA + ' Start';
    else
        document.querySelector('.pDecide').innerHTML = pB + ' Start';
    startMenu();
}


function startMenu() {
    confirmButton.style.display = 'none';
    document.querySelector('.pDecide').style.display = "block";
    for (let i = 0; i < playerInput.length; i++)
        playerInput[i].style.display = 'none';
    start.style.display = 'block';
}