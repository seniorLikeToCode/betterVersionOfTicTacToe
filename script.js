'use strict';


/*------------------ Selecting element ----------------*/

const btnConfirm = document.getElementById("confirm-btn");
const playerBoxColor = document.getElementsByClassName('box');
const playerInpColor = document.getElementsByClassName('inputBox');
const modalButton = document.getElementsByClassName('show-modal');
const confirmButton = document.getElementById('confirm-btn');
const button = document.getElementsByTagName('button');

/*------------------ Audio ----------------*/

const confirmAudio = new Audio('confirm.wav');
const errorAudio = new Audio('error.wav');
const gameWinAudio = new Audio('game-win.wav');


/*------------------ Define game variable ----------------*/

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

var boolPlayerA = [false, false, false, false, false, false];
var boolPlayerB = [false, false, false, false, false, false];


/*------------------ Color theme of player A ----------------*/

function colorThemeOfPlayerA() {

    /*------------------ Background ----------------*/

    document.body.style.background = '#fab005';

    /*------------------ Grid Color ----------------*/

    for (let i = 0; i < playerBoxColor.length; i++) {
        playerBoxColor[i].style.background = '#ffe066';
        playerInpColor[i].style.background = '#ffe066';
    }
    for (let i = 0; i < modalButton.length; i++)
        modalButton[i].style.color = '#fab005';
    document.querySelector('.btn').style.color = '#fab005';
}

/*------------------ Color theme of player B ----------------*/

function colorThemeOfPlayerB() {

    /*------------------ Background ----------------*/

    document.body.style.background = '#3bc9db';

    /*------------------ Grid Color ----------------*/

    for (let i = 0; i < playerBoxColor.length; i++) {
        playerBoxColor[i].style.background = '#66d9e8';
        playerInpColor[i].style.background = '#66d9e8';
    }
    for (let i = 0; i < modalButton.length; i++)
        modalButton[i].style.color = '#3bc9db';
    document.querySelector('.btn').style.color = '#3bc9db';
}

/*------------------ winning Theme ----------------*/

function winningTheme() {
    document.getElementById("content").style.display = "none";
    document.body.style.background = '#f03e3e';
    for (let i = 0; i < modalButton, length; i++) {
        modalButton[i].style.display = 'none';
    }
    gameWinAudio.play();
}


function openRuleBox() {
    confirmAudio.play();
    document.getElementById('modal_box').style.display = "block";
    document.getElementById('content').style.display = "none";


    /*------------------ hide all button ----------------*/

    for (let i = 0; i < modalButton.length; i++)
        modalButton[i].style.display = 'none';

    document.body.style.background = '#12b886';
}

function closeRuleBox() {
    confirmAudio.play();
    document.getElementById('modal_box').style.display = "none";
    document.getElementById('content').style.display = "block";

    /*------------------ unhide all button ----------------*/

    for (let i = 0; i < modalButton.length; i++)
        modalButton[i].style.display = 'block';

    /*------------------ change theme to current player ----------------*/
    if (player == false) colorThemeOfPlayerB();
    else colorThemeOfPlayerA();
}

function openAboutBox() {
    confirmAudio.play();
    document.getElementById('about_modal').style.display = "block";
    document.getElementById('content').style.display = "none";

    /*------------------ hide all button ----------------*/
    for (let i = 0; i < modalButton.length; i++)
        modalButton[i].style.display = 'none';

    document.body.style.background = '#12b886';
}

function closeAboutBox() {
    confirmAudio.play();
    document.getElementById('about_modal').style.display = "none";
    document.getElementById('content').style.display = "block";

    /*------------------ unhide all button ----------------*/

    for (let i = 0; i < modalButton.length; i++)
        modalButton[i].style.display = 'block';

    /*------------------ change theme to current player ----------------*/

    if (player == false) colorThemeOfPlayerB();
    else colorThemeOfPlayerA();
}



