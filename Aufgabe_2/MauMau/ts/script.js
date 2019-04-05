/*
Aufgabe: <Nummer und Titel der Aufgabe>
Name: <Ihr Name>
Matrikel: <Ihre Matrikelnummer>
Datum: <Datum der letzten Bearbeitung>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
let cards = [];
// Herz Karten
let herzSieben = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let herzAcht = {
    value: 8,
    color: "",
    symbol: "",
    classcss: "",
};
let herzNeun = {
    value: 9,
    color: "",
    symbol: "",
    classcss: "",
};
let herzZehn = {
    value: 10,
    color: "",
    symbol: "",
    classcss: "",
};
let herzBube = {
    value: 11,
    color: "",
    symbol: "",
    classcss: "",
};
let herzDame = {
    value: 12,
    color: "",
    symbol: "",
    classcss: "",
};
let herzKoenig = {
    value: 13,
    color: "",
    symbol: "",
    classcss: "",
};
let herzAss = {
    value: 1,
    color: "",
    symbol: "",
    classcss: "",
};
// Pik Karten 
let pikSieben = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let pikAcht = {
    value: 8,
    color: "",
    symbol: "",
    classcss: "",
};
let pikNeun = {
    value: 9,
    color: "",
    symbol: "",
    classcss: "",
};
let pikZehn = {
    value: 10,
    color: "",
    symbol: "",
    classcss: "",
};
let pikBube = {
    value: 11,
    color: "",
    symbol: "",
    classcss: "",
};
let pikDame = {
    value: 12,
    color: "",
    symbol: "",
    classcss: "",
};
let pikKoenig = {
    value: 13,
    color: "",
    symbol: "",
    classcss: "",
};
let pikAss = {
    value: 1,
    color: "",
    symbol: "",
    classcss: "",
};
//Karo Karten
let karoSieben = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let karoAcht = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let karoNeun = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let karoZehn = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let karoBube = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let karoDame = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let karoKoenig = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let karoAss = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
//Kreuz Karten
let kreuzSieben = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let kreuzAcht = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let kreuzNeun = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let kreuzZehn = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let kreuzBube = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let kreuzDame = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let kreuzKoenig = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let kreuzAss = {
    value: 7,
    color: "",
    symbol: "",
    classcss: "",
};
let handCards = [];
let stackCards = [];
let numCard = 0;
let ranNum;
function askPlayerForCards(numCard) {
    if (numCard == 0) {
        do {
            numCard = parseInt(prompt("Wie viele Karten möchtest du?"));
        } while (numCard > 1 && numCard < 32);
    }
    getRandomCards(numCard);
}
function getRandomCards(_numCard) {
    while (_numCard > 0) {
        randomNumber(ranNum); // Funktion für Randome Number
        handCards.push(cards.splice(ranNum, 1)[0]);
        console.log(handCards);
        _numCard--;
    }
    renderCards(handCards); //Funktion um die Divs zu erstellen
}
function randomNumber(_x) {
    let max = 32;
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
function displayRandomCards(html, oneCard) {
    let cardDiv = document.createElement('div');
    let div = `<div class="${oneCard.classcss}">
        <p>${oneCard.value}</p>
        <p>${oneCard.symbol}</p>
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