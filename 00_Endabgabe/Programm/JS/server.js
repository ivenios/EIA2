"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Database = require("./Database");
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
    switch (command) {
        case "newUser":
            let user = {
                user: query["username"],
                tele: query["telenum"],
                password: query["pwd"],
                gender: query["gender"]
            };
            Database.searchUserNames(query["username"], findCallback, user);
            break;
        case "loadChatroom":
            let chatnum = query["chatroom"];
            let usernm = query["username"];
            Database.loadingChatDB(chatnum, usernm, findCallback);
            break;
        case "sendingMSG":
            let newMSG = {
                user: query["user"],
                time: query["time"],
                msg: query["msg"]
            };
            let chatroom = query["chatroom"];
            Database.insertNewMSG(chatroom, newMSG, findCallback);
            break;
        case "login":
            let username = query["username"];
            let password = query["password"];
            Database.loginUser(username, password, findCallback); // die datenbank wird durchsucht 
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