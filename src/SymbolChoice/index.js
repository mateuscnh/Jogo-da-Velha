export default function SymbolChoice() {
    let symbol = document.querySelectorAll(".symbol");

    symbol[0].setAttribute("symbol", "../../images/symbol_x.png");
    symbol[1].setAttribute("symbol", "../../images/symbol_o.png");

    function createElements() {
        const divSymbolChoice = document.createElement("div");
        divSymbolChoice.setAttribute("id", "symbolChoice");

        const divLogo = document.createElement("div");
    }


    /*
    <div id="symbolChoice">
        <div class="logo"></div>
        <div class="container">
            <h1>FAÇA SUA ESCOLHA</h1>
            <div id="symbolImages">
                <img class="symbol" src="images/symbol_x.png" symbol="">
                <img class="symbol" src="images/symbol_o.png" symbol="">
            </div>
        </div>
        <!--Container-->
    </div>
    */

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