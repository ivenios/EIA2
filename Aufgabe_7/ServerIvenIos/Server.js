"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url"); //importiert weitere nötige commands aus der nodes.modules damit der lint nicht ausrastet
/* Aufgabe 7
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 09.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. Dieser Code entstand in Nacharbeit mit Michel Orlik und Pascal Michel*/
var EisDealerFreude;
(function (EisDealerFreude) {
    console.log("Starting server"); //Starting Server wird ausgegeben
    let bestellungVerarbeitet = "";
    let port = Number(process.env.PORT); //wir legen die globale Variable port an, um unseren Server zusagen, auf welchen port er hören soll
    if (!port) //ist der port noch unklar, wird er in der Zeile darunter auf 8100 gesetzt
        port = 8100;
    let server = Http.createServer(); // wir legen eine Variable an, vom tyoe http.server, welche die createServer aufforderung beinhaltet, diese verwandelt aus dem PC einen Lokalen Server
    server.addListener("request", handleRequest); // wenn eine request ausgeführt wird, wird durch den request listener handlerequest ausgeführt
    server.addListener("listening", handleListen); //fügt einen eventListerner auf unseren Server, welche handleListen ausführt, wenn sich der Status des Servers auf "Listening" stellt
    server.listen(port); // Gibt an, ob der Server auf Verbindungen wartet oder nicht.
    function handleListen() {
        console.log("Listening"); //Listening wird ausgegeben 
    }
    //IncomingMessage: als erstes Argument an das Ereignis'request' bzw.'response' übergeben. Es kann verwendet werden, um auf den Antwortstatus, die Überschriften und die Daten zuzugreifen.
    //ServerResponse: Er wird als zweiter Parameter an das Ereignis'request' übergeben.
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // I hear voices wird ausgegben
        console.log(_request.url); //sendet einen Teil des Antwortkörpers. an die Console
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let url = Url.parse(_request.url, true);
        let urlResponse = ``;
        for (let key in url.query) {
            if (key == "IHREEISSORTEN") {
                urlResponse += `<p class="ueberHead">Diese Eissorten hast du gewählt:</p>`;
                continue;
            }
            if (key == "IHRETOPPINGS") {
                urlResponse += `<p class="ueberHead">Diese Toppings hast du gewählt:</p>`;
                continue;
            }
            if (key == "Waffel" || key == "Becher") {
                urlResponse += `<p>Dein Eis kommt in einem/in einer ${key}</p>`;
                continue;
            }
            if (key == "SameDayDelivery" || key == "SameHourDelivery" || key == "Beamemeup") {
                urlResponse += `<p> Deine Lieferoption: ${key} </p>`;
                continue;
            }
            if (key == "Kundenname") {
                urlResponse += `<p class="ueberHead" >Deine persönlichen Daten: </p>`;
                urlResponse += `<p>${key}: ${url.query[key]}</p>`;
                continue;
            }
            else {
                urlResponse += `<p> ${key}: ${url.query[key]} </p>`;
            }
        }
        _response.write(urlResponse);
        _response.end();
    }
    console.log(EisDealerFreude);
})(EisDealerFreude || (EisDealerFreude = {}));
//# sourceMappingURL=Server.js.map