'use strict';

 const confirmButton = document.getElementById("confirmButton");
let playerTurn = 2;

function selectPlayer() {
    confirm.style.display = 'none';
    playerTurn = Math.trunc(Math.random() * 2) + 1;
    console.log(playerTurn);
    if (playerTurn === 1) {
        document.querySelector('.pDecide').innerHTML = 'Player A Won';
        document.body.style.background = '#f03e3e';

    } else {
        document.querySelector('.pDecide').innerHTML = 'Player B Won';
        document.body.style.background = 'white';  
    }
}

confirmButton.addEventListener('click', selectPlayer());

