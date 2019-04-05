/*
Aufgabe: <Nummer und Titel der Aufgabe>
Name: <Ihr Name>
Matrikel: <Ihre Matrikelnummer>
Datum: <Datum der letzten Bearbeitung>
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

interface card {
    value: number;
    color: string;
    symbol: string;
    classcss:string;

}

let cards: card []=[]; 
    
    // Herz Karten
    let herzSieben: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let herzAcht: card = {
        value: 8,
        color: "",
        symbol: "",
        classcss:"",
    }
    let herzNeun: card = {
        value: 9,
        color: "",
        symbol: "",
        classcss:"",
    }
    let herzZehn: card = {
        value: 10,
        color: "",
        symbol: "",
        classcss:"",
    }
    let herzBube: card = {
        value: 11,
        color: "",
        symbol: "",
        classcss:"",
    }
    let herzDame: card = {
        value: 12,
        color: "",
        symbol: "",
        classcss:"",
    }
    let herzKoenig: card = {
        value: 13,
        color: "",
        symbol: "",
        classcss:"",
    }
    let herzAss: card = {
        value: 1,
        color: "",
        symbol: "",
        classcss:"",
    }

    // Pik Karten 
    let pikSieben: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let pikAcht: card = {
        value: 8,
        color: "",
        symbol: "",
        classcss:"",
    }
    let pikNeun: card = {
        value: 9,
        color: "",
        symbol: "",
        classcss:"",
    }
    let pikZehn: card = {
        value: 10,
        color: "",
        symbol: "",
        classcss:"",
    }
    let pikBube: card = {
        value: 11,
        color: "",
        symbol: "",
        classcss:"",
    }
    let pikDame: card = {
        value: 12,
        color: "",
        symbol: "",
        classcss:"",
    }
    let pikKoenig: card = {
        value: 13,
        color: "",
        symbol: "",
        classcss:"",
    }
    let pikAss: card = {
        value: 1,
        color: "",
        symbol: "",
        classcss:"",
    }

    //Karo Karten
    let karoSieben: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let karoAcht: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let karoNeun: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let karoZehn: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let karoBube: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let karoDame: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let karoKoenig: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let karoAss: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }

    //Kreuz Karten
    let kreuzSieben: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let kreuzAcht: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let kreuzNeun: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let kreuzZehn: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let kreuzBube: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let kreuzDame: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let kreuzKoenig: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }
    let kreuzAss: card = {
        value: 7,
        color: "",
        symbol: "",
        classcss:"",
    }

let handCards: card []=[];
let stackCards: card []=[];
let numCard: number = 0;
let ranNum: number;

function askPlayerForCards (numCard:number) {
    if (numCard==0) {
        do {
            numCard = parseInt(prompt("Wie viele Karten möchtest du?"))
        }
        while (numCard > 1 && numCard < 32)
    }
    getRandomCards(numCard)

}

function getRandomCards(_numCard:number){

    while(_numCard>0) {
        randomNumber(ranNum); // Funktion für Randome Number
        handCards.push(cards.splice(ranNum,1)[0]); 
        console.log(handCards);    
        _numCard--;
    }
    renderCards(handCards); //Funktion um die Divs zu erstellen
}

function randomNumber(_x:number){
    let max:number = 32;
    _x=Math.floor(Math.random() * Math.floor(max));
    return ranNum=_x;

}

function renderCards(handCards: card[]) {
    var m: number = 0;

    while (m < handCards.length) {
        displayRandomCards('html', handCards[m]);
        m++;
    }
}


function displayRandomCards(html: string, oneCard:card){
    let cardDiv = document.createElement('div');
    let div =`<div class="${oneCard.classcss}">
        <p>${oneCard.value}</p>
        <p>${oneCard.symbol}</p>
        </div>
    `;

    cardDiv.innerHTML = div;

    document.getElementById(html).appendChild(cardDiv);
    
}    

function init() {
    cards.push(herzSieben,herzAcht,herzNeun,herzZehn,herzBube,herzDame,herzKoenig,herzAss,pikSieben,pikAcht,pikNeun,pikZehn,pikBube,pikDame,pikKoenig,pikAss,karoSieben,karoAcht,karoNeun,karoZehn,karoBube,karoDame,karoKoenig,karoAss,kreuzSieben,kreuzAcht,kreuzNeun,kreuzZehn,kreuzBube,kreuzDame,kreuzKoenig,kreuzAss);
    askPlayerForCards(numCard);
}

document.addEventListener('DOMContentLoaded', init);