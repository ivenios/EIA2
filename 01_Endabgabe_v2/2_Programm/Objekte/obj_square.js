var endabgabe2;
(function (endabgabe2) {
    /*
    Aufgabe: Endabgabe
    Name: Iven Otis Sieglen
    Matrikel: 261012
    Datum: 04.08.2020
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    */
    class Square extends endabgabe2.PlaceableObjects {
        constructor() {
            super(); //;
        }
        renderObject() {
            let square = new Path2D();
            //crc.globalCompositeOperation = "destination-over";
            endabgabe2.crc.fillRect(this.x, this.y, this.scale * 15, this.scale * 15);
            endabgabe2.crc.fillStyle = this.color;
            endabgabe2.crc.fill(square);
        }
        animateObject() {
            if (endabgabe2.globalAnimatonType == "slow") {
                this.x -= Math.random() * (-7 - 3) + 3;
                this.y += Math.random() * (6 - 2) + 2;
                if (this.x == -30) {
                    this.x = endabgabe2.canvas.width + 50;
                }
                else if (this.y == -30) {
                    this.y = endabgabe2.canvas.height + 50;
                }
                else if (this.x == endabgabe2.canvas.width + 50) {
                    this.x = -30;
                }
                else if (this.y == endabgabe2.canvas.height + 50) {
                    this.x = -30;
                }
            }
            else if (endabgabe2.globalAnimatonType == "stig") {
                this.x -= Math.random() * (-7 - 3) + 3;
                this.y += Math.random() * (6 - 2) + 2;
                if (this.x == -30) {
                    this.x = endabgabe2.canvas.width + 50;
                }
                else if (this.y == -30) {
                    this.y = endabgabe2.canvas.height + 50;
                }
                else if (this.x == endabgabe2.canvas.width + 50) {
                    this.x = -30;
                }
                else if (this.y == endabgabe2.canvas.height + 50) {
                    this.x = -30;
                }
            }
            else if (endabgabe2.globalAnimatonType == "bendy") {
                //;
            }
            else if (endabgabe2.globalAnimatonType == "mayham") {
                //;
                this.alterObject();
            }
        }
        alterObject() {
            //;
        }
        updateObject() {
            this.renderObject();
            this.animateObject();
            this.alterObject();
        }
    }
    endabgabe2.Square = Square;
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=obj_square.js.map