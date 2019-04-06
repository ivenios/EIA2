/*
Aufgabe: Aufgabe 2 Mau Mau 
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 07.04.19
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

interface card {
    value: number;
    color: string;
    symbol: string;
    classcss: string;

}

let cards: card[] = [];

// Herz Karten
let herzSieben: card = {
    value: 7,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
}
let herzAcht: card = {
    value: 8,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
}
let herzNeun: card = {
    value: 9,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
}
let herzZehn: card = {
    value: 10,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
}
let herzBube: card = {
    value: 11,
    color: "",
    symbol: "♥",
    classcss: "cardRed",
}
let herzDame: card = {
    value: 12,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
}
let herzKoenig: card = {
    value: 13,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
}
let herzAss: card = {
    value: 1,
    color: "Rot",
    symbol: "♥",
    classcss: "cardRed",
}

// Pik Karten 
let pikSieben: card = {
    value: 7,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
}
let pikAcht: card = {
    value: 8,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
}
let pikNeun: card = {
    value: 9,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
}
let pikZehn: card = {
    value: 10,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
}
let pikBube: card = {
    value: 11,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
}
let pikDame: card = {
    value: 12,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
}
let pikKoenig: card = {
    value: 13,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
}
let pikAss: card = {
    value: 1,
    color: "Schwarz",
    symbol: "♠",
    classcss: "cardSchwarz",
}

//Karo Karten
let karoSieben: card = {
    value: 7,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
}
let karoAcht: card = {
    value: 8,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
}
let karoNeun: card = {
    value: 9,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
}
let karoZehn: card = {
    value: 10,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
}
let karoBube: card = {
    value: 11,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
}
let karoDame: card = {
    value: 12,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
}
let karoKoenig: card = {
    value: 13,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
}
let karoAss: card = {
    value: 1,
    color: "Rot",
    symbol: "♦",
    classcss: "cardRed",
}

//Kreuz Karten
let kreuzSieben: card = {
    value: 7,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
}
let kreuzAcht: card = {
    value: 8,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
}
let kreuzNeun: card = {
    value: 9,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
}
let kreuzZehn: card = {
    value: 10,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
}
let kreuzBube: card = {
    value: 11,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
}
let kreuzDame: card = {
    value: 12,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
}
let kreuzKoenig: card = {
    value: 13,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
}
let kreuzAss: card = {
    value: 1,
    color: "Schwarz",
    symbol: "♣",
    classcss: "cardSchwarz",
}

let handCards: card[] = [];
let stackCards: card[] = [];
let numCard: number = 0;
let ranNum: number;

function askPlayerForCards(numCard: number): void {
    if (numCard == 0) {
        do {
            numCard = parseInt(prompt("Wie viele Karten möchtest du?"))
        }
        while (numCard == 0 || numCard < 1 || numCard > 32)
    }
    getRandomCards(numCard);

}

function getRandomCards(_numCard: number): void {

    while (_numCard > 0) {
        randomNumber(ranNum, _numCard); // Funktion für Randome Number
        handCards.push(cards.splice(ranNum, 1)[0]);
        console.log(handCards);
        _numCard--;
    }
    renderCards(handCards); //Funktion um die Divs zu erstellen
}

function randomNumber(_x: number, _y: number) {
    let max: number = cards.length;
    _x = Math.floor(Math.random() * Math.floor(max));
    return ranNum = _x;

}

function renderCards(handCards: card[]): void {
    let m: number = 0;

    while (m < handCards.length) {
        displayRandomCards('html', handCards[m]);
        m++;
    }

}

function displayRandomCards(html: string, handCards: card) {
    let cardDiv = document.createElement('div');
    let div = `<div class="${handCards.classcss}">
        <p>${handCards.value}</p>
        <p class="symbol">${handCards.symbol}</p>
        </div>
    `;

    cardDiv.innerHTML = div;

    document.getElementById(html).appendChild(cardDiv);
    return;
}
function renderStapelz(stapel: string):void {
    let stapelzDiv = document.createElement('div');
    let div = `<div class="masterStapel">
         <img src="./KartenMuster.jpg" alt="" height="280px" width="200px"srcset="">
        </div>
        <div class="ablegeStapel" >

        </div>
    `;
    stapelzDiv.innerHTML = div;
    document.getElementById(stapel).appendChild(stapelzDiv);


}


function init() {
    renderStapelz('stapel');
    cards.push(herzSieben, herzAcht, herzNeun, herzZehn, herzBube, herzDame, herzKoenig, herzAss, pikSieben, pikAcht, pikNeun, pikZehn, pikBube, pikDame, pikKoenig, pikAss, karoSieben, karoAcht, karoNeun, karoZehn, karoBube, karoDame, karoKoenig, karoAss, kreuzSieben, kreuzAcht, kreuzNeun, kreuzZehn, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss);
    askPlayerForCards(numCard);

}

document.addEventListener('DOMContentLoaded', init);