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
let canvasDatabase;
// running on heroku?
if (process.env.NODE_ENV == "production") {
    //    databaseURL = "mongodb://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://peta:12345@cluster0-gr6on.mongodb.net/test?retryWrites=true";
    databaseName = "EndAbgabe2";
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
    }
}
function insertMSG(_doc) {
    users.insertOne(_doc, handleInsert);
}
exports.insertMSG = insertMSG;
// insertion-handler receives an error object as standard parameter
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
//LOADCHAT funktion ( ehemals find all) (username brauchen wir in dieres Version eigentlich gar nicht mehr, aber why not )
function loadingChatDB(_chatroomnum, _username, _callback) {
    users = db.collection(_chatroomnum);
    var cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, _chatArray) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(_chatArray));
    }
}
exports.loadingChatDB = loadingChatDB;
//Neuen Nutzer anlegen, wenn diesen nicht bereits vorhanden 
function registerUserName(_name, _callback, _user) {
    users = db.collection("Userdatabase");
    var cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, userArray) {
        if (_e)
            _callback("Error" + _e);
        else
            for (let i = 0; i < userArray.length; i++) {
                if (userArray[i].user == _name) {
                    _callback("User Taken");
                    return; //wenn der Name bereits vergeben ist soll die Funktion terminiert werden
                }
            }
        insertUser(_user); // nur wenn if nicht ausgeführt wurde, wird der Username eingespeichert.    && userArray[i].password == _pass
        _callback("User insert successfull");
    }
}
exports.registerUserName = registerUserName;
//NUtzer  in  Database inserten
function insertUser(_doc) {
    // try insertion then activate callback "handleInsert"
    users.insertOne(_doc, handleInsert);
}
exports.insertUser = insertUser;
function insertCanvas(_doc) {
    canvasDatabase = db.collection("canvasDatabase");
    canvasDatabase.insertOne(_doc, handleInsert);
}
exports.insertCanvas = insertCanvas;
//Einlogg funktion
function loginUser(_name, _pass, _callback) {
    users = db.collection("Userdatabase");
    var cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, userArray) {
        if (_e)
            _callback("Error" + _e);
        else
            for (let i = 0; i < userArray.length; i++) {
                if (userArray[i].user == _name) {
                    if (userArray[i].password == _pass) {
                        _callback("Login information correct");
                        return;
                    }
                }
            }
        _callback("Login information faulty");
    }
}
exports.loginUser = loginUser;
//Funktion zum Laden der Picture List:
function loadListFromDB(_username, _callback) {
    users = db.collection("Userdatabase");
    var cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, _chatArray) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(_chatArray));
    }
}
exports.loadListFromDB = loadListFromDB;
//Funktion zum abspeichern des Canvas Namens im userData und in Canvas DB
function pushPictureCanvasToDB(_callback, _canvasData) {
    users = db.collection("Userdatabase");
    canvasDatabase = db.collection("canvasDatabase");
    var cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, userArray) {
        if (_e)
            _callback("Error" + _e);
        else
            for (let i = 0; i < userArray.length; i++) {
                if (userArray[i].user == _canvasData.owner) {
                    // wenn der Nutzer übereinstimmt, soll der Name des Pictures in das PictureList Array geupsht werden
                    //zuerst muss aber noch geschaut werden, dass es den Namen bei dem Nutzer nicht schon gibt
                    let userPictures = userArray[i].pictureList;
                    for (let v = 0; v < userPictures.length; v++) {
                        if (userPictures[v] == _canvasData.name) {
                            _callback("save negative");
                            break;
                        }
                        else {
                            return;
                        }
                    }
                    userPictures.push(_canvasData.name);
                    insertCanvas(_canvasData);
                    _callback("save postive");
                    return;
                }
                else if (userArray[i].user != _canvasData.owner) {
                    return;
                }
            }
    }
}
exports.pushPictureCanvasToDB = pushPictureCanvasToDB;
//funktion zum speichern der Canvas in der Datenbank 
function saveNewPicture(_callback, _canvasData) {
    insertCanvas(_canvasData);
    _callback("Saving gcomplete");
}
exports.saveNewPicture = saveNewPicture;
function insertNewMSG(_chatroom, _chatData, _callback) {
    users = db.collection(_chatroom);
    insertMSG(_chatData);
    _callback("insertion sucessfull");
}
exports.insertNewMSG = insertNewMSG;
//# sourceMappingURL=database.js.map