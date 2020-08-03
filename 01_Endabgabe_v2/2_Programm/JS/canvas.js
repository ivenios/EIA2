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
        endabgabe2.canvas = document.getElementsByTagName("canvas")[0];
        endabgabe2.crc = endabgabe2.canvas.getContext("2d");
        console.log(endabgabe2.canvasColor, endabgabe2.canvasSizeX, endabgabe2.canvasSizeY);
        endabgabe2.canvas.width = endabgabe2.canvasSizeX;
        endabgabe2.canvas.height = endabgabe2.canvasSizeY;
        // alle EventListener für die Buttons
        document.getElementById("circleButt").addEventListener("click", initPlaceCircle);
        document.getElementById("squareButt").addEventListener("click", initPlaceSquare);
        document.getElementById("triangleButt").addEventListener("click", initPlaceTriangel);
        document.getElementById("deleteObjectButt").addEventListener("click", initDeleteObject); //das muss noch gemacht werden 
        document.getElementById("goBackToOverview").addEventListener("click", goBackToOverview);
        document.getElementById("deletePicture").addEventListener("click", deleteCanvas);
        document.getElementById("startAnim").addEventListener("click", startStopAnimation);
        document.getElementById("stopAnim").addEventListener("click", startStopAnimation);
        document.getElementById("animStyle").addEventListener("change", globalAnimationStyle);
        document.getElementById("savePicture").addEventListener("click", safePicture);
        document.getElementById("moverButt").addEventListener("click", initMover);
        let canvasBG = document.getElementsByTagName("canvas");
        if (canvasBG.length != 0) {
            canvasBG[0].style.transform = "background=" + endabgabe2.canvasColor + ";";
        }
        //crc.fillStyle = canvasColor;
        //crc.fillRect(0, 0, canvas.width, canvas.height);
        //imgData = crc.getImageData(0, 0, canvas.width, canvas.height);
        imgData = endabgabe2.crc.getImageData(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
        renderCanvas();
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
        endabgabe2.canvas.removeEventListener("click", deleteObject);
    }
    //Aubau der bereitsplatzierten elemente auf der Canvas
    function renderCanvas() {
        if (endabgabe2.placeableObjectsArray.length > 1) {
            endabgabe2.crc.clearRect(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
            imgData = endabgabe2.crc.getImageData(0, 0, endabgabe2.canvas.width, endabgabe2.canvas.height);
            console.log("Rendering original Objects from array");
            for (let i = 0; i < endabgabe2.placeableObjectsArray.length; i++) {
                let cType = endabgabe2.placeableObjectsArray[i].type;
                switch (cType) {
                    case "squares":
                        let squares = new endabgabe2.Square();
                        squares.type = "squares";
                        squares.x = endabgabe2.placeableObjectsArray[i].x;
                        squares.y = endabgabe2.placeableObjectsArray[i].y;
                        squares.color = "#" + endabgabe2.placeableObjectsArray[i].color;
                        squares.scale = endabgabe2.placeableObjectsArray[i].scale;
                        squares.renderObject();
                        break;
                    case "triangels":
                        let triangels = new endabgabe2.Triangle();
                        triangels.type = "triangels";
                        triangels.x = endabgabe2.placeableObjectsArray[i].x;
                        triangels.y = endabgabe2.placeableObjectsArray[i].y;
                        triangels.color = "#" + endabgabe2.placeableObjectsArray[i].color;
                        triangels.scale = endabgabe2.placeableObjectsArray[i].scale;
                        triangels.renderObject();
                        break;
                    case "circles":
                        let circles = new endabgabe2.Circle();
                        circles.type = "circles";
                        circles.x = endabgabe2.placeableObjectsArray[i].x;
                        circles.y = endabgabe2.placeableObjectsArray[i].y;
                        circles.color = "#" + endabgabe2.placeableObjectsArray[i].color;
                        circles.r = 17 * endabgabe2.placeableObjectsArray[i].scale;
                        circles.renderObject();
                        break;
                    default:
                        break;
                }
            }
        }
    }
    endabgabe2.renderCanvas = renderCanvas;
    // Objekte Löschen: 
    function initDeleteObject() {
        deletAllEventListeners();
        endabgabe2.canvas.addEventListener("click", deleteObject);
        console.log("starting deleting mode");
    }
    function deleteObject(_event) {
        console.log("ready for deletion");
        console.log(_event.offsetX, _event.offsetY);
        let userPosX = _event.offsetX;
        let userPoxY = _event.offsetY;
        for (let i = 0; i < endabgabe2.placeableObjectsArray.length; i++) {
            let cType = endabgabe2.placeableObjectsArray[i].type;
            let cScale = endabgabe2.placeableObjectsArray[i].scale;
            let ifSizeX = 0.5 * (cScale * 15);
            let ifSizeXm = 0.5 * (cScale * 15);
            let ifSizeY = 0.5 * (cScale * 15);
            let ifSizeYm = 0.5 * (cScale * 15);
            if (endabgabe2.placeableObjectsArray[i].x - ifSizeX <= userPosX &&
                endabgabe2.placeableObjectsArray[i].x + ifSizeXm >= userPosX &&
                endabgabe2.placeableObjectsArray[i].y - ifSizeY <= userPoxY &&
                endabgabe2.placeableObjectsArray[i].y + ifSizeYm >= userPoxY) {
                console.log("i caught a object");
                endabgabe2.placeableObjectsArray.splice(i, 1);
                renderCanvas();
            }
            /* das geht iwie net
            
               
            console.log(i, ifSizeX);
            console.log(i, ifSizeXm);
            console.log(i, ifSizeY);
            console.log(i, ifSizeYm);
            switch (cType) {
                case "squares":
                    if ( _event.offsetX >= ifSizeX && _event.offsetX <= ifSizeXm && _event.offsetY >= ifSizeY && _event.offsetY <= ifSizeYm) {
                        console.log("deleting Square");
                        placeableObjectsArray.splice(i, 1);
                        renderCanvas();
                    }
                    
                    break;
    
                case "triangels":
                    if (_event.offsetX >= ifSizeX && _event.offsetX <= ifSizeXm && _event.offsetY >= ifSizeY && _event.offsetY <= ifSizeYm) {
                        console.log("deleting triangel");
                        placeableObjectsArray.splice(i, 1);
                        renderCanvas();
                    }
                    
                    
                    break;
    
                case "circles":
                    if (_event.offsetX >= ifSizeX && _event.offsetX <= ifSizeXm && _event.offsetY >= ifSizeY && _event.offsetY <= ifSizeYm) {
                        console.log("deleting circle");
                        placeableObjectsArray.splice(i, 1);
                        renderCanvas();
                    }
    
                    break;
    
                default:
                    break;
            }
        //; */
        }
    }
    //Funktion zum bewegen der Objekte
    function initMover() {
        deletAllEventListeners();
        endabgabe2.canvas.addEventListener("mousedown", startMover); //funktion ändert variable so, dass der moveObject variable bekannt ist, dass sie sachen bewegen darf ähnlich wie bei der Start stop animation 
        endabgabe2.canvas.addEventListener("mouseup", stopMover); //verändert variable so, dass moveObject abbricht 
    }
    function startMover() {
        //;
        endabgabe2.canvas.addEventListener("mousemove", moveObject);
    }
    function stopMover() {
        endabgabe2.canvas.removeEventListener("mousemove", moveObject);
        //;
    }
    function moveObject(_event) {
        console.log("Look Iam moving", _event.offsetX, _event.offsetY);
        //;
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
        squares.type = "squares";
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
    endabgabe2.initPlaceCircle = initPlaceCircle;
    function placeCircle(_event) {
        let inputs = document.getElementsByTagName("input");
        let color = inputs[0].value;
        let scale = parseInt(inputs[1].value);
        console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let circles = new endabgabe2.Circle();
        circles.type = "circles";
        circles.x = x;
        circles.y = y;
        circles.color = color;
        circles.scale = scale; // das hier vergessen 
        // auf den Radius wird zwar im Array nicht drauf zugegriffen, aber speichert dennoch ab 
        circles.r = 17 * scale;
        //hier die farbe 
        //hier der Radius 
        endabgabe2.placeableObjectsArray.push(circles);
        circles.renderObject();
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
        triangels.type = "triangels";
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
            //erneutes rendern der Hintergrund Farbe
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