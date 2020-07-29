/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/
import { helpMe } from "./HTMLData";
//import {htmlData form "./HTMLData"}

let serverAddress: string = " x "; 
    //zunächst zwei Globale Variablen für den eingeloggten Nutzer und das Bild welches der Nutzer in der akltuelle Sitzung geöffnet hat. 
let globalUser: string = "X";
let globalPicture: string = " x";
document.addEventListener("DOMContentLoaded", init);

    //hier gehts los
function init(): void {
        alert("Please be adviced, that this website can be very slow from time to time. So please don't spam.");
        console.log("Loading Welcome Message");
        
        document.getElementById("htmlBox").innerHTML = " ";
       // document.getElementById("htmlBox").innerHTML = htmlData["welcomeMSG"];
        console.log(serverAddress, globalUser, globalPicture);
        helpMe();


     }



