namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/

export class Circle extends MovingCompany {
    r: number; //radius


    constructor() {
        super(); //;
    }
    //crc.arc(x, y, radius, startAngle, endAngle, anticlockwise)
    renderObject(): void {
        crc.beginPath();
        //crc.globalCompositeOperation = "destination-over";
        crc.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        crc.fillStyle = this.color;
        crc.fill();
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
           // this.alterObject();
        }
    }

    alterObject(): void {
        //;
    }



}


    
}