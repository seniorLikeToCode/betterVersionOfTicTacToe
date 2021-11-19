// 'use strict';


// firebase
const btnConfirm = document.querySelector('.btn');
var playerBoxColor = document.getElementsByClassName('box');
var playerInpColor = document.getElementsByClassName('inputBox');
var modalButton = document.getElementsByClassName('show-modal');
var confirmButton = document.querySelector('.btn');
var button = document.getElementsByTagName('button');

var oldValue = null;
var player = false;
var playerWonA = false;
var playerWonB = false;
var playerA = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var playerB = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

var boolPlayerA = [
    false,
    false,
    false,
    false,
    false,
    false
];

var boolPlayerB = [
    false,
    false,
    false,
    false,
    false,
    false
];

var confirmAudio = new Audio();
confirmAudio.src = "D:\\tictactoe\\new\\confirm.wav";

confirmButton.addEventListener('click', function () {
    confirmAudio.play();
});



function showbox() {
    document.getElementById('modal_box').style.display = "block";
    document.getElementById('content').style.display = "none";
    // document.querySelector('.show-modal').style.display = 'none';
    for (let i = 0; i < modalButton.length; i++)
        modalButton[i].style.display = 'none';
    document.body.style.background = '#12b886';
}

function closebox() {
    document.getElementById('modal_box').style.display = "none";
    document.getElementById('content').style.display = "block";
    // document.querySelector('.show-modal').style.display = 'block';
    for (let i = 0; i < modalButton.length; i++)
        modalButton[i].style.display = 'block';
    if (player == false) document.body.style.background = '#3bc9db';
    else document.body.style.background = '#fab005';
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

function onConfirm(obj) {
    oldValue = obj.value;
}

function changePlayer(id1, id2, val) {
    if (val.value < 1 || val.value > 6) {
        val.value = oldValue;
        playerA[id1][id2] = 0;
        playerB[id1][id2] = 0;
        return;
    }
    if (player == false) {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (playerA[i][j] == val.value) {
                    val.value = oldValue;
                    playerA[id1][id2] = 0;
                    playerB[id1][id2] = 0;
                    return;
                }
            }
        }

        if (parseInt(oldValue) > parseInt(val.value)) {
            val.value = oldValue;
            playerB[id1][id2] = oldValue;
            return;
        } else {
            playerA[id1][id2] = val.value;
            // background color
            document.body.style.background = '#fab005';

            // input color 
            // document.querySelector('.inputBox').style.background = '#ffe066';
            // document.querySelector('.box').style.background = '#ffe066';
            for (let i = 0; i < playerBoxColor.length; i++) {
                playerBoxColor[i].style.background = '#ffe066';
                playerInpColor[i].style.background = '#ffe066';
            }
            // button color
            for (let i = 0; i < modalButton.length; i++)
                modalButton[i].style.color = '#fab005';
            document.querySelector('.btn').style.color = '#fab005';
        }
        playerB[id1][id2] = 0;
        val.style.color = '#0b7285';


    } else {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (playerB[i][j] == val.value) {
                    val.value = oldValue;
                    playerA[id1][id2] = 0;
                    playerB[id1][id2] = 0;
                    return;
                }
            }
        }
        if (parseInt(oldValue) > parseInt(val.value)) {
            val.value = oldValue;
            playerA[id1][id2] = oldValue;
            return;
        } else {
            playerB[id1][id2] = val.value;
            // background color
            document.body.style.background = '#3bc9db';
            // input color 
            for (let i = 0; i < playerBoxColor.length; i++) {
                playerBoxColor[i].style.background = '#66d9e8';
                playerInpColor[i].style.background = '#66d9e8';
            }

            // button color
            for (let i = 0; i < modalButton.length; i++)
                modalButton[i].style.color = '#3bc9db';
            document.querySelector('.btn').style.color = '#3bc9db';
        }
        playerA[id1][id2] = 0;
        val.style.color = '#e67700';
    }


    player = !player;
    console.log(playerA, playerB, player, oldValue);
    winning();
    oldValue = null;
}



// audio
// draw
// what number we use it will show by any means