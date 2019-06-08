var L10;
(function (L10) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let iceArray = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        L10.crc = canvas.getContext("2d");
        drawBackground();
        imageData = L10.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 10 - 5;
            let dy = Math.random() * 10 - 5;
            let ice;
            ice = new L10.IceCone();
            ice.x = x;
            ice.y = y;
            ice.dx = dx;
            ice.dy = dy;
            ice.color = randomColor();
            iceArray.push(ice);
            ice.draw();
            console.log(ice);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        L10.crc.clearRect(0, 0, canvas.width, canvas.height);
        L10.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < iceArray.length; i++) {
            iceArray[i].update();
        }
    }
    function randomColor() {
        return "hsl(" + Math.random() * 360 + ", 80%, 80%)";
    }
    function drawBackground() {
        //sky
        L10.crc.fillStyle = "#08f";
        L10.crc.fillRect(0, 0, canvas.width, canvas.height);
        L10.crc.fillStyle = "#f39f18";
        let sun = new Path2D();
        sun.arc(550, 50, 30, 0, 2 * Math.PI);
        L10.crc.fill(sun);
        //street
        L10.crc.fillStyle = "#808080";
        L10.crc.fillRect(0, 300, canvas.width, 100);
        L10.crc.fillStyle = "#fff";
        for (let i = 0; i < 8; i++) {
            L10.crc.fillRect(10 + 80 * i, 345, 40, 10);
        }
        //truck
        let tire = new Path2D();
        let x = 200;
        let y = 320;
        tire.arc(x - 75, y - 25, 25, 0, 2 * Math.PI);
        tire.arc(x + 75, y - 25, 25, 0, 2 * Math.PI);
        L10.crc.fillStyle = "#000";
        L10.crc.fill(tire);
        tire = new Path2D();
        tire.arc(x - 75, y - 25, 12, 0, 2 * Math.PI);
        tire.arc(x + 75, y - 25, 12, 0, 2 * Math.PI);
        L10.crc.fillStyle = "#f7c8dd";
        L10.crc.fill(tire);
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
        L10.crc.fillStyle = "#73daf2";
        L10.crc.fill(truck);
        truck = new Path2D();
        truck.moveTo(x - 125, y - 60);
        truck.lineTo(x - 125, y - 150);
        truck.lineTo(x + 125, y - 150);
        truck.bezierCurveTo(x + 125, y - 150, x + 140, y - 130, x + 140, y - 75);
        truck.bezierCurveTo(x + 140, y - 75, x + 140, y - 60, x + 155, y - 60);
        truck.closePath();
        L10.crc.fillStyle = "#fefefe";
        L10.crc.fill(truck);
        let truckWindow = new Path2D();
        truckWindow.moveTo(x + 75, y - 75);
        truckWindow.lineTo(x + 75, y - 140);
        truckWindow.lineTo(x + 115, y - 140);
        truckWindow.bezierCurveTo(x + 115, y - 140, x + 130, y - 130, x + 130, y - 75);
        truckWindow.closePath();
        L10.crc.fillStyle = "#acdfe6";
        L10.crc.fill(truckWindow);
        truckWindow = new Path2D();
        truckWindow.rect(x + 10, y - 140, 50, 65);
        L10.crc.fillStyle = "#f7c8dd";
        L10.crc.fill(truckWindow);
        truckWindow = new Path2D();
        truckWindow.rect(x - 110, y - 140, 100, 65);
        L10.crc.fillStyle = "#acdfe6";
        L10.crc.fill(truckWindow);
        let truckLines = new Path2D();
        truckLines.moveTo(x - 125, y - 65);
        truckLines.lineTo(x + 145, y - 65);
        L10.crc.strokeStyle = "hotpink";
        L10.crc.lineWidth = 5;
        L10.crc.lineCap = "round";
        L10.crc.stroke(truckLines);
        truckLines = new Path2D();
        truckLines.moveTo(x - 110, y - 75);
        truckLines.lineTo(x - 10, y - 75);
        L10.crc.lineWidth = 5;
        L10.crc.stroke(truckLines);
        truckLines = new Path2D();
        truckLines.moveTo(x - 125, y - 150);
        truckLines.lineTo(x + 125, y - 150);
        L10.crc.lineWidth = 10;
        L10.crc.strokeStyle = "#f7c8dd";
        L10.crc.stroke(truckLines);
    }
})(L10 || (L10 = {}));
//# sourceMappingURL=canvas.js.map