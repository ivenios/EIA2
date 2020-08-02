var endabgabe2;
(function (endabgabe2) {
    /*
    Aufgabe: Endabgabe
    Name: Iven Otis Sieglen
    Matrikel: 261012
    Datum: 04.08.2020
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    */
    class Square {
        constructor() {
            //;
        }
        renderObject() {
            let square = new Path2D();
            square.arc(this.x, this.y, 50, 50, Math.PI);
            endabgabe2.crc.fillStyle = "black";
            endabgabe2.crc.fill(square);
        }
        animateObject() {
            //; 
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