/* Game Logic */
function winning() {

    /*------------------ PLayer A  ----------------*/
    /*------------------ horizontal row  ----------------*/

    if (playerA[0][0] != 0 && playerA[0][1] != 0 && playerA[0][2] != 0) {
        playerWonA = true;
    } else if (playerA[1][0] != 0 && playerA[1][1] != 0 && playerA[1][2] != 0) {
        playerWonA = true;
    } else if (playerA[2][0] != 0 && playerA[2][1] != 0 && playerA[2][2] != 0) {
        playerWonA = true;
    }

    /*------------------ vertical row  ----------------*/

    else if (playerA[0][0] != 0 && playerA[1][0] != 0 && playerA[2][0] != 0) {
        playerWonA = true;
    } else if (playerA[0][1] != 0 && playerA[1][1] != 0 && playerA[2][1] != 0) {
        playerWonA = true;
    } else if (playerA[0][2] != 0 && playerA[1][2] != 0 && playerA[2][2] != 0) {
        playerWonA = true;
    }

    /*------------------ diagonal row  ----------------*/

    else if (playerA[0][0] != 0 && playerA[1][1] != 0 && playerA[2][2] != 0) {
        playerWonA = true;
    } else if (playerA[0][2] != 0 && playerA[1][1] != 0 && playerA[2][0] != 0) {
        playerWonA = true;
    }


    /*------------------ PLayer B  ----------------*/
    /*------------------ horizontal row  ----------------*/

    if (playerB[0][0] != 0 && playerB[0][1] != 0 && playerB[0][2] != 0) {
        playerWonB = true;
    } else if (playerB[1][0] != 0 && playerB[1][1] != 0 && playerB[1][2] != 0) {
        playerWonB = true;
    } else if (playerB[2][0] != 0 && playerB[2][1] != 0 && playerB[2][2] != 0) {
        playerWonB = true;
    }


    /*------------------ vertical row  ----------------*/

    else if (playerB[0][0] != 0 && playerB[1][0] != 0 && playerB[2][0] != 0) {
        playerWonB = true;
    } else if (playerB[0][1] != 0 && playerB[1][1] != 0 && playerB[2][1] != 0) {
        playerWonB = true;
    } else if (playerB[0][2] != 0 && playerB[1][2] != 0 && playerB[2][2] != 0) {
        playerWonB = true;
    }


    /*------------------ diagonal row  ----------------*/

    else if (playerB[0][0] != 0 && playerB[1][1] != 0 && playerB[2][2] != 0) {
        playerWonB = true;
    } else if (playerB[0][2] != 0 && playerB[1][1] != 0 && playerB[2][0] != 0) {
        playerWonB = true;
    }

    /*------------------ condition for player A wins  ----------------*/

    if (playerWonA) {
        document.getElementById('win-modal').innerHTML = 'Player A Won';
        winningTheme();
    }

    /*------------------ condition for player B wins ----------------*/
    if (playerWonB) {
        document.getElementById('win-modal').innerHTML = 'Player B Won';
        winningTheme();
    }
}

/*------------------ checking old values ----------------*/

function onConfirm(obj) {
    oldValue = obj.value;
}

function changePlayer(id1, id2, val) {

/*------------------ 
If player enter invalid number such not in range[1,6]
then old value get back if there is no value then it
is replaced by null
----------------*/
    if (val.value < 1 || val.value > 6) {
        errorAudio.play();
        val.value = oldValue;
        playerA[id1][id2] = 0;
        playerB[id1][id2] = 0;
        return;
    }
    /*------------------ Player A conditions  ----------------*/
    if (player == false) {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (playerA[i][j] == val.value) {
                    errorAudio.play();
                    val.value = oldValue;
                    playerA[id1][id2] = 0;
                    playerB[id1][id2] = 0;
                    return;
                }
            }
        }

        if (parseInt(oldValue) > parseInt(val.value)) {
            errorAudio.play();
            val.value = oldValue;
            playerB[id1][id2] = oldValue;
            return;
        } else {
            confirmAudio.play();
            playerA[id1][id2] = val.value;
            colorThemeOfPlayerA();
        }
        playerB[id1][id2] = 0;
        val.style.color = '#0b7285';

        /*------------------ Player B condition  ----------------*/
    } else {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (playerB[i][j] == val.value) {
                    errorAudio.play();
                    val.value = oldValue;
                    playerA[id1][id2] = 0;
                    playerB[id1][id2] = 0;
                    return;
                }
            }
        }
        if (parseInt(oldValue) > parseInt(val.value)) {
            errorAudio.play();
            val.value = oldValue;
            playerA[id1][id2] = oldValue;
            return;
        } else {
            confirmAudio.play();
            playerB[id1][id2] = val.value;
            colorThemeOfPlayerB();
        }
        playerA[id1][id2] = 0;
        val.style.color = '#e67700';
    }


    player = !player; /*----- player change -----*/
    winning();
    oldValue = null;
}

