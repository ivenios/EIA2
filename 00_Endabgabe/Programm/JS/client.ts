namespace hfuChat {
    //zuerst die dynamischen HTML Elemente,Vielleicht später noch in externe Datein Packen !!!
   
    let htmlData: {[key: string]: string }
    = {
        "Login": `<form>
        <div class="login">
            <h1 class="head-title">Login</h1>
            <div class="uid">
                <label>Email or Username</label>
                <input type="text" name="">
            </div>
            <div class="pwd">
                <label>Password</label>
                <input type="password" name="">
            </div>
            <button type="submit">Login</button>
            <button id="registerButton">Register</button></form> `,

        "Register": `<form> <div class="register">
        <span class="clopen">Register</span>
        <h1 class="head-title">Register</h1>
        <div class="mail">
            <label>Email</label>
            <input type="text" name="">
        </div>
        <div class="uid">
            <label>Username</label>
            <input type="text" name="">
        </div>
        <div class="mobile">
            <label>Mobile Number</label>
            <input type="text" name="">
        </div>
        <div class="pwd">
            <label>Password</label>
            <input type="password" name="">
        </div>			
        <div class="c-pwd">
            <label>Confirm Password</label>
            <input type="password" name="">
        </div>
        <div class="gender">
            <input id="male" type="radio" name="customer[gender]">
            <label for="male">Male</label>
            <input id="female" type="radio" name="customer[gender]">
            <label  for="female">Female</label>
        </div>
        <button type="submit">Register</button>
    </div>	
</form>`,
        "Login Error": "How",
        "Register Error": "Are",
        "Chat Interface": "you"

    };

    document.addEventListener("DOMContentLoaded", init);
    document.getElementById("registerButton").addEventListener("click", registerNewUser);
    document.getElementById("exitRegisterButton").addEventListener("click", init);
    document.getElementById("saveNewUserButton").addEventListener("click", saveNewUser);
    document.getElementById("loginUserButton").addEventListener("click", loginUser);

    
    function init(): void { //Init Funktion ruft zuerst das Login Fenster auf aus dem Array. 
        console.log("Loading Login");
        document.getElementById("htmlBox").innerHTML = htmlData["Login"];
    }

    function registerNewUser(): void {
        console.log("loading Register Menu");
        document.getElementById("htmlBox").innerHTML = htmlData["Register"];
    }
    
    function saveNewUser(): void {
        console.log("New User will be checked and safed to Database");
    }

    function loginUser(): void {
        console.log("User Data will be checked, if correct Chat will be displayed")
    }



}