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
    family: string;

}

let cards: card []=[]; {
    
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
        randomNumber(ranNum); // Funktion für 
        handCards.push(cards.splice(ranNum,1)[0]); 
        console.log(handCards);    
        displayRandomCards(handCards);   //Funktion um die Divs zu erstellen
        _numCard--;
    }
    
}

function randomNumber(_x:number){
    let max:number = 32;
    _x=Math.floor(Math.random() * Math.floor(max));
    return ranNum=_x;

}

function displayRandomCards(_displayCards:card []=[]){


    
}    