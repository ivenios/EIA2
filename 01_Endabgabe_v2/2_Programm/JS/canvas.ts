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
let placeableObjectsArray: PlaceableObjects[] = [];

//Trail init funkttion
document.addEventListener("DOMContentLoaded", initCanvas);

export function initCanvas(): void {
    // alle EventListener für die Buttons
    document.getElementById("squareButt").addEventListener("click", initCanvas);
    document.getElementById("squareButt").addEventListener("click", initCanvas);
    document.getElementById("squareButt").addEventListener("click", initCanvas);
    document.getElementById("squareButt").addEventListener("click", initCanvas);
    document.getElementById("squareButt").addEventListener("click", initCanvas);


    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    imgData = crc.getImageData(0, 0, canvas.width, canvas.height);
    // Hier muss dann die Zahl eingetragen werden, die vom Server gezogen wird:
    canvas.width = 1330;
    canvas.height = 750;

    drawBackground();


}

function drawBackground(): void {
    let eau: Path2D = new Path2D();
    eau.rect(0, 0, 1330, 750);
    crc.fillStyle = "#92D1FF";
    crc.strokeStyle = "#92D1FF";
    crc.fill(eau);
    crc.stroke(eau);

    let sol: Path2D = new Path2D();
    sol.rect(0, 600, 1330, 150);
    crc.fillStyle = "#B3B237";
    crc.strokeStyle = "#B3B237";
    crc.fill(sol);
    crc.stroke(sol);
}

function updateObject(): void {
    window.setTimeout(updateObject, 1000 / fps);
    crc.clearRect(0, 0, canvas.width, canvas.height);
    crc.putImageData(imgData, 0, 0);

    for (let i: number = 0; i < placeableObjectsArray.length; i++) {
        console.log(placeableObjectsArray[i]);
        placeableObjectsArray[i].updateObject();
    }

}


}