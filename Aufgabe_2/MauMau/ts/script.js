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
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
};
let herzAcht = {
    value: 8,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
};
let herzNeun = {
    value: 9,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
};
let herzZehn = {
    value: 10,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
};
let herzBube = {
    value: 11,
    color: "",
    symbol: "♥",
    classcss: "cardRed",
};
let herzDame = {
    value: 12,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
};
let herzKoenig = {
    value: 13,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
};
let herzAss = {
    value: 1,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
};
// Pik Karten 
let pikSieben = {
    value: 7,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
};
let pikAcht = {
    value: 8,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
};
let pikNeun = {
    value: 9,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
};
let pikZehn = {
    value: 10,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
};
let pikBube = {
    value: 11,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
};
let pikDame = {
    value: 12,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
};
let pikKoenig = {
    value: 13,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
};
let pikAss = {
    value: 1,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
};
//Karo Karten
let karoSieben = {
    value: 7,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
};
let karoAcht = {
    value: 8,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
};
let karoNeun = {
    value: 9,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
};
let karoZehn = {
    value: 10,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
};
let karoBube = {
    value: 11,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
};
let karoDame = {
    value: 12,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
};
let karoKoenig = {
    value: 13,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
};
let karoAss = {
    value: 1,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
};
//Kreuz Karten
let kreuzSieben = {
    value: 7,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
};
let kreuzAcht = {
    value: 8,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
};
let kreuzNeun = {
    value: 9,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
};
let kreuzZehn = {
    value: 10,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
};
let kreuzBube = {
    value: 11,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
};
let kreuzDame = {
    value: 12,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
};
let kreuzKoenig = {
    value: 13,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
};
let kreuzAss = {
    value: 1,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
};
let handCards = [];
let stackCards = [];
let numCard = 0;
let ranNum;
function askPlayerForCards(numCard) {
    if (numCard == 0) {
        do {
            numCard = parseInt(prompt("Wie viele Karten möchtest du?"));
        } while (numCard == 0 || numCard < 1 || numCard > 32);
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
function renderCards(handCards) {
    var m = 0;
    while (m < handCards.length) {
        displayRandomCards('html', handCards[m]);
        m++;
    }
}
function displayRandomCards(html, handCards) {
    let cardDiv = document.createElement('div');
    let div = `<div class="${handCards.classcss}">
        <p>${handCards.value}</p>
        <p class="symbol">${handCards.symbol}</p>
        </div>
    `;
    cardDiv.innerHTML = div;
    document.getElementById(html).appendChild(cardDiv);
}
function init() {
    cards.push(herzSieben, herzAcht, herzNeun, herzZehn, herzBube, herzDame, herzKoenig, herzAss, pikSieben, pikAcht, pikNeun, pikZehn, pikBube, pikDame, pikKoenig, pikAss, karoSieben, karoAcht, karoNeun, karoZehn, karoBube, karoDame, karoKoenig, karoAss, kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss);
    askPlayerForCards(numCard);
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=script.js.map