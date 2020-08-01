var endabgabe2;
(function (endabgabe2) {
    /*
    Aufgabe: Endabgabe
    Name: Iven Otis Sieglen
    Matrikel: 261012
    Datum: 04.08.2020
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
    */
    let fps = 30;
    let imgData;
    let placeableObjectsArray = [];
    //Trail init funkttion
    document.addEventListener("DOMContentLoaded", initCanvas);
    function initCanvas() {
        // alle EventListener für die Buttons
        document.getElementById("squareButt").addEventListener("click", initCanvas);
        document.getElementById("squareButt").addEventListener("click", initCanvas);
        document.getElementById("squareButt").addEventListener("click", initCanvas);
        document.getElementById("squareButt").addEventListener("click", initCanvas);
        document.getElementById("squareButt").addEventListener("click", initCanvas);
        endabgabe2.canvas = document.getElementsByTagName("canvas")[0];
        endabgabe2.crc = endabgabe2.canvas.getContext("2d");
        imgData = endabgabe2.crc.getImageData(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
        // Hier muss dann die Zahl eingetragen werden, die vom Server gezogen wird:
        endabgabe2.canvas.width = 1330;
        endabgabe2.canvas.height = 750;
        drawBackground();
    }
    endabgabe2.initCanvas = initCanvas;
    function drawBackground() {
        let eau = new Path2D();
        eau.rect(0, 0, 1330, 750);
        endabgabe2.crc.fillStyle = "#92D1FF";
        endabgabe2.crc.strokeStyle = "#92D1FF";
        endabgabe2.crc.fill(eau);
        endabgabe2.crc.stroke(eau);
        let sol = new Path2D();
        sol.rect(0, 600, 1330, 150);
        endabgabe2.crc.fillStyle = "#B3B237";
        endabgabe2.crc.strokeStyle = "#B3B237";
        endabgabe2.crc.fill(sol);
        endabgabe2.crc.stroke(sol);
    }
    function updateObject() {
        window.setTimeout(updateObject, 1000 / fps);
        endabgabe2.crc.clearRect(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
        endabgabe2.crc.putImageData(imgData, 0, 0);
        for (let i = 0; i < placeableObjectsArray.length; i++) {
            console.log(placeableObjectsArray[i]);
            placeableObjectsArray[i].updateObject();
        }
    }
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=canvas.js.map