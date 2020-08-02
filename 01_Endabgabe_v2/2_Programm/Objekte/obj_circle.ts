namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/

export class Circle extends PlaceableObjects {
    x: number;
    y: number;
    r: number;


    constructor() {
        super(); //;
    }
    //crc.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    renderObject(): void {
        let circle: Path2D = new Path2D();
        circle.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        crc.fillStyle = "brown";
        crc.fill(circle);
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