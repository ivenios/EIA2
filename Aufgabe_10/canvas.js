var L09;
(function (L09) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawIcecone(x, y);
        }
    }
    function drawIcecone(_x, _y) {
        let waffle = new Path2D();
        waffle.moveTo(_x - 50, _y - 100);
        waffle.lineTo(_x, _y);
        waffle.lineTo(_x + 50, _y - 100);
        waffle.closePath();
        crc.fillStyle = "peru";
        crc.fill(waffle);
        crc.stroke(waffle);
        let ice = new Path2D();
        ice.arc(_x, _y - 100, 50, Math.PI, 2 * Math.PI);
        crc.fillStyle = "red";
        crc.fill(ice);
        crc.stroke(ice);
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=canvas.js.map