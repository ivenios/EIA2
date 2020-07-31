"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Database = require("./database");
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Note: Dieser Code wurde aus den Lektionen des Sommersemester 2019 entwandt. Author Lukas Scheuerle.
*/
console.log("Server starting");
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    let query = Url.parse(_request.url, true).query;
    var command = query["command"];
    let username = query["username"];
    switch (command) {
        case "registerUser":
            let user = {
                user: query["username"],
                password: query["pwd"],
                pictureList: null
            };
            Database.registerUserName(query["username"], findCallback, user);
            break;
        case "loginUser":
            let password = query["password"];
            Database.loginUser(username, password, findCallback); // die datenbank wird durchsucht 
            break;
        case "loadPictureList":
            Database.loadListFromDB(username, findCallback);
            break;
        case "XX":
            break;
        default:
            respond(_response, "unknown command: " + command);
            break;
    }
    // findCallback is an inner function so that _response is in scope
    function findCallback(json) {
        respond(_response, json);
    }
}
function respond(_response, _text) {
    console.log("Preparing response: " + _text);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.write(_text);
    _response.end();
}
//# sourceMappingURL=server.js.map