
/*//hier eine nette funktion, was aber wenn jemand auf abbrechen drückt, deswegen die if schleife
function init() {
    thyNameHere();

}
document.addEventListener('DOMContentLoaded', init);

function thyNameHere():void {
    document.getElementById("htmlText").innerHTML="";
    var thyName: string = prompt("We ask thee, to give us thy name");
        
//wenn kein Name angegeben wurde, wird eine Fehlermeldung auf der Konsole ausgegeben bei abbruch gibt es nur einen Console.log
    if (thyName ==null) {
        console.log("All's well that ends well");
    }
    else if(thyName =="")    {
        alert("More matter, with less art. We need thy name!!!")
        console.log("More matter, with less art. We need thy name!!!");
    }
    else { //wenn alles erfüllt ist, kann alles geschrieben haben 
  s      document.getElementById("htmlText").innerHTML="Lebe Lange und in Frieden <span class='Name'>"+ thyName +"</span>. Gerne Helfen wir dir.";
        console.log("Lebe Lange und in Frieden "+ thyName + ". Gerne Helfen wir dir.");
        
    }
        
        

}

/*
Aufgabe: Aufgabe 0 Arbeitsfähigkeit
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 24.März 2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/