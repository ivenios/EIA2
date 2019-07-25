/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl
 */
import * as Mongo from "mongodb";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let users: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    //    databaseURL = "mongodb://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://peta:12345@cluster0-gr6on.mongodb.net/test?retryWrites=true";
    databaseName = "EndAbgabe";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        users = db.collection("Userdatabase");
    }
}

export function insert(_doc: UserData): void {
    // try insertion then activate callback "handleInsert"
    users.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    var cursor: Mongo.Cursor = users.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, studentArray: UserData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(studentArray));
    }
}
// neue suchfunktion, einfach die oben genannte funktion übernommen und mit students find angepasst
export function searchUserNames(_name: string, _callback: Function, _user: UserData ): void {
    var cursor: Mongo.Cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e: Mongo.MongoError, userArray: UserData[]): void {
        if (_e)
            _callback("Error" + _e);
        else

        for (let i: number = 0; i < userArray.length; i++ ) {
            if (userArray[i].user == _name) {
                _callback("Leider ist dein Username schon vergeben, suche dir bitte einen anderen.");
                return; //wenn der Name bereits vergeben ist soll die Funktion terminiert werden
            }
            
        }
        insert(_user); // nur wenn if nicht ausgeführt wurde, wird der Username eingespeichert.    && userArray[i].password == _pass
        _callback("Dein Account wurde erfolgreich erstellt. Logge dich nun ein.");
    }
}
export function loginUser(_name: string, _pass: string, _callback: Function ): void {
    var cursor: Mongo.Cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e: Mongo.MongoError, userArray: UserData[]): void {
        if (_e)
            _callback("Error" + _e);
        else   

        for (let i: number = 0; i < userArray.length; i++ ) {
            if (userArray[i].user == _name ) {
                _callback("Login information correct");
                return;
            }
        }
        _callback("Login information faulty");
        }
} 