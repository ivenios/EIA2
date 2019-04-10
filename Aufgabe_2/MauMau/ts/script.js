/*
Aufgabe: Aufgabe 2 Mau Mau
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 07.04.19
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
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
        randomNumber(ranNum, _numCard); // Funktion für Randome Number
        handCards.push(cards.splice(ranNum, 1)[0]);
        console.log(handCards);
        _numCard--;
    }
    renderCards(handCards); //Funktion um die Divs zu erstellen
}
function randomNumber(_x, _y) {
    let max = cards.length;
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
    return;
}
function renderStapelz(_stapel) {
    let stapelzDiv = document.createElement('div');
    let div = `<div class="MasterStapel">
         <img src="./KartenMuster.jpg" alt="" height="280px" width="200px"srcset="">
        </div>
        <div class="AblegeStapel" >

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
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=script.js.map