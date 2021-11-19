'use strict';

const confirmButton = document.getElementById('confirmButton');
const playerInput = document.getElementsByClassName('name');
const start = document.getElementById('start');

let playerTurn = Math.trunc(Math.random() * 2) + 1;

// console.log(playerTurn);



function selectPlayer(playerTurn) {
    console.log(playerTurn);
    if (playerTurn == 1)
        document.querySelector('.pDecide').innerHTML = 'Player A Won';
    else
        document.querySelector('.pDecide').innerHTML = 'Player B Won';
    startMenu();
}


function startMenu() {
    confirmButton.style.display = 'none';
    for (let i = 0; i < playerInput.length; i++)
        playerInput[i].style.display = 'none';
    start.style.display = 'block';
}

// confirmButton.addEventListener('click', selectPlayer(playerTurn));