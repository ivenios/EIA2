var endabgabe2;
(function (endabgabe2) {
    /*
    Aufgabe: Endabgabe
    Name: Iven Otis Sieglen
    Matrikel: 261012
    Datum: 04.08.2020
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    */
    class Triangle extends endabgabe2.PlaceableObjects {
        constructor() {
            super(); //;
        }
        renderObject() {
            endabgabe2.crc.beginPath();
            endabgabe2.crc.moveTo(this.x, this.y);
            endabgabe2.crc.lineTo(this.x + 25 * this.scale, this.y + 10 * this.scale);
            endabgabe2.crc.lineTo(this.x + 10 * this.scale, this.y + 25 * this.scale);
            endabgabe2.crc.closePath();
            endabgabe2.crc.fillStyle = this.color;
            endabgabe2.crc.fill();
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
    endabgabe2.Triangle = Triangle;
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=obj_triangel.js.map