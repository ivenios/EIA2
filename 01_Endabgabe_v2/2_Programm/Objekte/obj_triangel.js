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
            endabgabe2.crc.lineTo(this.x + 125, this.y + 45);
            endabgabe2.crc.lineTo(this.x + 45, this.y + 125);
            endabgabe2.crc.closePath();
            endabgabe2.crc.fill();
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
    endabgabe2.Triangle = Triangle;
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=obj_triangel.js.map