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
let serverAddress = "https://ios-eia2.herokuapp.com";
//zunächst zwei Globale Variablen für den eingeloggten Nutzer und das Bild welches der Nutzer in der akltuelle Sitzung geöffnet hat. 
let globalUser;
let globalPicture;
document.addEventListener("DOMContentLoaded", init);
//hier gehts los
function init() {
    alert("Please be adviced, that this website can be very slow from time to time. So please don't spam.");
    console.log("Loading Welcome Message");
    document.getElementById("htmlBox").innerHTML = " ";
    // document.getElementById("htmlBox").innerHTML = htmlData["welcomeMSG"];
    console.log(serverAddress, globalUser, globalPicture);
    document.getElementById("startMSPaint").addEventListener("click", initMSPaint);
    HTMLData_1.helpMe();
}
function initMSPaint() {
    console.log("Loading Login Panel");
    document.getElementById("htmlBox").innerHTML = " ";
    //document.getElementById("htmlBox").innerHTML = htmlData["loginPanel"];
    document.getElementById("userIsNew").addEventListener("click", newUserInit); //Handler für das Laden des neuen Nutzer Panels 
    document.getElementById("userLogin").addEventListener("click", loginUser); //Handler für Abschicken des Logins
}
function newUserInit() {
    console.log("Loading New User Panel");
    document.getElementById("htmlBox").innerHTML = " ";
    //document.getElementById("htmlBox").innerHTML = htmlData["registerPanel"];
}
function loginUser() {
    let query = "command=loginUser";
    //Form abgreifen in url String an Server senden 
    //globalUser=formdata;
    //
    sendRequest(query, handleLoginResponse);
}
//ALLES SERVER RELATED: 
function sendRequest(_query, _callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", serverAddress + "?" + _query, true);
    xhr.addEventListener("readystatechange", _callback);
    xhr.send();
}
//Verarbeitung der Nutzer Insters Antwort
function handleInsertResponse(_event) {
    let xhr = _event.target;
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.response);
        initMSPaint(); //damit das Login Fenster nach der Speicherung angezeigt wird.
    }
}
//Verarbeitung der Login Antwort der Datenbank
function handleLoginResponse(_event) {
    let xhr = _event.target;
    if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.response == "Login information correct") {
            console.log("Login completed");
            //  XXX(); hier geht es dann weiter mit der Bild Überischt
        }
        else if (xhr.response == "Login information faulty") {
            alert("XXX");
            initMSPaint(); //jeder hasst es, wenn man sich vertippt hat muss man alles neu eingeben hihihi
        }
    }
}
//# sourceMappingURL=client.js.map