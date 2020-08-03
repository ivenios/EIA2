
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
    // alle EventListener für die Buttons
    document.getElementById("circleButt").addEventListener("click", initPlaceCircle);
    document.getElementById("squareButt").addEventListener("click", initPlaceSquare);
    document.getElementById("triangleButt").addEventListener("click", initPlaceTriangel);
    document.getElementById("deleteObjectButt").addEventListener("click", initCanvas);  //das muss noch gemacht werden 
    document.getElementById("goBackToOverview").addEventListener("click", goBackToOverview);
    document.getElementById("deletePicture").addEventListener("click", deleteCanvas);
    document.getElementById("startAnim").addEventListener("click", startStopAnimation);
    document.getElementById("stopAnim").addEventListener("click", startStopAnimation);
    document.getElementById("animStyle").addEventListener("change", globalAnimationStyle);
    document.getElementById("savePicture").addEventListener("click", safePicture);


    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    console.log(canvasColor, canvasSizeX, canvasSizeY);
    canvas.width = canvasSizeX;
    canvas.height = canvasSizeY; 
    let canvasBG: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("canvas");
    canvasBG[0].style.transform = "background: " + canvasColor + ";";
    imgData = crc.getImageData(0, 0, canvas.width, canvas.height);
    // andere Möglichkeit die farbe der Canvas zu manipulieren

    //crc.fillStyle = canvasColor;
    //crc.fillRect(0, 0, canvas.width, canvas.height);
    //imgData = crc.getImageData(0, 0, canvas.width, canvas.height);

    renderCanvas();
    

    
    

    
// Now draw!

    


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

}

//Aubau der canvas Größe und der Farbe
export function renderCanvas(): void {
    if (placeableObjectsArray.length > 1 ) {
        imgData = crc.getImageData(0, 0, canvas.width, canvas.height);
        console.log("Rendering original Objects from array");
        
    }  

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
    squares.x = x;
    squares.y = y;
    squares.color = color;
    squares.scale = scale;

    placeableObjectsArray.push(squares);
    squares.renderObject();
    console.log(placeableObjectsArray);
}


//CIRCLE
function initPlaceCircle(): void {
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
    let circels: Circle = new Circle ();
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
        crc.globalCompositeOperation = "destination-over";
        crc.fillStyle = canvasColor;
        crc.fillRect(0, 0, canvas.width, canvas.height);
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