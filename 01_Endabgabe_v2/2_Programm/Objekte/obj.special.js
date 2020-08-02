var endabgabe2;
(function (endabgabe2) {
    /*
    Aufgabe: Endabgabe
    Name: Iven Otis Sieglen
    Matrikel: 261012
    Datum: 04.08.2020
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    */
    class Special extends endabgabe2.PlaceableObjects {
        constructor() {
            super(); //;
        }
        renderObject() {
            endabgabe2.crc.beginPath();
            endabgabe2.crc.moveTo(75, 40);
            endabgabe2.crc.bezierCurveTo(75, 37, 70, 25, 50, 25);
            endabgabe2.crc.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            endabgabe2.crc.bezierCurveTo(20, 80, 40, 102, 75, 120);
            endabgabe2.crc.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            endabgabe2.crc.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            endabgabe2.crc.bezierCurveTo(85, 25, 75, 37, 75, 40);
            endabgabe2.crc.fill();
            endabgabe2.crc.closePath();
        }
        animateObject() {
            //;
        }
        alterObject() {
            //;
        }
        updateObject() {
            //;
        }
    }
    endabgabe2.Special = Special;
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=obj.special.js.map