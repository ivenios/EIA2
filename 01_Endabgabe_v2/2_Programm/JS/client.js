"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
*/
const HTMLData_1 = require("./HTMLData");
//import {htmlData form "./HTMLData"}
let serverAddress = " x ";
//zunächst zwei Globale Variablen für den eingeloggten Nutzer und das Bild welches der Nutzer in der akltuelle Sitzung geöffnet hat. 
let globalUser = "X";
let globalPicture = " x";
document.addEventListener("DOMContentLoaded", init);
//hier gehts los
function init() {
    alert("Please be adviced, that this website can be very slow from time to time. So please don't spam.");
    console.log("Loading Welcome Message");
    document.getElementById("htmlBox").innerHTML = " ";
    // document.getElementById("htmlBox").innerHTML = htmlData["welcomeMSG"];
    console.log(serverAddress, globalUser, globalPicture);
    HTMLData_1.helpMe();
}
//# sourceMappingURL=client.js.map