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
    endabgabe2.placeableObjectsArray = [];
    let canvasInfo = []; //Array in welchem die aktuellen daten aus dem server gespeichert werden 
    let animationCount = 1;
    //Trail init funkttion
    //document.addEventListener("DOMContentLoaded", initCanvas);
    function initCanvas() {
        // alle EventListener für die Buttons
        document.getElementById("circleButt").addEventListener("click", initPlaceCircle);
        document.getElementById("squareButt").addEventListener("click", initPlaceSquare);
        document.getElementById("triangleButt").addEventListener("click", initPlaceTriangel);
        document.getElementById("deleteObjectButt").addEventListener("click", initCanvas); //das muss noch gemacht werden 
        document.getElementById("goBackToOverview").addEventListener("click", goBackToOverview);
        document.getElementById("deletePicture").addEventListener("click", deleteCanvas);
        document.getElementById("startAnim").addEventListener("click", startStopAnimation);
        document.getElementById("stopAnim").addEventListener("click", startStopAnimation);
        document.getElementById("animStyle").addEventListener("change", globalAnimationStyle);
        document.getElementById("savePicture").addEventListener("click", safePicture);
        endabgabe2.canvas = document.getElementsByTagName("canvas")[0];
        endabgabe2.crc = endabgabe2.canvas.getContext("2d");
        imgData = endabgabe2.crc.getImageData(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
        // Hier muss dann die Zahl eingetragen werden, die vom Server gezogen wird:
        endabgabe2.canvas.width = 1330;
        endabgabe2.canvas.height = 750;
        drawBackground();
    }
    endabgabe2.initCanvas = initCanvas;
    // CANVAS VERLASSEN
    function goBackToOverview() {
        let confirmation = confirm("You are about to leave your artwork! Do you want to discard all chanches?");
        if (confirmation == true) {
            endabgabe2.loadUserPictureOverview(); // hier geht es zurück zur User Bilder Übersicht 
        }
    }
    //BILD LÖSCHEN
    function deleteCanvas() {
        let confirmation = confirm("You are about to delete your artwork! There is no going back!");
        if (confirmation == true) {
            endabgabe2.crc.clearRect(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
            for (let i = 0; i < endabgabe2.placeableObjectsArray.length; i++) {
                endabgabe2.placeableObjectsArray.splice(i);
            }
            endabgabe2.deleteCanvasFromDB();
            // Löschen Funktion in der Client.ts
        }
    }
    //BILD SPEICHERN
    function safePicture() {
        console.log("Starting to safe Canvas");
        endabgabe2.safePlaceableObjects(endabgabe2.placeableObjectsArray);
    }
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
        endabgabe2.placeableObjectsArray.push(squares);
        squares.renderObject();
        console.log(endabgabe2.placeableObjectsArray);
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
        endabgabe2.placeableObjectsArray.push(circels);
        circels.renderObject();
        console.log(endabgabe2.placeableObjectsArray);
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
        endabgabe2.placeableObjectsArray.push(triangels);
        triangels.renderObject();
        console.log(endabgabe2.placeableObjectsArray);
    }
    //ANIMATION START UND STOP 
    function startStopAnimation() {
        if (animationCount == 1) {
            console.log("Starting animation");
            animationCount++;
            updateObject();
        }
        else if (animationCount > 1) {
            console.log("Stopping Animation");
            animationCount--;
            updateObject();
        }
    }
    function updateObject() {
        if (animationCount == 2) {
            window.setTimeout(updateObject, 1000 / fps, true);
            endabgabe2.crc.clearRect(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
            endabgabe2.crc.putImageData(imgData, 0, 0);
            console.log("im Running");
            for (let i = 0; i < endabgabe2.placeableObjectsArray.length; i++) {
                // console.log(placeableObjectsArray[i]);
                endabgabe2.placeableObjectsArray[i].updateObject();
            }
        }
        else if (animationCount == 1) {
            window.setTimeout(updateObject, 1000 / fps, false);
            endabgabe2.crc.getImageData(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
        }
    }
    function globalAnimationStyle(_event) {
        //console.log(_event.srcElement.value);
        //-globalAnimatonType = _event.srcElement.value;
    }
})(endabgabe2 || (endabgabe2 = {}));
//# sourceMappingURL=canvas.js.map