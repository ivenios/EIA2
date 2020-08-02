/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.  
Note: Dieser Code wurde aus den Lektionen des Sommersemester 2019 entwandt. Author Lukas Scheuerle. 
*/


class Vector { 
    x: number;
    y: number;

    scale(_factor: number): void {
        this.x *= _factor;
        this.y *= _factor;
    }

    add(_addend: Vector): void {
        this.x += _addend.x;
        this.y += _addend.y;
    }
}


interface AssocStringString {
    [key: string]: string;
}

interface UserData {
    name: string;
    user: string;
    password: string;
    pictureList: string[];
}

interface ChatData {
    user: string;
    time: string;
    msg: string;
 
}

interface CanvasData {
    owner: string;
    name: string;
    canvasX: number;
    canvasY: number;
    canvasColor: string; 
    placeableObjects: string;
   // imageData: ImageData;

}



// Objekte 

