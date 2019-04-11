/*
Aufgabe: Aufgabe 2 Mau Mau
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 07.04.19
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var MauMau;
(function (MauMau) {
    //funktionen die zubeginn ausgeführt werden müssen
    document.addEventListener('DOMContentLoaded', init); //rest der Funktion 
    document.addEventListener('DOMContentLoaded', addListeners); //eventlisteners 
    let cards = [];
    // Herz Karten
    let herzSieben = {
        value: 7,
        renderValue: "Sieben",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzAcht = {
        value: 8,
        renderValue: "Acht",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzNeun = {
        value: 9,
        renderValue: "Neun",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzZehn = {
        value: 10,
        renderValue: "Zehn",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzBube = {
        value: 11,
        renderValue: "Bube",
        color: "",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzDame = {
        value: 12,
        renderValue: "Dame",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzKoenig = {
        value: 13,
        renderValue: "König",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzAss = {
        value: 1,
        renderValue: "Ass",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    // Pik Karten 
    let pikSieben = {
        value: 7,
        renderValue: "Sieben",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikAcht = {
        value: 8,
        renderValue: "Acht",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikNeun = {
        value: 9,
        renderValue: "Neun",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikZehn = {
        value: 10,
        renderValue: "Zehn",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikBube = {
        value: 11,
        renderValue: "Bube",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikDame = {
        value: 12,
        renderValue: "Dame",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikKoenig = {
        value: 13,
        renderValue: "König",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikAss = {
        value: 1,
        renderValue: "Ass",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    //Karo Karten
    let karoSieben = {
        value: 7,
        renderValue: "Sieben",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoAcht = {
        value: 8,
        renderValue: "Acht",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoNeun = {
        value: 9,
        renderValue: "Neun",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoZehn = {
        value: 10,
        renderValue: "Zehn",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoBube = {
        value: 11,
        renderValue: "Bube",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoDame = {
        value: 12,
        renderValue: "Dame",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoKoenig = {
        value: 13,
        renderValue: "König",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoAss = {
        value: 1,
        renderValue: "Ass",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    //Kreuz Karten
    let kreuzSieben = {
        value: 7,
        renderValue: "Sieben",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzAcht = {
        value: 8,
        renderValue: "Acht",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzNeun = {
        value: 9,
        renderValue: "Neun",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzZehn = {
        value: 10,
        renderValue: "Zehn",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzBube = {
        value: 11,
        renderValue: "Bube",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzDame = {
        value: 12,
        renderValue: "Dame",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzKoenig = {
        value: 13,
        renderValue: "König",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzAss = {
        value: 1,
        renderValue: "Ass",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let handCards = [];
    let stackCards = [];
    let numCard = 0;
    let ranNum;
    function addListeners() {
        document.getElementById("zieheKarte").addEventListener('click', drawCard);
        document.addEventListener("keydown", event => {
            console.log(event);
            if (event.keyCode == 32) {
                drawCard();
            }
            else { //wenn falsch, wird nicht ausgeführt
                return;
            }
        });
        document.getElementById("html").addEventListener('click', layCard); //wie kommen wir an den eigentlichen wert der Karte ??
        document.getElementById("butt").addEventListener('click', sortCards);
        return;
    }
    function drawCard() {
        console.log("test");
        randomNumber(handCards.length);
        handCards.push(cards.splice(ranNum, 1)[0]);
        renderCards(handCards);
    }
    function layCard() {
        console.log("test2");
    }
    function sortCards() {
        console.log("test3");
    }
    function howManyCards(numCard) {
        if (numCard == 0) {
            do {
                numCard = parseInt(prompt("Mit wie viele Karten möchtest du spielen?", "..."));
            } while (isNaN(numCard) || numCard < 1 || numCard > 32);
        }
        getRandomCards(numCard);
    }
    function getRandomCards(_numCard) {
        while (_numCard > 0) {
            randomNumber(cards.length); // Funktion für Randome Number
            handCards.push(cards.splice(ranNum, 1)[0]);
            console.log(handCards);
            _numCard--;
        }
        renderCards(handCards); //Funktion um die Divs zu erstellen
    }
    function randomNumber(_y) {
        let _x;
        let max = _y;
        _x = Math.floor(Math.random() * Math.floor(max));
        return ranNum = _x;
    }
    function renderCards(_handCards) {
        let m = 0;
        while (m < handCards.length) {
            displayRandomCards('html', handCards[m]);
            m++;
        }
    }
    function displayRandomCards(_html, _handCards) {
        let cardDiv = document.createElement('div');
        let div = `<div class="${_handCards.classcss}">
        <p>${_handCards.renderValue}</p>
        <p class="symbol">${_handCards.symbol}</p>
        </div>
    `;
        cardDiv.innerHTML = div;
        document.getElementById(_html).appendChild(cardDiv);
    }
    function renderStapelz(_stapel) {
        let stapelzDiv = document.createElement('div');
        let div = `<div class="MasterStapel" id="zieheKarte">
         <img src="./KartenMuster.jpg" alt="" height="280px" width="200px"srcset="">
        </div>
        <div class="AblegeStapel" id="legeKarte" >

        </div>
    `;
        stapelzDiv.innerHTML = div;
        document.getElementById(_stapel).appendChild(stapelzDiv);
    }
    function init() {
        renderStapelz('stapel');
        cards.push(herzSieben, herzAcht, herzNeun, herzZehn, herzBube, herzDame, herzKoenig, herzAss, pikSieben, pikAcht, pikNeun, pikZehn, pikBube, pikDame, pikKoenig, pikAss, karoSieben, karoAcht, karoNeun, karoZehn, karoBube, karoDame, karoKoenig, karoAss, kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss);
        howManyCards(numCard);
    }
})(MauMau || (MauMau = {}));
//# sourceMappingURL=script.js.map