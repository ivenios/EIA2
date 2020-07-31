/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.  
Note: Dieser Code wurde aus den Lektionen des Sommersemester 2019 entwandt. Author Lukas Scheuerle. 
*/


interface AssocStringString {
    [key: string]: string;
}

interface UserData {
    name: string;
    user: string;
    password: string;
    pictureList: [];
}

interface ChatData {
    user: string;
    time: string;
    msg: string;
 
}