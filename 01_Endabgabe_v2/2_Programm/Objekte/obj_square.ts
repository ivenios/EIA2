namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/
export class Square extends PlaceableObjects {
    dx: number; //animation position
    dy: number; 

    constructor() {
        super(); //;

    }

    renderObject(): void {
        let square: Path2D = new Path2D();
        //crc.globalCompositeOperation = "destination-over";
        crc.fillRect(this.x, this.y, this.scale * 15 , this.scale * 15);
        crc.fillStyle = this.color;
        crc.fill(square);
    }

    animateObject(): void {
        if (globalAnimatonType == "slow") {
            this.x -= Math.random() * (-7 - 3) + 3;
            this.y += Math.random() * (6 - 2) + 2 ;
            if (this.x > canvas.width) {this.x -= canvas.width; }
                
            if (this.y > canvas.height) {this.y -= canvas.height; }

            
                

        }
        
        else if (globalAnimatonType == "stig") {
            //; 
        }
        else if (globalAnimatonType == "bendy") {
            //;
        }

        else if (globalAnimatonType == "mayham") {
            //;
         //  this.alterObject();
        }


    }

    alterObject(): void {
        //;
    }


}


    
}