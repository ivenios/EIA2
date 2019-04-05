/*
Aufgabe: <Nummer und Titel der Aufgabe>
Name: <Ihr Name>
Matrikel: <Ihre Matrikelnummer>
Datum: <Datum der letzten Bearbeitung>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
let cards = [];
{
    let;
}
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
    askPlayerForCards(numCard);
}
document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=script.js.map