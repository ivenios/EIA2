namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/
export class Triangle extends PlaceableObjects {


    constructor() {
        super(); //;
    }

    renderObject(): void {
        crc.beginPath();
        crc.moveTo(this.x, this.y);
        crc.lineTo(this.x + 25 * this.scale, this.y + 10 * this.scale);
        crc.lineTo(this.x + 10 * this.scale, this.y + 25 * this.scale);
        crc.closePath();
        crc.fillStyle = this.color;
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