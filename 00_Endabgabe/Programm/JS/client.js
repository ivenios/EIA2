var hfuChat;
(function (hfuChat) {
    //zuerst die dynamischen HTML Elemente,Vielleicht später noch in externe Datein Packen !!!
    let serverAddress = "https://ios-eia2.herokuapp.com";
    let htmlData = {
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
    function init() {
        console.log("Loading Login");
        document.getElementById("htmlBox").innerHTML = htmlData["Login"];
        //hier kommen alle EventListener die jemals gebraucht werden. Problem dabei, könnte sein, dass manche der Inhaltenoch nicht geladen sind, deswegen muss ich da mal aufpassen
        document.getElementById("registerButton").addEventListener("click", registerNewUser);
        document.getElementById("loginUserButton").addEventListener("click", loginUser);
        document.getElementById("exitRegisterButton").addEventListener("click", init);
        document.getElementById("saveNewUserButton").addEventListener("click", saveNewUser);
    }
    function registerNewUser() {
        console.log("loading Register Menu");
        document.getElementById("htmlBox").innerHTML = " ";
        document.getElementById("htmlBox").innerHTML = htmlData["Register"];
    }
    function saveNewUser() {
        console.log("New User will be checked and safed to Database");
    }
    function loginUser() {
        console.log("User Data will be checked, if correct Chat will be displayed");
        let inputs = document.getElementsByTagName("input");
        let query = "command=login";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    //server Angelegenheiten: 
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(hfuChat || (hfuChat = {}));
//# sourceMappingURL=client.js.map