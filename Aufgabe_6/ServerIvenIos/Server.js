"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //importiert weitere nötige commands aus der nodes.modules damit der lint nicht ausrastet
var EisDealerFreude;
(function (EisDealerFreude) {
    console.log("Starting server"); //Starting Server wird ausgegeben
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
        _response.setHeader("content-type", "text/html; charset=utf-8"); //gibt Vorgaben für den content und die vorschriften für das eingegebene in der URL-Zeile an
        _response.setHeader("Access-Control-Allow-Origin", "*"); //CORS (Cross-Origin Resource Sharing) Header.Access-Control-Allow-Origin-Antwortkopf, um dem Browser mitzuteilen, dass der Inhalt dieser Seite für bestimmte Herkunft zugänglich ist.
        _response.write(_request.url); // Dies sendet einen Teil des Antwortkörpers.  An den HTML Body und schreibt in dort. 
        _response.end(); // beendet den response des servers und gibt in frei für weitere eingaben ? 
    }
    console.log(EisDealerFreude);
})(EisDealerFreude || (EisDealerFreude = {}));
//# sourceMappingURL=Server.js.map