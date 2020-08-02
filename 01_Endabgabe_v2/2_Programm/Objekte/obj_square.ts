namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/
export class Square {
    x: number;
    y: number;

    constructor() {
     //;

    }

    renderObject(): void {
        let square: Path2D = new Path2D();
        square.arc(this.x, this.y, 50, 50, Math.PI);
        crc.fillStyle = "black";
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