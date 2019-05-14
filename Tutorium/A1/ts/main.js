var hiAndBye;
(function (hiAndBye) {
    document.addEventListener('DOMContentLoaded', init);
    let helloArray = ["Herzlich", "Willkommen", "hier", "im", "Europa", "-", "Park", "!"];
    let byeArray = ["Verpiss", "dich", ",", "aldeeeeeeeäeee", "!"];
    function init() {
        document.getElementById("Hello").addEventListener('click', welcome);
        document.getElementById("ByeBye").addEventListener('click', goodBye);
    }
    function welcome() {
        document.getElementById("WriteHere").innerHTML = "";
        renderHTML(helloArray);
    }
    function goodBye() {
        document.getElementById("WriteHere").innerHTML = "";
        renderHTML(byeArray);
    }
    function renderHTML(_writeArray) {
        for (let i = 0; i < _writeArray.length; i++) {
            if (_writeArray[i] == "." || _writeArray[i] == "!" || _writeArray[i] == ",") {
                let span = document.createElement('span');
                span.innerHTML = _writeArray[i];
                document.getElementById("WriteHere").appendChild(span);
            }
            else {
                let span = document.createElement('span');
                span.innerHTML = " " + _writeArray[i];
                document.getElementById("WriteHere").appendChild(span);
            }
        }
    }
})(hiAndBye || (hiAndBye = {}));
//# sourceMappingURL=main.js.map