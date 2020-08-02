namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/
export class Square extends PlaceableObjects {


    constructor() {
        super(); //;

    }

    renderObject(): void {
        let square: Path2D = new Path2D();
        crc.fillRect(this.x, this.y, this.scale * 15 , this.scale * 15);
        crc.fillStyle = this.color;
        crc.fill(square);
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