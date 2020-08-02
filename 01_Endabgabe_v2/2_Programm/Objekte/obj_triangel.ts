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