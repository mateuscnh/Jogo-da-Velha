let scorePlayer = 0;
let scoreComputer = 0;
let playTime = "X";
let gameOver = false;
let board = ["", "", "", "", "", "", "", "", ""];
let areas = document.getElementsByClassName("singleArea");

function game() {
    document.getElementById("winner").style.display = "none";
    removeAreas();
    changeScore();
    gameOver = false;
}

playedAreas();
game();

function playedAreas() {
    for (let index = 0; index < areas.length; index++) {
        areas[index].addEventListener("click", async function () {
            if (gameOver) return;
            if ((playTime == "X") && (areas[index].childNodes.length == 0)) {
                this.innerHTML = "<img class='symbolPlayed' src='./images/symbol_x.png'></img>";
                this.setAttribute("player", "X");
                await result();
                if (gameOver) return;
                playTime = "O";
                await sleep(500);
                computerMove();
            }
        });
    }
}

function buttonConfirm() {
    let namePlayer = document.getElementById("namePlayer").value;
    if (namePlayer != "") {
        document.getElementById("insertName").style.display = "none";
        document.querySelector("#game").style.display = "block";
    } else {
        document.getElementById("namePlayer").style.border = "2px solid red";
        document.getElementById("namePlayer").setAttribute("placeholder", "Informe seu nome");
    }
    document.getElementById("nameChoicePlayer").innerHTML = namePlayer;
}

function changeScore() {
    document.getElementById("scorePlayer").innerHTML = scorePlayer;
    document.getElementById("scoreComputer").innerHTML = scoreComputer;
}

function removeAreas() {
    for (let index = 0; index < areas.length; index++) {
        areas[index].setAttribute("player", "");
        if (areas[index].childNodes[0] != undefined) {
            let child = areas[index].childNodes[0];
            areas[index].removeChild(child);
        }
    }
}

