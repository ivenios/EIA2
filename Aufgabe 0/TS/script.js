//hier eine nette funktion, was aber wenn jemand auf abbrechen drückt, deswegen die if schleife
function YourNameHere() {
    document.getElementById("htmlText").innerHTML = "";
    var YouName = prompt("Bitte gib nun dein Vor- und Zunamen ein!");
    //wenn kein Name angegeben wurde, wird eine Fehlermeldung auf der Konsole ausgegeben bei abbruch gibt es nur einen Console.log
    if (YouName == null) {
        console.log("Vorgang abgebrochen!");
    }
    else if (YouName == "") {
        alert("Bitte geben Sie einen Namen ein");
    }
    else { //wenn alles erfüllt ist, kann alles geschrieben haben 
        console.log("Herzlich Willkommen " + YouName + " Wir freuen uns über deine Interesse!");
        document.getElementById("htmlText").innerHTML = "Lebe Lange und in Frieden <span class='Name'>" + YouName + "</span>. Gerne Helfen wir dir.";
    }
}
/*
Aufgabe: Aufgabe 0 Arbeitsfähigkeit
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 24.März 2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/ 
//# sourceMappingURL=script.js.map