var L11;
(function (L11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let iceArray = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        L11.crc = canvas.getContext("2d");
        drawBackground();
        imageData = L11.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 3; i++) {
            let ice = new L11.IceConeTwoScoops("red");
            iceArray.push(ice);
        }
        for (let i = 0; i < 3; i++) {
            let ice = new L11.IceCone("blue");
            iceArray.push(ice);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        L11.crc.clearRect(0, 0, canvas.width, canvas.height);
        L11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < iceArray.length; i++) {
            iceArray[i].update();
        }
    }
    function randomColor() {
        return "hsl(" + Math.random() * 360 + ", 80%, 80%)";
    }
    L11.randomColor = randomColor;
    function drawBackground() {
        //sky
        L11.crc.fillStyle = "#08f";
        L11.crc.fillRect(0, 0, canvas.width, canvas.height);
        L11.crc.fillStyle = "#f39f18";
        let sun = new Path2D();
        sun.arc(550, 50, 30, 0, 2 * Math.PI);
        L11.crc.fill(sun);
        //street
        L11.crc.fillStyle = "#808080";
        L11.crc.fillRect(0, 300, canvas.width, 100);
        L11.crc.fillStyle = "#fff";
        for (let i = 0; i < 8; i++) {
            L11.crc.fillRect(10 + 80 * i, 345, 40, 10);
        }
        //truck
        let tire = new Path2D();
        let x = 200;
        let y = 320;
        tire.arc(x - 75, y - 25, 25, 0, 2 * Math.PI);
        tire.arc(x + 75, y - 25, 25, 0, 2 * Math.PI);
        L11.crc.fillStyle = "#000";
        L11.crc.fill(tire);
        tire = new Path2D();
        tire.arc(x - 75, y - 25, 12, 0, 2 * Math.PI);
        tire.arc(x + 75, y - 25, 12, 0, 2 * Math.PI);
        L11.crc.fillStyle = "#f7c8dd";
        L11.crc.fill(tire);
        let truck = new Path2D();
        truck.moveTo(x - 125, y - 60);
        truck.lineTo(x + 155, y - 60);
        truck.quadraticCurveTo(x + 160, y - 37.5, x + 155, y - 25);
        truck.lineTo(x + 105, y - 25);
        truck.bezierCurveTo(x + 105, y - 60, x + 45, y - 60, x + 45, y - 25);
        truck.lineTo(x - 45, y - 25);
        truck.bezierCurveTo(x - 45, y - 60, x - 105, y - 60, x - 105, y - 25);
        truck.lineTo(x - 125, y - 25);
        truck.closePath();
        L11.crc.fillStyle = "#73daf2";
        L11.crc.fill(truck);
        truck = new Path2D();
        truck.moveTo(x - 125, y - 60);
        truck.lineTo(x - 125, y - 150);
        truck.lineTo(x + 125, y - 150);
        truck.bezierCurveTo(x + 125, y - 150, x + 140, y - 130, x + 140, y - 75);
        truck.bezierCurveTo(x + 140, y - 75, x + 140, y - 60, x + 155, y - 60);
        truck.closePath();
        L11.crc.fillStyle = "#fefefe";
        L11.crc.fill(truck);
        let truckWindow = new Path2D();
        truckWindow.moveTo(x + 75, y - 75);
        truckWindow.lineTo(x + 75, y - 140);
        truckWindow.lineTo(x + 115, y - 140);
        truckWindow.bezierCurveTo(x + 115, y - 140, x + 130, y - 130, x + 130, y - 75);
        truckWindow.closePath();
        L11.crc.fillStyle = "#acdfe6";
        L11.crc.fill(truckWindow);
        truckWindow = new Path2D();
        truckWindow.rect(x + 10, y - 140, 50, 65);
        L11.crc.fillStyle = "#f7c8dd";
        L11.crc.fill(truckWindow);
        truckWindow = new Path2D();
        truckWindow.rect(x - 110, y - 140, 100, 65);
        L11.crc.fillStyle = "#acdfe6";
        L11.crc.fill(truckWindow);
        let truckLines = new Path2D();
        truckLines.moveTo(x - 125, y - 65);
        truckLines.lineTo(x + 145, y - 65);
        L11.crc.strokeStyle = "hotpink";
        L11.crc.lineWidth = 5;
        L11.crc.lineCap = "round";
        L11.crc.stroke(truckLines);
        truckLines = new Path2D();
        truckLines.moveTo(x - 110, y - 75);
        truckLines.lineTo(x - 10, y - 75);
        L11.crc.lineWidth = 5;
        L11.crc.stroke(truckLines);
        truckLines = new Path2D();
        truckLines.moveTo(x - 125, y - 150);
        truckLines.lineTo(x + 125, y - 150);
        L11.crc.lineWidth = 10;
        L11.crc.strokeStyle = "#f7c8dd";
        L11.crc.stroke(truckLines);
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=canvas.js.map