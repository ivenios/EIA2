import * as Http from "http";
import * as Url from "url";
import * as Database from "./database";
import { parse } from "querystring";
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.  
Note: Dieser Code wurde aus den Lektionen des Sommersemester 2019 entwandt. Author Lukas Scheuerle. 
*/

console.log("Server starting");

let port: number = Number(process.env.PORT);
if (!port) 
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);



function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");

    let query: AssocStringString = <AssocStringString> Url.parse(_request.url, true).query;
    var command: string = query["command"];

    switch (command) {
        case "registerUser":
            let user: UserData = {
                name: query["name"],
                user: query["username"],
                password: query["password"],
                pictureList: []
            };
            Database.registerUserName(query["username"], findCallback, user);
            break;
        case "loginUser":
            let password: string = query["password"];
            Database.loginUser(query["username"], password, findCallback); // die datenbank wird durchsucht 
            break;
        case "loadPictureList":

            Database.loadListFromDB(query["username"], findCallback);

            break;
        case "initiatePicture":
            let username: string = query["username"];
            let pictureName: string = query["pictureName"];
                        //speichern des Bild Namens in UserData und in der Canvas DB
            let newPicture: CanvasData = {
                            owner: username,
                            name: pictureName,
                            canvasX: query["canvasX"],
                            canvasY: query["canvasY"],
                            canvasColor: query["canvasColor"],
                            placeableObjects: ""
                            //imageData: ImageData new 

                        };

            Database.pushPictureCanvasToDB( findCallback, newPicture);


            break;
        case "deleteUserPicture":
            // leitet die Anfrage zum löschen direkt weiter an die Datenbank 
            Database.deletePictureCanvasFromDB( findCallback,  query["username"], query["pictureName"]);
            break;

        case "safePicture":
                Database.safePictureCanvasToDB(findCallback, query["username"], query["pictureName"], query["objects"]);
                    


                break;

        default:
            respond(_response, "unknown command: " + command);
            break;
    }

    // findCallback is an inner function so that _response is in scope
    function findCallback(json: string): void {
        respond(_response, json);
    }
}

function respond(_response: Http.ServerResponse, _text: string): void {
    console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}