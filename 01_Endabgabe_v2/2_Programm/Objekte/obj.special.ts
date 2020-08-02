namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/
export class Special extends PlaceableObjects  {
    x: number;
    y: number;

    constructor() {
        super(); //;
    }

    renderObject(): void {
        crc.beginPath();
        crc.moveTo(75, 40);
        crc.bezierCurveTo(75, 37, 70, 25, 50, 25);
        crc.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        crc.bezierCurveTo(20, 80, 40, 102, 75, 120);
        crc.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        crc.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        crc.bezierCurveTo(85, 25, 75, 37, 75, 40);
        crc.fill();
        crc.closePath();
    }




    animateObject(): void {
        //;

    }

    alterObject(): void {
        //;
    }

    updateObject(): void {
        //;
    }



}



}