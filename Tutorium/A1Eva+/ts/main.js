var A2;
(function (A2) {
    let Hallo = ["Hi", "du", "Mensch", "."];
    let Tschüss = ["Ich", "hole", "mir", "jetzt", "ein", "Glas", "Wein", "und", "setze", "mich", "mit", "meiner", "Tocher", "vor", "den", "TV", "und", "schaue", "ARTE"];
    document.addEventListener('DOMContentLoaded', init);
    function init() {
        document.getElementById('B1').addEventListener('click', write);
        document.getElementById('B2').addEventListener('click', write);
    }
    function write(_event) {
        let Satz = "";
        let htmlText = document.createElement('p');
        console.log(_event);
        if (_event == 'B1') {
            for (let i; i < Hallo.length; i++) {
                Satz += 'Hallo[i]';
            }
            htmlText.innerHTML = Satz;
            document.getElementsByTagName('body')[0].appendChild(htmlText);
        }
        else if (_event == 'B2') {
            for (let i = 0; i < Tschüss.length; i++) {
                Satz += 'Tschuüs[i]';
            }
            htmlText.innerHTML = Satz;
            document.getElementsByTagName('body')[0].appendChild(htmlText);
        }
    }
})(A2 || (A2 = {}));
//# sourceMappingURL=main.js.map