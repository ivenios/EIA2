namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/

export class Circle extends PlaceableObjects {
    r: number; //rad


    constructor() {
        super(); //;
    }
    //crc.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    renderObject(): void {
        let circle: Path2D = new Path2D();
        crc.globalCompositeOperation = "destination-over";
        circle.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        crc.fillStyle = this.color;
        crc.fill(circle);
    }




    animateObject(): void {
        if (globalAnimatonType == "slow") {
            this.x -= Math.random() * (-7 - 3) + 3;
            this.y += Math.random() * (6 - 2) + 2 ;
            if (this.x == -30) {
                this.x = canvas.width + 50 ;
            } else if (this.y == -30) {
                this.y = canvas.height + 50 ;
            }
            else if (this.x == canvas.width + 50) {
                this.x = - 30 ;
            } else if (this.y == canvas.height + 50) {
                this.x = -30 ;
            }

        }
        
        else if (globalAnimatonType == "stig") {
            this.x -= Math.random() * (-7 - 3) + 3;
            this.y += Math.random() * (6 - 2) + 2 ;
            if (this.x == -30) {
                this.x = canvas.width + 50 ;
            } else if (this.y == -30) {
                this.y = canvas.height + 50 ;
            }
            else if (this.x == canvas.width + 50) {
                this.x = - 30 ;
            } else if (this.y == canvas.height + 50) {
                this.x = -30 ;
            }
        }
        else if (globalAnimatonType == "bendy") {
            //;
        }

        else if (globalAnimatonType == "mayham") {
            //;
            this.alterObject();
        }
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