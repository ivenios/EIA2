var endabgabe2;
(function (endabgabe2) {
    /*
    Aufgabe: Endabgabe
    Name: Iven Otis Sieglen
    Matrikel: 261012
    Datum: 04.08.2020
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    */
    class Circle extends endabgabe2.PlaceableObjects {
        constructor() {
            super(); //;
        }
        //crc.arc(x, y, radius, startAngle, endAngle, anticlockwise)
        renderObject() {
            let circle = new Path2D();
            endabgabe2.crc.globalCompositeOperation = "destination-over";
            circle.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            endabgabe2.crc.fillStyle = this.color;
            endabgabe2.crc.fill(circle);
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
    endabgabe2.Circle = Circle;
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=obj_circle.js.map