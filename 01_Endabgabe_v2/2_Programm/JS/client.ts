/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/

namespace endabgabe2 {

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
        document.getElementById("htmlBox").innerHTML = htmlData["welcomeMSG"];
        document.getElementById("startMSPaint").addEventListener("click", initMSPaint);
     }

     //Laden des Login Panels
function initMSPaint(): void {
    console.log("Loading Login Panel");
    document.getElementById("htmlBox").innerHTML = " ";
    document.getElementById("htmlBox").innerHTML = htmlData["loginPanel"];
    document.getElementById("userIsNew").addEventListener("click", newUserInit); //Handler für das Laden des neuen Nutzer Panels 
    document.getElementById("userLogin").addEventListener("click", loginUser); //Handler für Abschicken des Logins

    
}

//User Login Funkton
function loginUser(): void {
    let query: string = "command=loginUser";
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    console.log(inputs);
    globalUser = inputs[0].value;
    if (inputs[0].value == "" || inputs[1].value == "") {printError(""); return; }
    query += "&username=" + inputs[0].value;
    query += "&password=" + inputs[1].value;
    console.log(query);
    
    sendRequest(query, handleLoginResponse);
}
//Neuen Nutzeranlegen Panel wird geladen
function newUserInit(): void {
    console.log("Loading New User Panel");
    document.getElementById("htmlBox").innerHTML = " ";
    document.getElementById("htmlBox").innerHTML = htmlData["registerPanel"];
    document.getElementById("createNewUser").addEventListener("click", saveNewUser);
    document.getElementById("goBack").addEventListener("click", initMSPaint);
}

//Neue Nutzer Daten an Server senden 
function saveNewUser(): void {
    let query: string = "command=registerUser";
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    console.log(inputs);
    if (inputs[0].value == "" || inputs[1].value == "") {printError("Please fill in the form to create a new user"); return; }
    query += "&username=" + inputs[0].value;
    query += "&password=" + inputs[1].value;
    console.log(query);

    sendRequest(query, handleUserInsertResponse);
    

}




//Bei Correctem Login wird die Bild Übersicht geladen: 
function loadUserPictureOverview(): void {
    console.log("Bild Überischt wird geladen");
    document.getElementById("htmlBox").innerHTML = " ";
    document.getElementById("htmlBox").innerHTML = htmlData["userPictureOverview"];
    console.log("loading Picture List");
    getUserPictures();


}

//Server anfragen um die Liste der Nutzer Bilder zu bekommen: +
function getUserPictures(): void {
    let query: string = "command=loadPictureList";
    query += "&username=" + globalUser;

    sendRequest(query, handlePictureListeResponse);

}



//Darstellung der Error Messages
function printError(_message: string): void {
    //zwischenlösung:
    alert(_message);
    return;
}


//ALLES SERVER RELATED: 

function sendRequest(_query: string, _callback: EventListener): void {
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.open("GET", serverAddress + "?" + _query, true);
    xhr.addEventListener("readystatechange", _callback);
    xhr.send();
}
    //Verarbeitung der Nutzer Insters Antwort
function handleUserInsertResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.response == "User Taken") {
            printError("This Username is  already taken. Plase choose another one");
            newUserInit();
        }
        else if (xhr.response == "User insert successfull") {
                 printError("Greate your Username ist being processed. Please login with your new User");
                 initMSPaint(); //damit das Login Fenster nach der Speicherung angezeigt wird.
    }
    }
}
    //Verarbeitung der Login Antwort der Datenbank
function handleLoginResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.response == "Login information correct") {
            console.log("Login completed");
            loadUserPictureOverview();
        } else if (xhr.response == "Login information faulty") {
            alert("User or Password incorrect");
            initMSPaint(); //jeder hasst es, wenn man sich vertippt hat muss man alles neu eingeben hihihi
        }
        
    }
}
function handlePictureListeResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        let pictureListArray: UserData [] = JSON.parse(xhr.response);



    }
}



}
