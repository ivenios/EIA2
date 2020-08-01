/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/


namespace endabgabe2  {

//import {htmlData form "./HTMLData"}
let serverAddress: string = "https://ios-eia2.herokuapp.com"; 
    //zunächst zwei Globale Variablen für den eingeloggten Nutzer und das Bild welches der Nutzer in der akltuelle Sitzung geöffnet hat. 
export let globalUser: string;
export let globalPicture: string;

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
    globalUser += " ";
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
    if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {printError("Please fill in the form to create a new user"); return; }
    query += "&name=" + inputs[0].value;
    query += "&username=" + inputs[1].value;
    query += "&password=" + inputs[2].value;
    console.log(query);

    sendRequest(query, handleUserInsertResponse);
}


//Bei korrektem Login wird die Bild Übersicht geladen: 
function loadUserPictureOverview(): void {
    console.log("Bild Überischt wird geladen");
    globalPicture += " ";
    document.getElementById("htmlBox").innerHTML = " ";
    document.getElementById("htmlBox").innerHTML = htmlData["userPictureOverview"];
    console.log("loading Picture List");
    getUserPictures();
    document.getElementById("createNewPicture").addEventListener("click", loadNewCanvasScreen);
    document.getElementById("logOut").addEventListener("click", init);

}

//Server anfragen um die Liste der Nutzer Bilder zu bekommen: +
function getUserPictures(): void {
    let query: string = "command=loadPictureList";
    query += "&username=" + globalUser;
    console.log(query);
    sendRequest(query, handlePictureListeResponse);
    
}

//funktion die die Picture List schreibt 
function renderPictureList(_pictureListArray: string []): void {
    let htmlString: string = "";
    document.getElementById("pictureListhtml").innerHTML = " ";
    for (let i: number = 0; i < _pictureListArray.length; i++) {
        htmlString += `<div class="end-border-inset picList"  id="${_pictureListArray[i]}"> <p> ${_pictureListArray[i]} </p> </div>`;
    }
    document.getElementById("pictureListhtml").innerHTML = htmlString; //passende event listener werden auf die Buttons geschrieben 
    for (let i: number = 0; i < _pictureListArray.length; i++) {
        document.getElementById(_pictureListArray[i]).addEventListener("click", initRenderCanvas);
    }


}

//laden des Canvas erstellungs Panels
function loadNewCanvasScreen(): void {
    console.log("Loading New Canvas Panel");
    document.getElementById("htmlBox").innerHTML = " ";
    document.getElementById("htmlBox").innerHTML = htmlData["newPicturePanel"];
    document.getElementById("renderNewCanvas").addEventListener("click", createNewCanvas);
    document.getElementById("goBackToOverview").addEventListener("click", loadUserPictureOverview);

}

//Funktion zum abspeichern der Neuen Canvas
function createNewCanvas(): void {
    console.log("save new Canvas in Database");
    let re: string = "#";
    let query: string = "command=initiatePicture";
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    console.log(inputs);
    // Hashtag aus query string entfernen
    let canvasColor: string = inputs[3].value;
    canvasColor = canvasColor.replace(re, "%23");

    //query string wird gebaut:
    globalPicture += inputs[0].value;
    query += "&username=" + globalUser;
    query += "&pictureName=" + inputs[0].value;
    query += "&canvasX=" + inputs[1].value;
    query += "&canvasY=" + inputs[2].value;
    query += "&canvasColor=" + canvasColor;
    console.log(query);

    sendRequest(query, handleNewCanvasResponse);
}

//Funktionsstart, der das Laden einer bestehenden Canvas aus der Datenbank ermöglicht: 


function initRenderCanvas(event: Event): void {
    // hier muss abgefragt werden, auf welchen Button geklickt wurde
    console.log(event);
    document.getElementById("htmlBox").innerHTML = " ";
    console.log(event.target + " " + globalUser);
    document.getElementById("htmlBox").innerHTML = htmlData["mainCanvasPanel"];


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
//Funktion die das Array mit den Bildern eines Nutzers
function handlePictureListeResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        let pictureListArray: string [] = [];
        if (xhr.response == "PictureList Empty") {
            console.log("Loading create new Picture MSG"); //Funktion die dem Nutzer sagt, dass er noch kein Bild hat 
            document.getElementById("pictureListhtml").innerHTML = " ";
            document.getElementById("pictureListhtml").innerHTML = `<p> You dont have any pictures with this account. Start today by creating your first masterpiece </p> <hr> <button class="norm-button" id="createNewPicture">New Picture</button>`;
            document.getElementById("createNewPicture").addEventListener("click", loadNewCanvasScreen); //der Event Listerner muss neu installiert werden, damit der Button funktioniert 
        } else 
            // Funktion zum schreiben der ListeloadUserPictureOverview();
        console.log("Rendering Picture List");
        pictureListArray = JSON.parse(xhr.response);
        renderPictureList(pictureListArray);
    }
}

//Funktion die die Server Antwort nach dem ersten speichern einer Canvas übernimmt. 
function handleNewCanvasResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.response == "save postive") {
            initRenderCanvas();
            printError("Please wait while we prepare your canvas with liquid white.");
   
        } else if (xhr.response == "save negative") {
            printError("You already have a picture with this name! Please be more creative.");
            loadNewCanvasScreen();

            
        }
        
    }
}


}
