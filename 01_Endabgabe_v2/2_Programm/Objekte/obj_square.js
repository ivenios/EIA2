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
            endabgabe2.crc.fillRect(this.x, this.y, 100, 100);
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