namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/
export class Triangle extends PlaceableObjects {
    x: number;
    y: number;

    constructor() {
        super(); //;
    }

    renderObject(): void {
        crc.beginPath();
        crc.moveTo(this.x, this.y);
        crc.lineTo(this.x + 125, this.y + 45);
        crc.lineTo(this.x + 45, this.y + 125);
        crc.closePath();
        crc.fill();
  }
    




    animateObject(): void {
        //;

    }

    alterObject(): void {
        //;
    }

    updateObject(): void {
        this.renderObject();
        this.animateObject();
        this.alterObject();
    }



}


    
}