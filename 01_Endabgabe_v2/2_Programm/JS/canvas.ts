

namespace endabgabe2 {
/*
Aufgabe: Endabgabe
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 04.08.2020
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
*/


    //Dinge für die Canvas
export let crc: CanvasRenderingContext2D;
export let canvas: HTMLCanvasElement;
let fps: number = 30;
let imgData: ImageData;
export let placeableObjectsArray: PlaceableObjects[] = [];
let canvasInfo: CanvasData [] = []; //Array in welchem die aktuellen daten aus dem server gespeichert werden 
let animationCount: number = 1;
export let globalAnimatonType: string;
export let canvasColor: string;
export let canvasSizeX: number;
export let canvasSizeY: number;


//Trail init funkttion
//document.addEventListener("DOMContentLoaded", initCanvas);

export function initCanvas(): void {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    console.log(canvasColor, canvasSizeX, canvasSizeY);
    canvas.width = canvasSizeX;
    canvas.height = canvasSizeY; 
    canvas.style.backgroundColor = canvasColor; 
    // alle EventListener für die Buttons
    document.getElementById("circleButt").addEventListener("click", initPlaceCircle);
    document.getElementById("squareButt").addEventListener("click", initPlaceSquare);
    document.getElementById("triangleButt").addEventListener("click", initPlaceTriangel);
    document.getElementById("deleteObjectButt").addEventListener("click", initDeleteObject);  //das muss noch gemacht werden 
    document.getElementById("goBackToOverview").addEventListener("click", goBackToOverview);
    document.getElementById("deletePicture").addEventListener("click", deleteCanvas);
    document.getElementById("startAnim").addEventListener("click", startStopAnimation);
    document.getElementById("stopAnim").addEventListener("click", startStopAnimation);
    document.getElementById("animStyle").addEventListener("change", globalAnimationStyle);
    document.getElementById("savePicture").addEventListener("click", safePicture);
    document.getElementById("moverButt").addEventListener("click", initMover);





    //crc.fillStyle = canvasColor;
    //crc.fillRect(0, 0, canvas.width, canvas.height);
    //imgData = crc.getImageData(0, 0, canvas.width, canvas.height);
    imgData = crc.getImageData(0, 0, canvas.width, canvas.height);
    renderCanvas();


}


// CANVAS VERLASSEN
function goBackToOverview(): void {
    let confirmation: boolean = confirm("You are about to leave your artwork! Do you want to discard all chanches?");
    if (confirmation == true) {
        loadUserPictureOverview(); // hier geht es zurück zur User Bilder Übersicht 
        }
    } 


//BILD LÖSCHEN
function deleteCanvas(): void {
    let confirmation: boolean = confirm("You are about to delete your artwork! There is no going back!");
    if (confirmation == true) {
        crc.clearRect(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < placeableObjectsArray.length; i++) {
            placeableObjectsArray.splice(i);
        } 
        deleteCanvasFromDB();
        // Löschen Funktion in der Client.ts

    }
}

//BILD SPEICHERN
function safePicture(): void {
    console.log("Starting to safe Canvas");
    safePlaceableObjects(placeableObjectsArray);
    

}


//man benötigt noch eine Funktion, die die Canvas eventlistener immer zurücksetzt
function deletAllEventListeners(): void {
    canvas.removeEventListener("click", placeSquare);
    canvas.removeEventListener("click", placeCircle);
    canvas.removeEventListener("click", placeTriangel);
    canvas.removeEventListener("click", deleteObject);

}

//Aubau der bereitsplatzierten elemente auf der Canvas
export function renderCanvas(): void {
    if (placeableObjectsArray.length > 0 ) {
        crc.clearRect(0,  0, canvas.width, canvas.height);
        imgData = crc.getImageData(0, 0, canvas.width, canvas.height);
        console.log("Rendering original Objects from array");
        for (let i: number = 0; i < placeableObjectsArray.length; i++) {
            let cType: string = placeableObjectsArray[i].type;
            switch (cType) {
                case "squares":
                    let squares: Square = new Square ();
                    squares.type = "squares";
                    squares.x = placeableObjectsArray[i].x;
                    squares.y = placeableObjectsArray[i].y;
                    squares.color = "#" + placeableObjectsArray[i].color;
                    squares.scale = placeableObjectsArray[i].scale;
                    squares.renderObject();
                    break;

                case "triangels":
                    let triangels: Triangle = new Triangle ();
                    triangels.type = "triangels";
                    triangels.x = placeableObjectsArray[i].x;
                    triangels.y = placeableObjectsArray[i].y;
                    triangels.color = "#" + placeableObjectsArray[i].color;
                    triangels.scale = placeableObjectsArray[i].scale;
                    triangels.renderObject();
                    break;  

                case "circles":   
                    let circles: Circle = new Circle ();
                    circles.type = "circles";
                    circles.x = placeableObjectsArray[i].x;
                    circles.y = placeableObjectsArray[i].y;
                    circles.color = "#" + placeableObjectsArray[i].color;
                    circles.r = 17 * placeableObjectsArray[i].scale ;

                    circles.renderObject();
                    break;

                default:
                    break;
            }

        }
        
    }  

}

// Objekte Löschen: 
function initDeleteObject(): void {
    deletAllEventListeners();
    canvas.addEventListener("click", deleteObject);
    console.log("starting deleting mode");
}

function deleteObject(_event: MouseEvent): void { //the struggle is real 
    console.log("ready for deletion");
    console.log(_event.offsetX, _event.offsetY);
    
    let userPosX: number = _event.offsetX;
    let userPoxY: number = _event.offsetY;

    for (let i: number = 0; i < placeableObjectsArray.length; i++) {
        let cType: string = placeableObjectsArray[i].type;
        let cScale: number = placeableObjectsArray[i].scale;
        let ifSizeX: number =  0.5 * (cScale * 20);
        let ifSizeXm: number =  0.5 * (cScale * 20);
        let ifSizeY: number = 0.5 * (cScale * 20);
        let ifSizeYm: number = 0.5 *  (cScale * 20);  

        if (placeableObjectsArray[i].x - ifSizeX <= userPosX &&
            placeableObjectsArray[i].x + ifSizeXm >= userPosX &&
            placeableObjectsArray[i].y - ifSizeY <= userPoxY &&
            placeableObjectsArray[i].y + ifSizeYm >= userPoxY
            ) {
                console.log("i caught a object");
                placeableObjectsArray.splice(i, 1);
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

function initMover(): void {
    deletAllEventListeners();
    canvas.addEventListener("mousedown", startMover); //funktion ändert variable so, dass der moveObject variable bekannt ist, dass sie sachen bewegen darf ähnlich wie bei der Start stop animation 
    canvas.addEventListener("mouseup", stopMover); //verändert variable so, dass moveObject abbricht 
}

function startMover(): void {
    //;
    canvas.addEventListener("mousemove", moveObject);

}

function stopMover(): void {
    canvas.removeEventListener("mousemove", moveObject);
    //;
}

function moveObject(_event: MouseEvent): void {
    console.log("Look Iam moving", _event.offsetX, _event.offsetY);
    //;
}


 //SUQARE
function initPlaceSquare(): void {
    deletAllEventListeners();
    canvas.addEventListener("click", placeSquare);
}

function placeSquare(_event: MouseEvent): void {
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    console.log(inputs);
    console.log(_event);
    let x: number = _event.offsetX;
    let y: number = _event.offsetY;
    let color: string = inputs[0].value; 
    let scale: number = parseInt(inputs[1].value); 
    let squares: Square = new Square ();
    squares.type = "squares";
    squares.x = x;
    squares.y = y;
    squares.color = color;
    squares.scale = scale;

    placeableObjectsArray.push(squares);
    squares.renderObject();
    console.log(placeableObjectsArray);
}


//CIRCLE
export function initPlaceCircle(): void {
    deletAllEventListeners();
    canvas.addEventListener("click", placeCircle);
}

function placeCircle(_event: MouseEvent): void {
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    let color: string = inputs[0].value; 
    let scale: number = parseInt(inputs[1].value); 
    console.log(_event);
    let x: number = _event.offsetX;
    let y: number = _event.offsetY;
    let circles: Circle = new Circle ();
    circles.type = "circles";
    circles.x = x;
    circles.y = y;
    circles.color = color;
    circles.scale = scale; // das hier vergessen 
    // auf den Radius wird zwar im Array nicht drauf zugegriffen, aber speichert dennoch ab 
    circles.r = 17 * scale;
    //hier die farbe 
    //hier der Radius 
    placeableObjectsArray.push(circles);
    circles.renderObject();
    console.log(placeableObjectsArray);
}

//DREIECK
function initPlaceTriangel(): void {
    deletAllEventListeners();
    canvas.addEventListener("click", placeTriangel);
}

function placeTriangel(_event: MouseEvent): void {
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    let color: string = inputs[0].value; 
    let scale: number = parseInt(inputs[1].value); 
    console.log(_event);
    let x: number = _event.offsetX;
    let y: number = _event.offsetY;
    let triangels: Triangle = new Triangle ();
    triangels.type = "triangels";
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

//ANIMATION START UND STOP 

function startStopAnimation(): void {
    if (animationCount == 1) {
        console.log("Starting animation");
        animationCount ++;
        updateObject();
        
    }
    else if (animationCount > 1) {
        console.log("Stopping Animation");
        animationCount --;
        updateObject();
    }


}

function updateObject(): void {
    if (animationCount == 2) {
        window.setTimeout(updateObject, 1000 / fps, true);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imgData, 0, 0);
        //erneutes rendern der Hintergrund Farbe
        console.log("im Running");
        for (let i: number = 0; i < placeableObjectsArray.length; i++) {
        // console.log(placeableObjectsArray[i]);
            placeableObjectsArray[i].updateObject();
            }
    }
    else if (animationCount == 1) {
        window.setTimeout(updateObject, 1000 / fps, false);
        crc.getImageData(0, 0, canvas.width, canvas.height);
    }
}

function globalAnimationStyle(_event: Event): void {
    //console.log(_event.srcElement.value);
    //-globalAnimatonType = _event.srcElement.value;

}







}