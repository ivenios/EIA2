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
    let canvasInfo = []; //Array in welchem die aktuellen daten aus dem server gespeichert werden 
    //Trail init funkttion
    document.addEventListener("DOMContentLoaded", initCanvas);
    function initCanvas() {
        // alle EventListener für die Buttons
        document.getElementById("circleButt").addEventListener("click", initPlaceCircle);
        document.getElementById("squareButt").addEventListener("click", initPlaceSquare);
        document.getElementById("triangleButt").addEventListener("click", initPlaceTriangel);
        document.getElementById("deleteButt").addEventListener("click", initCanvas);
        //document.getElementById("squareButt").addEventListener("click", initCanvas);
        endabgabe2.canvas = document.getElementsByTagName("canvas")[0];
        endabgabe2.crc = endabgabe2.canvas.getContext("2d");
        imgData = endabgabe2.crc.getImageData(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
        // Hier muss dann die Zahl eingetragen werden, die vom Server gezogen wird:
        endabgabe2.canvas.width = 1330;
        endabgabe2.canvas.height = 750;
        drawBackground();
    }
    endabgabe2.initCanvas = initCanvas;
    //man benötigt noch eine Funktion, die die Canvas eventlistener immer zurücksetzt
    function deletAllEventListeners() {
        endabgabe2.canvas.removeEventListener("click", placeSquare);
        endabgabe2.canvas.removeEventListener("click", placeCircle);
        endabgabe2.canvas.removeEventListener("click", placeTriangel);
    }
    function drawBackground() {
        let backrgound = new Path2D();
        backrgound.rect(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
        endabgabe2.crc.fillStyle = "#92D1FF";
        endabgabe2.crc.strokeStyle = "#92D1FF";
        endabgabe2.crc.fill(backrgound);
    }
    //function updateObject(): void {
    //   window.setTimeout(time, 1000 / fps);
    //    crc.clearRect(0, 0, canvas.width, canvas.height);
    //   crc.putImageData(imgData, 0, 0);
    //
    //   for (let i: number = 0; i < placeableObjectsArray.length; i++) {
    //       console.log(placeableObjectsArray[i]);
    //     placeableObjectsArray[i].updateObject();
    //   }
    //}
    //SUQARE
    function initPlaceSquare() {
        deletAllEventListeners();
        endabgabe2.canvas.addEventListener("click", placeSquare);
    }
    function placeSquare(_event) {
        let inputs = document.getElementsByTagName("input");
        console.log(inputs);
        console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let color = inputs[0].value;
        let scale = parseInt(inputs[1].value);
        let squares = new endabgabe2.Square();
        squares.x = x;
        squares.y = y;
        squares.color = color;
        squares.scale = scale;
        placeableObjectsArray.push(squares);
        squares.renderObject();
        console.log(placeableObjectsArray);
    }
    //CIRCLE
    function initPlaceCircle() {
        deletAllEventListeners();
        endabgabe2.canvas.addEventListener("click", placeCircle);
    }
    function placeCircle(_event) {
        let inputs = document.getElementsByTagName("input");
        let color = inputs[0].value;
        let scale = parseInt(inputs[1].value);
        console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let circels = new endabgabe2.Circle();
        circels.x = x;
        circels.y = y;
        circels.color = color;
        circels.r = 17 * scale;
        //hier die farbe 
        //hier der Radius 
        placeableObjectsArray.push(circels);
        circels.renderObject();
        console.log(placeableObjectsArray);
    }
    //DREIECK
    function initPlaceTriangel() {
        deletAllEventListeners();
        endabgabe2.canvas.addEventListener("click", placeTriangel);
    }
    function placeTriangel(_event) {
        let inputs = document.getElementsByTagName("input");
        let color = inputs[0].value;
        let scale = parseInt(inputs[1].value);
        console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let triangels = new endabgabe2.Triangle();
        triangels.x = x;
        triangels.y = y;
        triangels.color = color;
        triangels.scale = scale;
        //hier die farbe 
        //hier der Radius 
        placeableObjectsArray.push(triangels);
        triangels.renderObject();
        console.log(placeableObjectsArray);
    }
    // Spezial
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=canvas.js.map