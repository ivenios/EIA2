namespace hfuChat {
    //zuerst die dynamischen HTML Elemente,Vielleicht später noch in externe Datein Packen !!!
    let serverAddress: string = "https://ios-eia2.herokuapp.com";
    let htmlData: {[key: string]: string }
    = {
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
        "Register Error PW": "Bitte Überprüfe dein eingegebenes Passwort.",
        "Register Error no User": "Bitte gib einen originellen Nutzernamen an.",
        "Register Error User Twice": "Bitte suche dir einen anderen Nutzernamen, er ist bereits vergeben.",
        "Chat Interface": "you"

    };

    document.addEventListener("DOMContentLoaded", init);
    
//LOGIN FENSTER DARSTELLEN  
    function init(): void { //Init Funktion ruft zuerst das Login Fenster auf aus dem Array. 
        console.log("Loading Login");
        document.getElementById("htmlBox").innerHTML = htmlData["Login"];
        //hier kommen alle EventListener die jemals gebraucht werden. Problem dabei, könnte sein, dass manche der Inhaltenoch nicht geladen sind, deswegen muss ich da mal aufpassen
        document.getElementById("registerButton").addEventListener("click", registerNewUser);
        document.getElementById("loginUserButton").addEventListener("click", loginUser);
        
    }
    

//REGISTRIER FENSTER DARSTELLEN
    function registerNewUser(): void {
        console.log("loading Register Menu");
        document.getElementById("htmlBox").innerHTML = " ";
        document.getElementById("htmlBox").innerHTML = htmlData["Register"];
        //EventListener für die jeweiligen neuen Buttons
        document.getElementById("exitRegisterButton").addEventListener("click", init);
        document.getElementById("saveNewUserButton").addEventListener("click", saveNewUser);
    }
//NEUEN USER SPEICHERN
    function saveNewUser(): void {
        console.log("New User will be checked and safed to Database");
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=newUser";
        console.log(inputs);
        if (inputs[0].value == "") {printError(htmlData["Register Error no User"]); }
        query += "&username=" + inputs[0].value;
        query += "&telenum=" + inputs[1].value;
        if (inputs[2].value != inputs[3].value) {
            printError(htmlData["Register Error PW"]);
        } else {
            query += "&pwd=" + inputs[2].value;
        }
        if (inputs[4].checked == true) {query += "&gender=" + inputs[4].id; }
        if (inputs[5].checked == true) {query += "&gender=" + inputs[5].id; }
        if (inputs[6].checked == true) {query += "&gender=" + inputs[6].id; }
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
//LOGIN FÜR DEN USER
    function loginUser(): void {
        console.log("User Data will be checked, if correct Chat will be displayed");
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=login";
        console.log(inputs);
        query += "&username=" + inputs[0].value;
        query += "&password=" + inputs[1].value;
        console.log(query);
        sendRequest(query, handleLoginResponse);
    }
    function printError(_Array: string): void {
        alert(_Array);
    }

//SERVER ANFRAGEN VERSCHICKEN: 

    

    function sendRequest(_query: string, _callback: EventListener): void {
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", serverAddress + "?" + _query, true);
    xhr.addEventListener("readystatechange", _callback);
    xhr.send();
}

    function handleInsertResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.response);
    }
}
    //Verarbeitung der Login Antwort der Datenbank
    function handleLoginResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.response == "Login information correct") {
            console.log("Login completed");
        } else if (xhr.response == "Login information faulty") {
            alert(htmlData["Login Error"]);
        }
        
    }
}
/*
    function handleFindResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = xhr.response;
        let responseAsJson: JSON = JSON.parse(xhr.response);
        console.log(responseAsJson);
    }

    function refresh(_event: Event): void {
    let query: string = "command=refresh";
    sendRequest(query, handleFindResponse);
}
*/
}