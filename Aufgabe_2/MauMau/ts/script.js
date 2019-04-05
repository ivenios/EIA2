/*
Aufgabe: <Nummer und Titel der Aufgabe>
Name: <Ihr Name>
Matrikel: <Ihre Matrikelnummer>
Datum: <Datum der letzten Bearbeitung>
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
let cards = [];
{
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
        randomNumber(ranNum); // Funktion für 
        handCards.push(cards.splice(ranNum, 1)[0]);
        console.log(handCards);
        displayRandomCards(handCards); //Funktion um die Divs zu erstellen
        _numCard--;
    }
}
function randomNumber(_x) {
    let max = 32;
    _x = Math.floor(Math.random() * Math.floor(max));
    return ranNum = _x;
}
function displayRandomCards(_displayCards = []) {
}
//# sourceMappingURL=script.js.map