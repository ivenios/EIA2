namespace hfuChat {
    //zuerst die dynamischen HTML Elemente,Vielleicht später noch in externe Datein Packen !!!
    let serverAddress: string = "https://ios-eia2.herokuapp.com";
    let htmlData: {[key: string]: string }
    = {
        "Login": `<form>
        <div class="login">
            <h1 class="head-title">Login</h1>
            <div class="uid">
                
                <input type="text" placeholder="Benutzername" required>
            </div>
            <div class="pwd">
                
                <input type="password" placeholder="Passwort" required >
            </div>
            <button id="loginUserButton">Login</button>
            <button id="registerButton">Neuer User</button> </form> `,

        "Register": `<form> <div class="register">
        <h1 class="head-title">Register</h1>
        <div class="uid">
            <input type="text" name="" placeholder="Benutzername" >
        </div>
        <div class="mobile">
            <input type="text" name="" placeholder="Telefonnummer">
        </div>
        <div class="pwd">
            <input type="password" name="" placeholder="Dein Passwort" >
        </div>			
        <div class="c-pwd">
            <input type="password" name="" placeholder="Wiederhole dein Passwort" >
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
    </div>	
</form>`,
        "Login Error": "How",
        "Register Error": "Are",
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
        query += "&username=" + inputs[0].value;
        query += "&telenum=" + inputs[1].value;
        if (inputs[2] != inputs[3]) {
            printError(htmlData["Register Error"]);
        } else {
            query += "&pwd=" + inputs[2].value;
        }
        query += "&password=" + inputs[1].value;
        console.log(query);
        //sendRequest(query, handleInsertResponse);
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
        //sendRequest(query, handleInsertResponse);
    }
    function printError(_Array: string): void {
        // hier muss dann die jeweilige Fehler meldung verarbeitet werden
    }

//SERVER ANFRAGEN VERSCHICKEN: 

    function refresh(_event: Event): void {
    let query: string = "command=refresh";
    sendRequest(query, handleFindResponse);
}

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

    function handleFindResponse(_event: ProgressEvent): void {
    let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    if (xhr.readyState == XMLHttpRequest.DONE) {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = xhr.response;
        let responseAsJson: JSON = JSON.parse(xhr.response);
        console.log(responseAsJson);
    }
}

}