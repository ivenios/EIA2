var hfuChat;
(function (hfuChat) {
    //zuerst die dynamischen HTML Elemente,Vielleicht später noch in externe Datein Packen !!!
    let serverAddress = "https://ios-eia2.herokuapp.com";
    let globalUser;
    let globalChat;
    let htmlData = {
        "Login": `
        <div class="login">
            <h1 class="head-title">Login</h1>
            <div class="uid">
                
                <input type="text" placeholder="Benutzername" required>
            </div>
            <div class="pwd">
                
                <input type="password" placeholder="Passwort" required >
            </div>
            <button id="loginUserButton">Login</button>
            <button id="registerButton">Neuer User</button> </div> `,
        "Register": ` <div class="register">
        <h1 class="head-title">Register</h1>
        <p> Bitte trage die unten erforderlichen Daten ein. Beim Passwort aber keines was du schon einmal verwendet hattest. 
        Sicherheit steht bei uns an letzter Stelle. Wir bitten um dein Verständnis. </p>
        <div class="uid">
            <input type="text" name="" placeholder="Benutzername" required >
        </div>
        <div class="mobile">
            <input type="text" name="" placeholder="Telefonnummer">
        </div>
        <div class="pwd">
            <input type="password"  name="" placeholder="Dein Passwort" required >
        </div>			
        <div class="c-pwd">
            <input type="password" name=""  placeholder="Wiederhole dein Passwort" required >
        </div>
        <div class="gender">
            <input id="male" type="radio" name="customer[gender]">
            <label for="male">Männlich</label>
            <input id="female" type="radio" name="customer[gender]">
            <label  for="female">Weiblich</label>
            <input id="divers" type="radio" name="customer[gender]">
            <label  for="divers">Divers</label>
        </div>
        <button id="saveNewUserButton">Daten Speichern</button>
        <button id="exitRegisterButton">Abbrechen</button>
    </div>`,
        "Login Error": "Passwort und/oder Benutzernamen sind falsch.",
        "Login Error stupid": "Wie es scheint, hast du eine der beiden Login Angaben vergessen",
        "Register Error PW": "Bitte Überprüfe dein eingegebenes Passwort.",
        "Register Error no User": "Bitte gib einen originellen Nutzernamen an.",
        "Register Error User Twice": "Bitte suche dir einen anderen Nutzernamen, er ist bereits vergeben.",
        "Chatroom Choice": `<div class="login">
            <h1 class="head-title">Chat-Rooms</h1>
            <button id="Chat1">EIA Issue - Chatroom</button> 
            <button id="Chat2">Lets Meet - Chatroom</button>
            <button id="Chat3">Einsame Seelen - Chatroom</button>
            <button id="Chat4">Musikalisches Wunderland - Chatroom</button>
            <button id="Chat5">Beer with me - Chatroom</button>
            <p>Aus zeitlichen und budget Gründen, gibt es leider nicht die Möglichkeit eigene Chaträume zu erstellen.</p>
            </div>`,
        "Chatroom Interface": `<div class="login">
                <button id="backRooms">Chatrooms</button> <button id="logout"> Logout </button>
                <div id="Chat"> </div>
                <div class="uid">
                    <input type="text" name="" placeholder="Schreibe eine Nachricht" required > <button id="sendMSG"> Senden </button>
                </div>

            
            
            </div>`
    };
    document.addEventListener("DOMContentLoaded", init);
    //LOGIN FENSTER DARSTELLEN  
    function init() {
        console.log("Loading Login");
        document.getElementById("htmlBox").innerHTML = htmlData["Login"];
        //hier kommen alle EventListener die jemals gebraucht werden. Problem dabei, könnte sein, dass manche der Inhaltenoch nicht geladen sind, deswegen muss ich da mal aufpassen
        document.getElementById("registerButton").addEventListener("click", registerNewUser);
        document.getElementById("loginUserButton").addEventListener("click", loginUser);
    }
    //REGISTRIER FENSTER DARSTELLEN
    function registerNewUser() {
        console.log("loading Register Menu");
        document.getElementById("htmlBox").innerHTML = " ";
        document.getElementById("htmlBox").innerHTML = htmlData["Register"];
        //EventListener für die jeweiligen neuen Buttons
        document.getElementById("exitRegisterButton").addEventListener("click", init);
        document.getElementById("saveNewUserButton").addEventListener("click", saveNewUser);
    }
    //NEUEN USER SPEICHERN
    function saveNewUser() {
        console.log("New User will be checked and safed to Database");
        let inputs = document.getElementsByTagName("input");
        let query = "command=newUser";
        console.log(inputs);
        if (inputs[0].value == "") {
            printError(htmlData["Register Error no User"]);
            return;
        }
        query += "&username=" + inputs[0].value;
        query += "&telenum=" + inputs[1].value;
        if (inputs[2].value != inputs[3].value) {
            printError(htmlData["Register Error PW"]);
            return;
        }
        else {
            query += "&pwd=" + inputs[2].value;
        }
        if (inputs[4].checked == true) {
            query += "&gender=" + inputs[4].id;
        }
        if (inputs[5].checked == true) {
            query += "&gender=" + inputs[5].id;
        }
        if (inputs[6].checked == true) {
            query += "&gender=" + inputs[6].id;
        }
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    //LOGIN FÜR DEN USER
    function loginUser() {
        console.log("User Data will be checked, if correct Chat will be displayed");
        let inputs = document.getElementsByTagName("input");
        let query = "command=login";
        globalUser = inputs[0].value;
        console.log(inputs);
        if (inputs[0].value == "" || inputs[1].value == "") {
            printError(htmlData["Login Error stupid"]);
            return;
        }
        query += "&username=" + inputs[0].value;
        query += "&password=" + inputs[1].value;
        console.log(query);
        sendRequest(query, handleLoginResponse);
    }
    function printError(_Array) {
        alert(_Array);
    }
    // AUSWAHL DER CHATROOMS: 
    function chatroomChoiceRender() {
        console.log("Chatroom Choice loading");
        document.getElementById("htmlBox").innerHTML = " ";
        document.getElementById("htmlBox").innerHTML = htmlData["Chatroom Choice"];
        //wieder einmal die EventListerner:
        document.getElementById("Chat1").addEventListener("click", loadingChatroom);
        document.getElementById("Chat2").addEventListener("click", loadingChatroom);
        document.getElementById("Chat3").addEventListener("click", loadingChatroom);
        document.getElementById("Chat4").addEventListener("click", loadingChatroom);
        document.getElementById("Chat5").addEventListener("click", loadingChatroom);
    }
    function loadingChatroom(_event) {
        let query = "command=loadChatroom";
        //switch abfrage welcher Button wurde gedrückt und jenachdem wird der query string angepasst.
        switch (_event.target.id) {
            case "Chat1":
                console.log("Chat1 will be loaded");
                alert("Hallo " + globalUser + " Du wirst 'sicher' in den Chatraum eingeloggt");
                query += "&chatroom=" + "Chat1";
                query += "&username=" + globalUser;
                globalChat = "Chat1";
                break;
            case "Chat2":
                console.log("Chat2 will be loaded");
                alert("Hallo " + globalUser + " Du wirst 'sicher' in den Chatraum eingeloggt");
                query += "&chatroom=" + "Chat2";
                query += "&username=" + globalUser;
                globalChat = "Chat2";
                break;
            case "Chat3":
                console.log("Chat3 will be loaded");
                alert("Hallo " + globalUser + " Du wirst 'sicher' in den Chatraum eingeloggt");
                query += "&chatroom=" + "Chat3";
                query += "&username=" + globalUser;
                globalChat = "Chat3";
                break;
            case "Chat4":
                console.log("Chat4 will be loaded");
                alert("Hallo " + globalUser + " Du wirst 'sicher' in den Chatraum eingeloggt");
                query += "&chatroom=" + "Chat4";
                query += "&username=" + globalUser;
                globalChat = "Chat4";
            case "Chat5":
                console.log("Chat5 will be loaded");
                alert("Hallo " + globalUser + " Du wirst 'sicher' in den Chatraum eingeloggt");
                query += "&chatroom=" + "Chat5";
                query += "&username=" + globalUser;
                globalChat = "Chat5";
                break;
            default: alert("Vergewissere dich, dass du einen Chatraum gewählt hast.");
        }
        console.log(query);
        sendRequest(query, handleChatroomResponse);
    }
    // LADEN UND FUNKTIONEN DES CHAT INTERFACES
    function renderChatInterface() {
        document.getElementById("htmlBox").innerHTML = " ";
        document.getElementById("htmlBox").innerHTML = htmlData["Chatroom Interface"];
        document.getElementById("backRooms").addEventListener("click", chatroomChoiceRender);
        document.getElementById("logout").addEventListener("click", init);
        document.getElementById("sendMSG").addEventListener("click", sendMessage);
    }
    function sendMessage() {
        //Nachrichten Sende Zeit 
        let dateNew = new Date();
        let utcDate = dateNew.toUTCString();
        console.log(utcDate);
        let query = "command=sendingMSG";
        console.log("New Message will be sent and displayed");
        let inputs = document.getElementsByTagName("input");
        if (inputs[0].value == "") {
            alert("Bitte gebe eine Nachricht ein!");
            return;
        }
        else {
            query += "&msg=" + inputs[0].value;
            query += "&user=" + globalUser;
            query += "&time=" + utcDate;
            query += "&chatroom=" + globalChat;
        }
        console.log(query);
        sendRequest(query, handleMSGSendResponse);
        refresh();
    }
    function refresh() {
        let query = "command=refresh";
        query += "&chatroom" + globalChat;
        query += "&username=" + globalUser;
        console.log(query);
        sendRequest(query, handleChatroomResponse); //da die Funktion schomn durchgeht, kann ich die einfach wiederverwenden für die Refresh funktion s
    }
    //SERVER ANFRAGEN VERSCHICKEN UND ANTWORTEN VERABREITEN 
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
            init(); //damit das Login Fenster nach der Speicherung angezeigt wird.
        }
    }
    //Verarbeitung der Login Antwort der Datenbank
    function handleLoginResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.response == "Login information correct") {
                console.log("Login completed");
                chatroomChoiceRender();
            }
            else if (xhr.response == "Login information faulty") {
                alert(htmlData["Login Error"]);
                init(); //jeder hasst es, wenn man sich vertippt hat muss man alles neu eingeben hihihi
            }
        }
    }
    function handleChatroomResponse(_event) {
        renderChatInterface();
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let chatArray = JSON.parse(xhr.response);
            let htmlString = " ";
            for (let i = 0; i < chatArray.length; i++) {
                console.log(chatArray[i]);
                if (globalUser == chatArray[i].user) { //HIER DANN NOCH UNTERSCHIEDLICHE CSS VERBINDUNGEN!!!!!
                    htmlString += `<div> 
                    <p> ${chatArray[i].msg}</p>
                    <p><span> ${chatArray[i].time}</span> Du </p>
            
            </div> `;
                }
                else {
                    htmlString += `<div> 
                    <p> ${chatArray[i].msg}</p>
                    <p><span> ${chatArray[i].time}</span> ${chatArray[i].user} </p>
            
            </div> `;
                }
            }
            document.getElementById("Chat").innerHTML = " ";
            document.getElementById("Chat").innerHTML = htmlString;
            //hier dann eine Schleife die das respone Array durch geht und schreibt ( in einen HTML String.)
            //let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            //output.value = xhr.response;
            //let responseAsJson: JSON = JSON.parse(xhr.response);
            // console.log(responseAsJson);
        }
    }
    function handleMSGSendResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
})(hfuChat || (hfuChat = {}));
//# sourceMappingURL=client.js.map