"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
const Mongo = require("mongodb");
console.log("Database starting");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "Test";
let db;
let users;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    //    databaseURL = "mongodb://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://peta:12345@cluster0-gr6on.mongodb.net/test?retryWrites=true";
    databaseName = "EndAbgabe";
}
// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        users = db.collection("Userdatabase");
    }
}
function insert(_doc) {
    // try insertion then activate callback "handleInsert"
    users.insertOne(_doc, handleInsert);
}
exports.insert = insert;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
// try to fetch all documents from database, then activate callback
function findAll(_callback) {
    // cursor points to the retreived set of documents in memory
    var cursor = users.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);
    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e, studentArray) {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}
exports.findAll = findAll;
// neue suchfunktion, einfach die oben genannte funktion übernommen und mit students find angepasst
function searchUserNames(_name, _callback, _user) {
    var cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, userArray) {
        if (_e)
            _callback("Error" + _e);
        else
            for (let i = 0; i < userArray.length; i++) {
                if (userArray[i].user == _name) {
                    _callback("Leider ist dein Username schon vergeben, suche dir bitte einen anderen.");
                    return; //wenn der Name bereits vergeben ist soll die Funktion terminiert werden
                }
            }
        insert(_user); // nur wenn if nicht ausgeführt wurde, wird der Username eingespeichert. 
        _callback("Dein Account wurde erfolgreich erstellt. Logge dich nun ein.");
    }
}
exports.searchUserNames = searchUserNames;
//# sourceMappingURL=Database.js.map