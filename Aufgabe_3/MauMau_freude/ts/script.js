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
    // Herz Karten
    let herzSieben = {
        value: 1,
        layValue: "1",
        renderValue: "Sieben",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzAcht = {
        value: 2,
        layValue: "2",
        renderValue: "Acht",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzNeun = {
        value: 3,
        layValue: "3",
        renderValue: "Neun",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzZehn = {
        value: 4,
        layValue: "4",
        renderValue: "Zehn",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzBube = {
        value: 5,
        layValue: "5",
        renderValue: "Bube",
        color: "",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzDame = {
        value: 6,
        layValue: "6",
        renderValue: "Dame",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzKoenig = {
        value: 7,
        layValue: "7",
        renderValue: "König",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    let herzAss = {
        value: 8,
        layValue: "8",
        renderValue: "Ass",
        color: "Rot",
        symbol: "♥",
        classcss: "CardRed",
    };
    // Pik Karten 
    let pikSieben = {
        value: 9,
        layValue: "9",
        renderValue: "Sieben",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikAcht = {
        value: 10,
        layValue: "10",
        renderValue: "Acht",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikNeun = {
        value: 11,
        layValue: "11",
        renderValue: "Neun",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikZehn = {
        value: 12,
        layValue: "12",
        renderValue: "Zehn",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikBube = {
        value: 13,
        layValue: "13",
        renderValue: "Bube",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikDame = {
        value: 14,
        layValue: "14",
        renderValue: "Dame",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikKoenig = {
        value: 15,
        layValue: "15",
        renderValue: "König",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    let pikAss = {
        value: 16,
        layValue: "16",
        renderValue: "Ass",
        color: "Schwarz",
        symbol: "♠",
        classcss: "CardSchwarz",
    };
    //Karo Karten
    let karoSieben = {
        value: 17,
        layValue: "17",
        renderValue: "Sieben",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoAcht = {
        value: 18,
        layValue: "18",
        renderValue: "Acht",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoNeun = {
        value: 19,
        layValue: "19",
        renderValue: "Neun",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoZehn = {
        value: 20,
        layValue: "20",
        renderValue: "Zehn",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoBube = {
        value: 21,
        layValue: "21",
        renderValue: "Bube",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoDame = {
        value: 22,
        layValue: "22",
        renderValue: "Dame",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoKoenig = {
        value: 23,
        layValue: "23",
        renderValue: "König",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    let karoAss = {
        value: 24,
        layValue: "24",
        renderValue: "Ass",
        color: "Rot",
        symbol: "♦",
        classcss: "CardRed",
    };
    //Kreuz Karten
    let kreuzSieben = {
        value: 25,
        layValue: "25",
        renderValue: "Sieben",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzAcht = {
        value: 26,
        layValue: "26",
        renderValue: "Acht",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzNeun = {
        value: 27,
        layValue: "27",
        renderValue: "Neun",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzZehn = {
        value: 28,
        layValue: "28",
        renderValue: "Zehn",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzBube = {
        value: 29,
        layValue: "29",
        renderValue: "Bube",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzDame = {
        value: 30,
        layValue: "30",
        renderValue: "Dame",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzKoenig = {
        value: 31,
        layValue: "31",
        renderValue: "König",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let kreuzAss = {
        value: 32,
        layValue: "32",
        renderValue: "Ass",
        color: "Schwarz",
        symbol: "♣",
        classcss: "CardSchwarz",
    };
    let cards = [herzSieben, herzAcht, herzNeun, herzZehn, herzBube, herzDame, herzKoenig, herzAss, pikSieben, pikAcht, pikNeun, pikZehn, pikBube, pikDame, pikKoenig, pikAss, karoSieben, karoAcht, karoNeun, karoZehn, karoBube, karoDame, karoKoenig, karoAss, kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss];
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
                return;
            }
            else { //wenn falsch, wird nicht ausgeführt
                return;
            }
        });
        document.getElementById("html").addEventListener('click', _cardEvent => {
            console.log(_cardEvent);
            layCard(_cardEvent);
        }); //wie kommen wir an den eigentlichen wert der Karte ??
        document.getElementById("butt").addEventListener('click', sortCards);
        return;
    }
    function drawCard() {
        if (cards.length == 0) { //abfrage, wieviele Karten noch da sind. 
            alert("All work and no play, makes Iven a dull boy. - Du hast alle Karten aufgebraucht");
        }
        else {
            document.getElementById("html").innerHTML = "";
            console.log("Karte wurde gezogen");
            randomNumber(cards.length);
            handCards.push(cards.splice(ranNum, 1)[0]);
            renderCards(handCards);
            console.log(handCards);
        }
    }
    function layCard(_event) {
        console.log("Karte legen wurde gewählt");
        let clickedCard = event.target;
        console.log(clickedCard.getAttribute("id"));
        for (let a = 0; a < handCards.length; a++) {
            if (clickedCard.getAttribute("id") == handCards[a].layValue) {
                document.getElementById("legeKarte").innerHTML = ""; //den ablgenestapel leeren 
                stackCards.push(handCards.splice(a, 1)[0]);
                console.log(stackCards);
                let f = stackCards.length - 1; //immer die letzte Karte an die funktion übergeben 
                displayLayedCards(stackCards[f]);
                document.getElementById("html").innerHTML = ""; //alle Karten löschen um die übringen neu darzustellen
                renderCards(handCards); //dann wieder alle Karten neu schreiben
            }
            else if (clickedCard.getAttribute("id") == null || clickedCard.getAttribute("id") == "html") {
                alert("Bitte nur auf die Kartenflächen clicken!");
                return;
            }
            else {
                return;
            }
        }
    }
    function displayLayedCards(_layCards) {
        let cardDiv = document.createElement('div');
        let div = `<div class="${_layCards.classcss}" id="${_layCards.value}">
        <p>${_layCards.renderValue}</p>
        <p class="symbol">${_layCards.symbol}</p>
        </div>
    `;
        cardDiv.innerHTML = div;
        document.getElementById('legeKarte').appendChild(cardDiv);
    }
    //hier kommt alles zum sortieren
    function sortCards() {
        //console.log("test3");
        handCards.sort(arraySortCondition);
        document.getElementById("html").innerHTML = ""; //überschreibt die alten karten 
        console.log(handCards); //zur sicherheit mal ausgeben 
        renderCards(handCards); //das neu sortierte Array wird abgebildet 
    }
    //thanks very much to developer.mozilla
    function arraySortCondition(a, b) {
        let sortA = a.value; //value dient als universelle Reihenfolge der Karten (alle karten sind von 1 bis 32 durchnummeriert)
        let sortB = b.value;
        if (sortA > sortB) {
            return 1;
        }
        ;
        if (sortA == sortB) {
            return 0;
        }
        ;
        if (sortA < sortB) {
            return -1;
        }
        ;
    }
    //hier geht es weiter zu den altern funktionen
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
        while (m < _handCards.length) {
            displayRandomCards('html', _handCards[m]);
            m++;
        }
    }
    function displayRandomCards(_html, _handCards) {
        let cardDiv = document.createElement('div');
        let div = `<div class="${_handCards.classcss}" id="${_handCards.value}">
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
        howManyCards(numCard);
    }
})(MauMau || (MauMau = {}));
//# sourceMappingURL=script.js.map