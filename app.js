symbolChoiceClick();

let player1 = "X";
let player2 = "O";
let choicePlayer = player1;
let playTime = player1;

function symbolChoiceClick() {
    let symbol = document.querySelectorAll(".symbol");

    symbol[0].setAttribute("symbol", "../../images/symbol_x.png");
    symbol[1].setAttribute("symbol", "../../images/symbol_o.png");

    for (let index = 0; index < symbol.length; index++) {
        symbol[index].addEventListener("click", () => {
            document.getElementById("symbolChoice").style.display = "none";
            document.getElementById("insertName").style.display = "block";
            symbolPlayer = symbol[index].getAttribute("symbol");
            if (symbolPlayer === "../../images/symbol_o.png") {
                symbolComputer = "../../images/symbol_x.png";
                playTime = player2;
                choicePlayer = player2;
            } else {
                symbolComputer = "../../images/symbol_o.png";
            }
        });
    }
    return symbolPlayer, symbolComputer;
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
    document.getElementById("symbolPlayer").style.backgroundImage = 'url(' + symbolPlayer + ')';
    document.getElementById("symbolComputer").style.backgroundImage = 'url(' + symbolComputer + ')';
}

let scorePlayer = 0;
let scoreComputer = 0;

game();

function changeScore() {
    document.getElementById("scorePlayer").innerHTML = scorePlayer;
    document.getElementById("scoreComputer").innerHTML = scoreComputer;
}

function game() {
    document.getElementById("winner").style.display = "none";
    document.getElementById("winnerText").innerHTML = "VENCEDOR";
    var gameOver = false;
    changeScore();

    initializeAreas();
    if (document.getElementsByClassName('symbolPlayed').length != 0) {
        removeAreas();
    }
    function initializeAreas() {
        var areas = document.getElementsByClassName("area");

        for (let index = 0; index < areas.length; index++) {
            areas[index].addEventListener("click", function () {
                if (gameOver) return;
                if (this.getElementsByClassName('symbolPlayed').length == 0) {
                    if (playTime == player1) {
                        this.innerHTML = "<img class='symbolPlayed' src='../../images/symbol_x.png'></img>";
                        this.setAttribute("player", player1);
                        playTime = player2;
                    } else {
                        this.innerHTML = "<img class='symbolPlayed' src='../../images/symbol_o.png'></img>";
                        this.setAttribute("player", player2);
                        playTime = player1;
                    }
                    result();
                }
            });
        }
    }

    function removeAreas() {
        var areas = document.querySelectorAll(".area");
        for (let index = 0; index < areas.length; index++) {
            areas[index].setAttribute("player", "");
            if (areas[index].childNodes[0] != undefined) {
                let child = areas[index].childNodes[0];
                areas[index].removeChild(child);
            }
        }
    }

    async function result() {
        var a1 = document.getElementById("a1").getAttribute("player");
        var a2 = document.getElementById("a2").getAttribute("player");
        var a3 = document.getElementById("a3").getAttribute("player");

        var b1 = document.getElementById("b1").getAttribute("player");
        var b2 = document.getElementById("b2").getAttribute("player");
        var b3 = document.getElementById("b3").getAttribute("player");

        var c1 = document.getElementById("c1").getAttribute("player");
        var c2 = document.getElementById("c2").getAttribute("player");
        var c3 = document.getElementById("c3").getAttribute("player");

        var winner = "";

        if (((a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3) || (a1 == b1 && a1 == c1)) && a1 != "") {
            winner = a1;

        } else if (((b2 == a2 && b2 == c2) || (b2 == b1 && b2 == b3) || (b2 == c1 && b2 == a3)) && b2 != "") {
            winner = b2;

        } else if (((c3 == c2 && c3 == c1) || (c3 == b3 && c3 == a3)) && c3 != "") {
            winner = c3;

        } else if (a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "") {
            await sleep(50);
            document.getElementById("winner").style.display = "block";
            document.getElementById("symbolWinner").style.backgroundImage = 'url(' + "../../images/logo3.png" + ')';
            document.getElementById("winnerText").innerHTML = "DEU VELHA";
        }

        if (winner != "") {
            await sleep(50);
            document.getElementById("winner").style.display = "block";


            if (winner == "X") {
                if (choicePlayer == "X") {
                    scorePlayer++;
                } else {
                    scoreComputer++;
                }
                document.getElementById("symbolWinner").style.backgroundImage = 'url(' + "../../images/symbol_x.png" + ')';
            } else {
                if (choicePlayer == "O") {
                    scorePlayer++;
                } else {
                    scoreComputer++;
                }
                document.getElementById("symbolWinner").style.backgroundImage = 'url(' + "../../images/symbol_o.png" + ')';
            }

            playTime = winner;
            gameOver = true;

        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
