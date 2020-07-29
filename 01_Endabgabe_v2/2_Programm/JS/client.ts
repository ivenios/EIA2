/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/
import { helpMe } from "./HTMLData";
//import {htmlData form "./HTMLData"}

let serverAddress: string = "https://ios-eia2.herokuapp.com"; 
    //zunächst zwei Globale Variablen für den eingeloggten Nutzer und das Bild welches der Nutzer in der akltuelle Sitzung geöffnet hat. 
let globalUser: string;
let globalPicture: string;
document.addEventListener("DOMContentLoaded", init);

    //hier gehts los
function init(): void {
        alert("Please be adviced, that this website can be very slow from time to time. So please don't spam.");
        console.log("Loading Welcome Message");
        
        document.getElementById("htmlBox").innerHTML = " ";
       // document.getElementById("htmlBox").innerHTML = htmlData["welcomeMSG"];
        console.log(serverAddress, globalUser, globalPicture);
        document.getElementById("startMSPaint").addEventListener("click", initMSPaint);
        helpMe();
     }

function initMSPaint(): void {
    console.log("Loading Login Panel");
    document.getElementById("htmlBox").innerHTML = " ";
    //document.getElementById("htmlBox").innerHTML = htmlData["loginPanel"];
    document.getElementById("userIsNew").addEventListener("click", newUserInit); //Handler für das Laden des neuen Nutzer Panels 
    document.getElementById("userLogin").addEventListener("click", loginUser); //Handler für Abschicken des Logins
}

function newUserInit(): void {
    console.log("Loading New User Panel");
    document.getElementById("htmlBox").innerHTML = " ";
    //document.getElementById("htmlBox").innerHTML = htmlData["registerPanel"];

}

function loginUser(): void {
    //Form abgreifen in url String an Server senden 

}

