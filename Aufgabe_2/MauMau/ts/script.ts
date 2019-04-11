/*
Aufgabe: Aufgabe 2 Mau Mau 
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 07.04.19
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace MauMau {
    //funktionen die zubeginn ausgeführt werden müssen
    document.addEventListener('DOMContentLoaded', init); //rest der Funktion 
    document.addEventListener('DOMContentLoaded', addListeners); //eventlisteners 

interface Card {
    value: number;
    renderValue:string;
    color: string;
    symbol: string;
    classcss: string;

}

let cards: Card[] = [];

// Herz Karten
let herzSieben: Card = {
    value: 7,
    renderValue:"Sieben",
    color: "Rot",
    symbol: "♥",
    classcss: "CardRed",
}
let herzAcht: Card = {
    value: 8,
    renderValue:"Acht",
    color: "Rot",
    symbol: "♥",
    classcss: "CardRed",
}
let herzNeun: Card = {
    value: 9,
    renderValue:"Neun",
    color: "Rot",
    symbol: "♥",
    classcss: "CardRed",
}
let herzZehn: Card = {
    value: 10,
    renderValue:"Zehn",
    color: "Rot",
    symbol: "♥",
    classcss: "CardRed",
}
let herzBube: Card = {
    value: 11,
    renderValue:"Bube",
    color: "",
    symbol: "♥",
    classcss: "CardRed",
}
let herzDame: Card = {
    value: 12,
    renderValue:"Dame",
    color: "Rot",
    symbol: "♥",
    classcss: "CardRed",
}
let herzKoenig: Card = {
    value: 13,
    renderValue:"König",
    color: "Rot",
    symbol: "♥",
    classcss: "CardRed",
}
let herzAss: Card = {
    value: 1,
    renderValue:"Ass",
    color: "Rot",
    symbol: "♥",
    classcss: "CardRed",
}

// Pik Karten 
let pikSieben: Card = {
    value: 7,
    renderValue:"Sieben",
    color: "Schwarz",
    symbol: "♠",
    classcss: "CardSchwarz",
}
let pikAcht: Card = {
    value: 8,
    renderValue:"Acht",
    color: "Schwarz",
    symbol: "♠",
    classcss: "CardSchwarz",
}
let pikNeun: Card = {
    value: 9,
    renderValue:"Neun",
    color: "Schwarz",
    symbol: "♠",
    classcss: "CardSchwarz",
}
let pikZehn: Card = {
    value: 10,
    renderValue:"Zehn",
    color: "Schwarz",
    symbol: "♠",
    classcss: "CardSchwarz",
}
let pikBube: Card = {
    value: 11,
    renderValue:"Bube",
    color: "Schwarz",
    symbol: "♠",
    classcss: "CardSchwarz",
}
let pikDame: Card = {
    value: 12,
    renderValue:"Dame",
    color: "Schwarz",
    symbol: "♠",
    classcss: "CardSchwarz",
}
let pikKoenig: Card = {
    value: 13,
    renderValue:"König",
    color: "Schwarz",
    symbol: "♠",
    classcss: "CardSchwarz",
}
let pikAss: Card = {
    value: 1,
    renderValue:"Ass",
    color: "Schwarz",
    symbol: "♠",
    classcss: "CardSchwarz",
}

//Karo Karten
let karoSieben: Card = {
    value: 7,
    renderValue:"Sieben",
    color: "Rot",
    symbol: "♦",
    classcss: "CardRed",
}
let karoAcht: Card = {
    value: 8,
    renderValue:"Acht",
    color: "Rot",
    symbol: "♦",
    classcss: "CardRed",
}
let karoNeun: Card = {
    value: 9,
    renderValue:"Neun",
    color: "Rot",
    symbol: "♦",
    classcss: "CardRed",
}
let karoZehn: Card = {
    value: 10,
    renderValue:"Zehn",
    color: "Rot",
    symbol: "♦",
    classcss: "CardRed",
}
let karoBube: Card = {
    value: 11,
    renderValue:"Bube",
    color: "Rot",
    symbol: "♦",
    classcss: "CardRed",
}
let karoDame: Card = {
    value: 12,
    renderValue:"Dame",
    color: "Rot",
    symbol: "♦",
    classcss: "CardRed",
}
let karoKoenig: Card = {
    value: 13,
    renderValue:"König",
    color: "Rot",
    symbol: "♦",
    classcss: "CardRed",
}
let karoAss: Card = {
    value: 1,
    renderValue:"Ass",
    color: "Rot",
    symbol: "♦",
    classcss: "CardRed",
}

//Kreuz Karten
let kreuzSieben: Card = {
    value: 7,
    renderValue:"Sieben",
    color: "Schwarz",
    symbol: "♣",
    classcss: "CardSchwarz",
}
let kreuzAcht: Card = {
    value: 8,
    renderValue:"Acht",
    color: "Schwarz",
    symbol: "♣",
    classcss: "CardSchwarz",
}
let kreuzNeun: Card = {
    value: 9,
    renderValue:"Neun",
    color: "Schwarz",
    symbol: "♣",
    classcss: "CardSchwarz",
}
let kreuzZehn: Card = {
    value: 10,
    renderValue:"Zehn",
    color: "Schwarz",
    symbol: "♣",
    classcss: "CardSchwarz",
}
let kreuzBube: Card = {
    value: 11,
    renderValue:"Bube",
    color: "Schwarz",
    symbol: "♣",
    classcss: "CardSchwarz",
}
let kreuzDame: Card = {
    value: 12,
    renderValue:"Dame",
    color: "Schwarz",
    symbol: "♣",
    classcss: "CardSchwarz",
}
let kreuzKoenig: Card = {
    value: 13,
    renderValue:"König",
    color: "Schwarz",
    symbol: "♣",
    classcss: "CardSchwarz",
}
let kreuzAss: Card = {
    value: 1,
    renderValue:"Ass",
    color: "Schwarz",
    symbol: "♣",
    classcss: "CardSchwarz",
}

let handCards: Card[] = [];
let stackCards: Card[] = [];
let numCard: number = 0;
let ranNum: number;

function addListeners(){
    document.getElementById("zieheKarte").addEventListener('click',drawCard);
    document.addEventListener("keydown", event => { //abfrage ob die leertaste (32) auch gedrückt wird, wenn nicht, dann passiert nichts 
        console.log(event);
        if (event.keyCode == 32){
            drawCard();
        }
        else { //wenn falsch, wird nicht ausgeführt
            return;
        }
    });
    document.getElementById("html").addEventListener('click',layCard); //wie kommen wir an den eigentlichen wert der Karte ??
    document.getElementById("butt").addEventListener('click',sortCards);
    return;

}

function drawCard():void {
    console.log("test");
    randomNumber(handCards.length);
    handCards.push(cards.splice(ranNum,1)[0]);
    renderCards(handCards);

}

function layCard(){
    console.log("test2");
}

function sortCards(){
    console.log("test3");
}


function howManyCards(numCard:number):void{
    if(numCard==0){
        do {
            numCard=parseInt(prompt("Mit wie viele Karten möchtest du spielen?", "..."));
        }while (isNaN(numCard)|| numCard<1 || numCard>32);
    }   
    getRandomCards(numCard); 
}




function getRandomCards(_numCard: number): void {

    while (_numCard > 0) {
        randomNumber(cards.length); // Funktion für Randome Number
        handCards.push(cards.splice(ranNum, 1)[0]);
        console.log(handCards);
        _numCard--;
    }
    renderCards(handCards); //Funktion um die Divs zu erstellen
}

function randomNumber(_y:number) {
    let _x:number;
    let max: number = _y;
    _x = Math.floor(Math.random() * Math.floor(max));
    return ranNum = _x;

}

function renderCards(_handCards: Card[]): void {
    let m: number = 0;

    while (m < handCards.length) {
        displayRandomCards('html', handCards[m]);
        m++;
    }

}

function displayRandomCards(_html: string, _handCards: Card): void {
    let cardDiv = document.createElement('div');
    let div = `<div class="${_handCards.classcss}">
        <p>${_handCards.renderValue}</p>
        <p class="symbol">${_handCards.symbol}</p>
        </div>
    `;

    cardDiv.innerHTML = div;

    document.getElementById(_html).appendChild(cardDiv);
}
function renderStapelz(_stapel: string):void {
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




}