async function result() {
    createBoard();

    var winner = "";

    if (((board[0] == board[1] && board[0] == board[2]) || (board[0] == board[4] && board[0] == board[8]) || (board[0] == board[3] && board[0] == board[6])) && board[0] != "") {
        winner = board[0];
    } else if (((board[4] == board[1] && board[4] == board[7]) || (board[4] == board[3] && board[4] == board[5]) || (board[4] == board[6] && board[4] == board[2])) && board[4] != "") {
        winner = board[4];
    } else if (((board[8] == board[7] && board[8] == board[6]) || (board[8] == board[5] && board[8] == board[2])) && board[8] != "") {
        winner = board[8];
    } else if (board[0] != "" && board[1] != "" && board[2] != "" && board[3] != "" && board[4] != "" && board[5] != "" && board[6] != "" && board[7] != "" && board[8] != "") {
        await sleep(50);
        document.getElementById("winner").style.display = "block";
        document.getElementById("symbolWinner").style.backgroundImage = 'url(' + "./images/logo3.png" + ')';
        document.getElementById("winnerText").innerHTML = "DEU VELHA";
        gameOver = true;
    }

    if (winner != "") {
        if (winner == "X") {
            scorePlayer++;
            document.getElementById("symbolWinner").style.backgroundImage = 'url(' + "./images/symbol_x.png" + ')';
        } else {
            scoreComputer++;
            document.getElementById("symbolWinner").style.backgroundImage = 'url(' + "./images/symbol_o.png" + ')';
        }
        await sleep(50);
        document.getElementById("winnerText").innerHTML = "VENCEDOR";
        document.getElementById("winner").style.display = "block";
        gameOver = true;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function computerMove() {
    if (board[4] == "") {
        insertAreaPlayed(areas[4]);
        return;
    } else {
        if ((board[0] == "X") && (board[1] == "X") && (board[2] == "")) {
            insertAreaPlayed(areas[2]);
            return
        } else if ((board[0] == "X") && (board[2] == "X") && (board[1] == "")) {
            insertAreaPlayed(areas[1]);
            return
        } else if ((board[1] == "X") && (board[2] == "X") && (board[0] == "")) {
            insertAreaPlayed(areas[0]);
            return
        }

        if ((board[3] == "X") && (board[4] == "X") && (board[5] == "")) {
            insertAreaPlayed(areas[5]);
            return
        } else if ((board[3] == "X") && (board[5] == "X") && (board[4] == "")) {
            insertAreaPlayed(areas[4]);
            return
        } else if ((board[4] == "X") && (board[5] == "X") && (board[3] == "")) {
            insertAreaPlayed(areas[3]);
            return
        }

        if ((board[6] == "X") && (board[7] == "X") && (board[8] == "")) {
            insertAreaPlayed(areas[8]);
            return
        } else if ((board[6] == "X") && (board[8] == "X") && (board[7] == "")) {
            insertAreaPlayed(areas[7]);
            return
        } else if ((board[7] == "X") && (board[8] == "X") && (board[6] == "")) {
            insertAreaPlayed(areas[6]);
            return
        }

        if ((board[0] == "X") && (board[3] == "X") && (board[6] == "")) {
            insertAreaPlayed(areas[6]);
            return;
        } else if ((board[0] == "X") && (board[6] == "X") && (board[3] == "")) {
            insertAreaPlayed(areas[3]);
            return;
        } else if ((board[3] == "X") && (board[6] == "X") && (board[0] == "")) {
            insertAreaPlayed(areas[0]);
            return;
        }

        if ((board[1] == "X") && (board[4] == "X") && (board[7] == "")) {
            insertAreaPlayed(areas[7]);
            return;
        } else if ((board[1] == "X") && (board[7] == "X") && (board[4] == "")) {
            insertAreaPlayed(areas[4]);
            return;
        } else if ((board[4] == "X") && (board[7] == "X") && (board[1] == "")) {
            insertAreaPlayed(areas[1]);
            return;
        }

        if ((board[2] == "X") && (board[5] == "X") && (board[8] == "")) {
            insertAreaPlayed(areas[8]);
            return;
        } else if ((board[2] == "X") && (board[8] == "X") && (board[5] == "")) {
            insertAreaPlayed(areas[5]);
            return;
        } else if ((board[5] == "X") && (board[8] == "X") && (board[2] == "")) {
            insertAreaPlayed(areas[2]);
            return;
        }

        if ((board[0] == "X") && (board[4] == "X") && (board[8] == "")) {
            insertAreaPlayed(areas[8]);
            return;
        } else if ((board[0] == "X") && (board[8] == "X") && (board[4] == "")) {
            insertAreaPlayed(areas[4]);
            return;
        } else if ((board[4] == "X") && (board[8] == "X") && (board[0] == "")) {
            insertAreaPlayed(areas[0]);
            return;
        }

        if ((board[2] == "X") && (board[4] == "X") && (board[6] == "")) {
            insertAreaPlayed(areas[6]);
            return;
        } else if ((board[2] == "X") && (board[6] == "X") && (board[4] == "")) {
            insertAreaPlayed(areas[4]);
            return;
        } else if ((board[4] == "X") && (board[6] == "X") && (board[2] == "")) {
            insertAreaPlayed(areas[2]);
            return;
        }
        for (let index = 0; index < 9; index++) {
            if (board[index] == "") {
                insertAreaPlayed(areas[index]);
                return
            }
        }

    }
}

async function insertAreaPlayed(areas) {
    areas.innerHTML = "<img class='symbolPlayed' src='./images/symbol_o.png'></img>";
    areas.setAttribute("player", "O");
    await result();
    playTime = "X";
}

function createBoard() {
    board[0] = document.getElementById('a0').getAttribute("player");
    board[1] = document.getElementById('a1').getAttribute("player");
    board[2] = document.getElementById('a2').getAttribute("player");
    board[3] = document.getElementById('b0').getAttribute("player");
    board[4] = document.getElementById('b1').getAttribute("player");
    board[5] = document.getElementById('b2').getAttribute("player");
    board[6] = document.getElementById('c0').getAttribute("player");
    board[7] = document.getElementById('c1').getAttribute("player");
    board[8] = document.getElementById('c2').getAttribute("player");
}

function emptyArea(line) {
    for (let column = 0; column < 3; column++) {

    }
}
