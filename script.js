// 'use strict';

const btnConfirm = document.querySelector('.btn');
var playerBoxColor = document.querySelector('.box');
var playerInpColor = document.querySelector('.inputBox');

player = false;
playerWonA = false;
playerWonB = false;
playerA = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

playerB = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function showbox() {
    document.getElementById("modal_box").style.display = "block";
    document.getElementById("content").style.display = "none";
    document.querySelector('.show-modal').style.display = 'none';
}

function closebox() {
    document.getElementById("modal_box").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.querySelector('.show-modal').style.display = 'block';
}

// game logic
function winning() {

    // playerA
    if (playerA[0][0] != 0 && playerA[0][1] != 0 && playerA[0][2] != 0) {
        playerWonA = true;
    } else if (playerA[1][0] != 0 && playerA[1][1] != 0 && playerA[1][2] != 0) {
        playerWonA = true;
    } else if (playerA[2][0] != 0 && playerA[2][1] != 0 && playerA[2][2] != 0) {
        playerWonA = true;
    } else if (playerA[0][0] != 0 && playerA[1][0] != 0 && playerA[2][0] != 0) {
        playerWonA = true;
    } else if (playerA[0][1] != 0 && playerA[1][1] != 0 && playerA[2][1] != 0) {
        playerWonA = true;
    } else if (playerA[0][2] != 0 && playerA[1][2] != 0 && playerA[2][2] != 0) {
        playerWonA = true;
    } else if (playerA[0][0] != 0 && playerA[1][1] != 0 && playerA[2][2] != 0) {
        playerWonA = true;
    } else if (playerA[0][2] != 0 && playerA[1][1] != 0 && playerA[2][0] != 0) {
        playerWonA = true;
    }


    // player B
    if (playerB[0][0] != 0 && playerB[0][1] != 0 && playerB[0][2] != 0) {
        playerWonB = true;
    } else if (playerB[1][0] != 0 && playerB[1][1] != 0 && playerB[1][2] != 0) {
        playerWonB = true;
    } else if (playerB[2][0] != 0 && playerB[2][1] != 0 && playerB[2][2] != 0) {
        playerWonB = true;
    } else if (playerB[0][0] != 0 && playerB[1][0] != 0 && playerB[2][0] != 0) {
        playerWonB = true;
    } else if (playerB[0][1] != 0 && playerB[1][1] != 0 && playerB[2][1] != 0) {
        playerWonB = true;
    } else if (playerB[0][2] != 0 && playerB[1][2] != 0 && playerB[2][2] != 0) {
        playerWonB = true;
    } else if (playerB[0][0] != 0 && playerB[1][1] != 0 && playerB[2][2] != 0) {
        playerWonB = true;
    } else if (playerB[0][2] != 0 && playerB[1][1] != 0 && playerB[2][0] != 0) {
        playerWonB = true;
    }

    if (playerWonA) {
        document.getElementById('win-modal').innerHTML = 'Player A Won';
        document.getElementById("content").style.display = "none";
        document.body.style.background = '#f03e3e';
        document.querySelector('.show-modal').style.display = 'none';
    }

    if (playerWonB) {
        document.getElementById('win-modal').innerHTML = 'Player B Won';
        document.getElementById("content").style.display = "none";
        document.body.style.background = '#f03e3e';
        document.querySelector('.show-modal').style.display = 'none';
    }
}


function changePlayer(id1, id2, val) {
    if (val.value < 1 || val.value > 6) {
        val.value = null;
        playerA[id1][id2] = 0;
        playerB[id1][id2] = 0;
        return;
    }
    if (player == false) {
        // background color
        document.body.style.background = '#fab005';

        // input color 
        document.querySelector('.inputBox').style.background = '#ffe066';
        document.querySelector('.box').style.background = '#ffe066';

        // button color
        document.querySelector('.show-modal').style.color = '#fab005';
        document.querySelector('.btn').style.color = '#fab005';
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (playerA[i][j] == val.value) {
                    val.value = null;
                    playerA[id1][id2] = 0;
                    playerB[id1][id2] = 0;
                    return;
                }
            }
        }
        val.style.color = '#0b7285';
        playerA[id1][id2] = val.value;
        playerB[id1][id2] = 0;
    } else {
        // background color
        document.body.style.background = '#3bc9db';
        // input color 
        document.querySelector('.inputBox').style.background = '#66d9e8';
        document.querySelector('.box').style.background = '#66d9e8';

        // button color
        document.querySelector('.show-modal').style.color = '#3bc9db';
        document.querySelector('.btn').style.color = '#3bc9db';


        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (playerB[i][j] == val.value) {
                    val.value = null;
                    playerA[id1][id2] = 0;
                    playerB[id1][id2] = 0;
                    return;
                }
            }
        }
        val.style.color = '#e67700';
        playerB[id1][id2] = val.value;
        playerA[id1][id2] = 0;
    }
    player = !player;
    console.log(playerA, playerB, player);
    winning();
}




// draw
// lower cant change the upper lmt
// when toches the input it will disappear if valid input then ok otherwise old input comes up
// what number we use it will show by any means
// confirm button to confirm the input and however u change something