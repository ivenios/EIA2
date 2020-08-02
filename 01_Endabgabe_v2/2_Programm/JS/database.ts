/**
 * Simple database insertion and query for MongoDB
 * @author: Jirka Dell'Oro-Friedl 
 */
import * as Mongo from "mongodb";
import { callbackify } from "util";
import { promises } from "fs";
console.log("Database starting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "Test";
let db: Mongo.Db;
let users: Mongo.Collection; 
let canvasDatabase: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    //    databaseURL = "mongodb://username:password@hostname:port/database";
    databaseURL = "mongodb+srv://peta:12345@cluster0-gr6on.mongodb.net/test?retryWrites=true";
    databaseName = "EndAbgabe2";
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
        
    }
}


export function insertMSG(_doc: ChatData): void {

    users.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

//Neuen Nutzer anlegen, wenn diesen nicht bereits vorhanden 
export function registerUserName(_name: string, _callback: Function, _user: UserData ): void {
    users = db.collection("Userdatabase");
    var cursor: Mongo.Cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e: Mongo.MongoError, userArray: UserData[]): void {
        if (_e)
            _callback("Error" + _e);
        else

        for (let i: number = 0; i < userArray.length; i++ ) {
            if (userArray[i].user == _name) {
                _callback("User Taken");
                return; //wenn der Name bereits vergeben ist soll die Funktion terminiert werden
            }
            
        }
        insertUser(_user); // nur wenn if nicht ausgeführt wurde, wird der Username eingespeichert.    && userArray[i].password == _pass
        _callback("User insert successfull");
    }
}
//NUtzer  in  Database inserten
export function insertUser(_doc: UserData): void {
    // try insertion then activate callback "handleInsert"
    users.insertOne(_doc, handleInsert);
}

export function insertCanvas(_doc: CanvasData): void {
    canvasDatabase = db.collection("canvasDatabase");
    canvasDatabase.insertOne(_doc, handleInsert);
}

//Einlogg funktion
export function loginUser(_name: string, _pass: string, _callback: Function ): void {
    users = db.collection("Userdatabase");
    var cursor: Mongo.Cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e: Mongo.MongoError, userArray: UserData[]): void {
        if (_e)
            _callback("Error" + _e);
        else   

        for (let i: number = 0; i < userArray.length; i++ ) {
            if (userArray[i].user == _name ) {
                if (userArray[i].password == _pass) {
                _callback("Login information correct");
                return; 
                }
            }
        }
        _callback("Login information faulty");
        }
} 

//Funktion zum Laden der Picture List:

export function loadListFromDB(_username: string, _callback: Function): void {
    users = db.collection("Userdatabase");
    var cursor: Mongo.Cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e: Mongo.MongoError, _userArray: UserData[]): void {
        if (_e)
            _callback("Error" + _e);
        else 

        for (let i: number = 0; i < _userArray.length; i++) {
            if (_userArray[i].user == _username ) {
                if (_userArray[i].pictureList.length == 0 ) { //Wenn keine Bilder für diesen Nutzer angelegt sind, wird dieser Nutzer darüber benachrichtigt
                    _callback("PictureList Empty");
                }
                else 
                _callback(JSON.stringify(_userArray[i].pictureList));
            }
        }
    }
}

//Funktion zum abspeichern des Canvas Namens im userData und in Canvas DB
export function pushPictureCanvasToDB(_callback: Function, _canvasData: CanvasData): void {
    users = db.collection("Userdatabase");
    var cursor: Mongo.Cursor = users.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e: Mongo.MongoError, userArray: UserData[]): void {
            if (_e)
                _callback("Error" + _e);
            else

            for (let i: number = 0; i < userArray.length; i++ ) {
                if (userArray[i].user == _canvasData.owner) {
                    // wenn der Nutzer übereinstimmt, soll der Name des Pictures in das PictureList Array geupsht werden
                    //zuerst muss aber noch geschaut werden, dass es den Namen bei dem Nutzer nicht schon gibt
                    
                   let userPictures: string[] = userArray[i].pictureList;
                   for (let v: number = 0; v < userPictures.length; v++) {
                     if (userPictures[v] == _canvasData.name ) {
                          _callback("save negative");
                          return;
                       }

                    }
                   db.collection("Userdatabase").updateOne(
                        { user: _canvasData.owner },
                        {
                          $push: { pictureList :  _canvasData.name  },
                          $currentDate: { lastModified: true }
                        }
                      );
                   insertCanvas(_canvasData);
                   _callback("save postive");

                    
                }
                
        }
    }
}

//funktion zum speichern der Canvas in der Datenbank 
export function saveNewPicture(_callback: Function, _canvasData: CanvasData): void {
    insertCanvas(_canvasData);
    _callback("Saving gcomplete");
}

export function deletePictureCanvasFromDB(_callback: Function, _username: string, _pictureName: string): void {


    db.collection("Userdatabase").updateOne(
        { user: _username },
        {
          $pull: { pictureList :  _pictureName  },
          $currentDate: { lastModified: true }
        }
      );

    db.collection("canvasDatabase").deleteOne({ owner: _username, name: _pictureName});
    _callback("Deletion successful");


     //   for (let i: number = 0; i < userArray.length; i++ ) { //zunächst durch das UserArray nach user suchen
      //      if (userArray[i].user == _username) {
       //         for (let u: number = 0; u < userArray[i].pictureList.length; u++) { //durch das PictureList Array und dort nach Bild namen suchen 
       //             if (userArray[i].pictureList[u] == _pictureName) {
       //                 userArray[i].pictureList.splice(u);  //bildnamen raus splicen 
       //                 db.collection("canvasDatabase").deleteOne({ owner: _username, name: _pictureName}); //das Dokument aus der CanvasDatabase löschen 
       //                 //jetzt sollte alles Gelöscht sein 
        //                _callback("Deletion successful");

       //             }
       //         }
       //     }
    
}


export function safePictureCanvasToDB(_callback: Function, _username: string, _pictureName: string, _objects: string ): void {
    
    //let objectJSON: string = JSON.parse(_objects);
                
    db.collection("canvasDatabase").updateOne(
        { user: _username, name: _pictureName},
        {
            $push: { placeableObjects: _objects },
            $currentDate: { lastModified: true }
        }
        );
  

    _callback("safe postive");

        



    }



//export function insertNewMSG(_chatroom: string, _chatData: ChatData, _callback: Function): void {
  //  users = db.collection(_chatroom);
  //  insertMSG(_chatData);
  //  _callback("insertion sucessfull");

    
//}
