/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
*/
var endabgabe2;
(function (endabgabe2) {
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
        document.getElementById("htmlBox").innerHTML = endabgabe2.htmlData["welcomeMSG"];
        document.getElementById("startMSPaint").addEventListener("click", initMSPaint);
    }
    //Laden des Login Panels
    function initMSPaint() {
        console.log("Loading Login Panel");
        globalUser += " ";
        document.getElementById("htmlBox").innerHTML = " ";
        document.getElementById("htmlBox").innerHTML = endabgabe2.htmlData["loginPanel"];
        document.getElementById("userIsNew").addEventListener("click", newUserInit); //Handler für das Laden des neuen Nutzer Panels 
        document.getElementById("userLogin").addEventListener("click", loginUser); //Handler für Abschicken des Logins
    }
    //User Login Funkton
    function loginUser() {
        let query = "command=loginUser";
        let inputs = document.getElementsByTagName("input");
        console.log(inputs);
        globalUser = inputs[0].value;
        if (inputs[0].value == "" || inputs[1].value == "") {
            printError("");
            return;
        }
        query += "&username=" + inputs[0].value;
        query += "&password=" + inputs[1].value;
        console.log(query);
        sendRequest(query, handleLoginResponse);
    }
    //Neuen Nutzeranlegen Panel wird geladen
    function newUserInit() {
        console.log("Loading New User Panel");
        document.getElementById("htmlBox").innerHTML = " ";
        document.getElementById("htmlBox").innerHTML = endabgabe2.htmlData["registerPanel"];
        document.getElementById("createNewUser").addEventListener("click", saveNewUser);
        document.getElementById("goBack").addEventListener("click", initMSPaint);
    }
    //Neue Nutzer Daten an Server senden 
    function saveNewUser() {
        let query = "command=registerUser";
        let inputs = document.getElementsByTagName("input");
        console.log(inputs);
        if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
            printError("Please fill in the form to create a new user");
            return;
        }
        query += "&name=" + inputs[0].value;
        query += "&username=" + inputs[1].value;
        query += "&password=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleUserInsertResponse);
    }
    //Bei korrektem Login wird die Bild Übersicht geladen: 
    function loadUserPictureOverview() {
        console.log("Bild Überischt wird geladen");
        globalPicture += " ";
        document.getElementById("htmlBox").innerHTML = " ";
        document.getElementById("htmlBox").innerHTML = endabgabe2.htmlData["userPictureOverview"];
        console.log("loading Picture List");
        getUserPictures();
        document.getElementById("createNewPicture").addEventListener("click", loadNewCanvasScreen);
        document.getElementById("logOut").addEventListener("click", init);
    }
    //Server anfragen um die Liste der Nutzer Bilder zu bekommen: +
    function getUserPictures() {
        let query = "command=loadPictureList";
        query += "&username=" + globalUser;
        sendRequest(query, handlePictureListeResponse);
    }
    //laden des Canvas erstellungs Panels
    function loadNewCanvasScreen() {
        console.log("Loading New Canvas Panel");
        document.getElementById("htmlBox").innerHTML = " ";
        document.getElementById("htmlBox").innerHTML = endabgabe2.htmlData["newPicturePanel"];
        document.getElementById("renderNewCanvas").addEventListener("click", createNewCanvas);
        document.getElementById("goBackToOverview").addEventListener("click", loadUserPictureOverview);
    }
    //Funktion zum abspeichern der Neuen Canvas
    function createNewCanvas() {
        console.log("save new Canvas in Database");
        let query = "command=initiatePicture";
        let inputs = document.getElementsByTagName("input");
        console.log(inputs);
        // Hashtag aus query string entfernen
        let canvasColor = inputs[3].value;
        alert(hexToRGB(canvasColor));
        //query string wird gebaut:
        globalPicture += inputs[0].value;
        query += "&username=" + globalUser;
        query += "&pictureName=" + inputs[0].value;
        query += "&canvasX=" + inputs[1].value;
        query += "&canvasY=" + inputs[2].value;
        query += canvasColor;
        console.log(query);
        sendRequest(query, handleNewCanvasResponse);
    }
    //Funktion die den HexCode in RGB umwandelt:
    function hexToRGB(h) {
        let r = "0";
        let g = "0";
        let b = "0";
        // 3 digits
        if (h.length == 4) {
            r = "0x" + h[1] + h[1];
            g = "0x" + h[2] + h[2];
            b = "0x" + h[3] + h[3];
            // 6 digits
        }
        else if (h.length == 7) {
            r = "0x" + h[1] + h[2];
            g = "0x" + h[3] + h[4];
            b = "0x" + h[5] + h[6];
        }
        console.log("rgb(" + r + "," + g + "," + b + ")");
    }
    //Darstellung der Error Messages
    function printError(_message) {
        //zwischenlösung:
        alert(_message);
        return;
    }
    //ALLES SERVER RELATED: 
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    //Verarbeitung der Nutzer Insters Antwort
    function handleUserInsertResponse(_event) {
        let xhr = _event.target;
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
    function handleLoginResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.response == "Login information correct") {
                console.log("Login completed");
                loadUserPictureOverview();
            }
            else if (xhr.response == "Login information faulty") {
                alert("User or Password incorrect");
                initMSPaint(); //jeder hasst es, wenn man sich vertippt hat muss man alles neu eingeben hihihi
            }
        }
    }
    //Funktion die das Array mit den Bildern eines Nutzers
    function handlePictureListeResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let pictureListArray = JSON.parse(xhr.response);
        }
    }
    //Funktion die die Server Antwort nach dem ersten speichern einer Canvas übernimmt. 
    function handleNewCanvasResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.response == "save postive") {
                printError("Please wait while we prepare your canvas with liquid white.");
            }
            else if (xhr.response == "save negative") {
                printError("You already have a picture with this name! Please be more creative.");
            }
        }
    }
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=client.js.map