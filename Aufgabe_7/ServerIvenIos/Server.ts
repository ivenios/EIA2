import * as Http from "http";
import * as Url from "url"; //importiert weitere nötige commands aus der nodes.modules damit der lint nicht ausrastet

namespace EisDealerFreude2 {
	console.log("Starting server"); //Starting Server wird ausgegeben
	let port: number = Number(process.env.PORT); //wir legen die globale Variable port an, um unseren Server zusagen, auf welchen port er hören soll
	if (!port) //ist der port noch unklar, wird er in der Zeile darunter auf 8100 gesetzt
		port = 8100;

	let server: Http.Server = Http.createServer(); // wir legen eine Variable an, vom tyoe http.server, welche die createServer aufforderung beinhaltet, diese verwandelt aus dem PC einen Lokalen Server
	server.addListener("request", handleRequest); // wenn eine request ausgeführt wird, wird durch den request listener handlerequest ausgeführt
	server.addListener("listening", handleListen); //fügt einen eventListerner auf unseren Server, welche handleListen ausführt, wenn sich der Status des Servers auf "Listening" stellt
	server.listen(port); // Gibt an, ob der Server auf Verbindungen wartet oder nicht.

	function handleListen():void {
		console.log("Listening"); //Listening wird ausgegeben 
	}

	//IncomingMessage: als erstes Argument an das Ereignis'request' bzw.'response' übergeben. Es kann verwendet werden, um auf den Antwortstatus, die Überschriften und die Daten zuzugreifen.
	//ServerResponse: Er wird als zweiter Parameter an das Ereignis'request' übergeben.
	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //handleRequest übernummr die eingehendeMessage ( das was hinter das / geschrieben wird) und die Respons des Servers auf die Eingabe
		console.log("I hear voices!"); // I hear voices wird ausgegben
		console.log(_request.url);  //sendet einen Teil des Antwortkörpers. an die Console

		_response.setHeader("content-type", "text/html; charset=utf-8"); //gibt Vorgaben für den content und die vorschriften für das eingegebene in der URL-Zeile an
		_response.setHeader("Access-Control-Allow-Origin", "*"); //CORS (Cross-Origin Resource Sharing) Header.Access-Control-Allow-Origin-Antwortkopf, um dem Browser mitzuteilen, dass der Inhalt dieser Seite für bestimmte Herkunft zugänglich ist.

		let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
		for (let key in url.query)
			_response.write(key + ":" + url.query[key] + "<br/>"); // Dies sendet einen Teil des Antwortkörpers.  An den HTML Body und schreibt in dort. 

		_response.end(); // beendet den response des servers und gibt in frei für weitere eingaben ? 
	}
	console.log(EisDealerFreude);
}