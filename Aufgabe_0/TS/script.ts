
//hier eine nette funktion, was aber wenn jemand auf abbrechen drückt, deswegen die if schleife
function YourNameHere() {
    document.getElementById("htmlText").innerHTML="";
    var ThyName = prompt("We ask thee, to give us thy name");
        
//wenn kein Name angegeben wurde, wird eine Fehlermeldung auf der Konsole ausgegeben bei abbruch gibt es nur einen Console.log
    if (ThyName ==null) {
        console.log("All's well that ends well");
    }
    else if(ThyName =="") {
        alert("More matter, with less art. We need thy name")
    }
    else { //wenn alles erfüllt ist, kann alles geschrieben haben 
        document.getElementById("htmlText").innerHTML="Lebe Lange und in Frieden <span class='Name'>"+ ThyName +"</span>. Gerne Helfen wir dir.";
        console.log("Herzlich Willkommen " + ThyName + " Wir freuen uns über deine Interesse!");
        
    }
        
        

}

/*
Aufgabe: Aufgabe 0 Arbeitsfähigkeit
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 24.März 2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/