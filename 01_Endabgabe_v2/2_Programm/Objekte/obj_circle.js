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
            circle.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            endabgabe2.crc.fillStyle = this.color;
            endabgabe2.crc.fill(circle);
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
    endabgabe2.Circle = Circle;
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=obj_circle.js.map