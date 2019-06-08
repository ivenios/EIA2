/*was wir alles brauchen (aus dem Konzept herausgenommen)
    _Hintergrund (immer gleich)
    _Fische (Vom aussehen immer gleich)
    _Position der Fische (Mathematisch immer unterschiedlich, aber in bestimmten berreichen)
    _Luftblasen (vom Aussehen immer gleich)
    _Position der Luftblasen (immer unterschiedlich)
    _Algen (vom aussehen immer gleich)
    _Position der Algen (immer unterschiedlich)

*/
var iLikeToMoveItMoveIt;
(function (iLikeToMoveItMoveIt) {
    document.addEventListener("DOMContentLoaded", init);
    let fish1Array = [];
    let fish2Array = [];
    let bubbleArray = [];
    let fps = 30;
    let imgData;
    function init() {
        iLikeToMoveItMoveIt.canvas = document.getElementsByTagName("canvas")[0];
        iLikeToMoveItMoveIt.crc = iLikeToMoveItMoveIt.canvas.getContext("2d");
        drawBackground();
        imgData = iLikeToMoveItMoveIt.crc.getImageData(0, 0, iLikeToMoveItMoveIt.canvas.width, iLikeToMoveItMoveIt.canvas.height);
        //Fish1
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * iLikeToMoveItMoveIt.canvas.width;
            let y = Math.random() * iLikeToMoveItMoveIt.canvas.height;
            let dx = Math.random() * 10 - 5;
            let dy = Math.random() * 10 - 5;
            let fish1;
            fish1 = new iLikeToMoveItMoveIt.Fish1();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1.dy = dy;
            fish1Array.push(fish1);
            fish1.draw();
            console.log(fish1);
        }
        //Fish 2
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * iLikeToMoveItMoveIt.canvas.width;
            let y = Math.random() * iLikeToMoveItMoveIt.canvas.height;
            let dx = Math.random() * 10 - 5;
            let dy = Math.random() * 10 - 5;
            let fish2;
            fish2 = new iLikeToMoveItMoveIt.Fish2();
            fish2.x = x;
            fish2.y = y;
            fish2.dx = dx;
            fish2.dy = dy;
            fish2Array.push(fish2);
            fish2.draw();
            console.log(fish2);
        }
        //Bubbles
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * iLikeToMoveItMoveIt.canvas.width;
            let y = Math.random() * iLikeToMoveItMoveIt.canvas.height;
            let dx = Math.random() * 10 - 5;
            let dy = Math.random() * 10 - 5;
            let r = Math.random() * (30 - 5) + 5;
            let buble;
            buble = new iLikeToMoveItMoveIt.Bubbles();
            buble.x = x;
            buble.y = y;
            buble.dx = dx;
            buble.dy = dy;
            buble.r = r;
            bubbleArray.push(buble);
            buble.draw();
            console.log(buble);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        iLikeToMoveItMoveIt.crc.clearRect(0, 0, iLikeToMoveItMoveIt.canvas.width, iLikeToMoveItMoveIt.canvas.height);
        iLikeToMoveItMoveIt.crc.putImageData(imgData, 0, 0);
        for (let i = 0; i < fish1Array.length; i++) { //Fish1
            fish1Array[i].update();
        }
        for (let i = 0; i < fish2Array.length; i++) { //fish2
            fish2Array[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) { //Buubles
            bubbleArray[i].update();
        }
    }
    /*
       //LUFTBLASEN AUFRUF
       function aerien(): void {
           for (let i: number = 0; i < 45; i++) { //Blasen im Bereich 0
               let r: number = Math.random() * (30 - 5) + 5;
               let x: number = Math.random() * (1300 - 1150) + 1150;
               let y: number = Math.random() * canvas.height - 150;
               buble(x, y, r);
           }
   
           for (let i: number = 0; i < 20; i++) { //Blasen im Bereich 1
               let r: number = Math.random() * (30 - 5) + 5;
               let x: number = Math.random() * (900 - 800) + 800;
               let y: number = Math.random() * canvas.height - 150;
               buble(x, y, r);
           }
   
           for (let i: number = 0; i < 30; i++) { //Blasen im Bereich 2
               let r: number = Math.random() * (30 - 5) + 5;
               let x: number = Math.random() * (600 - 500) + 500;
               let y: number = Math.random() * canvas.height - 150;
               buble(x, y, r);
           }
   
           for (let i: number = 0; i < 45; i++) { //Blasen im Bereich 3
               let r: number = Math.random() * (30 - 5) + 5;
               let x: number = Math.random() * (190 - 10) + 10;
               let y: number = Math.random() * canvas.height - 150;
               buble(x, y, r);
           }
           
       }
   
   
       
       //AUFRUF FISCHE
       function poisson(): void {
           let f: number = Math.random() * (6 - 0) + 0;
   
           for (let i: number = 0; i < f; i++) {
               let x: number = Math.random() * canvas.width - 10;
               let y: number = Math.random() * canvas.height - 350;
               //fischi(x, y);
           }
   
           for (let i: number = 0; i < f; i++) {
               let x: number = Math.random() * canvas.width - 10;
               let y: number = Math.random() * canvas.height - 350;
               //fischi2(x, y);
           }
       }
   
       
   */
    //HINTERGRUND AUFRUF
    function drawBackground() {
        let eau = new Path2D();
        eau.rect(0, 0, 1330, 750);
        iLikeToMoveItMoveIt.crc.fillStyle = "#92D1FF";
        iLikeToMoveItMoveIt.crc.strokeStyle = "#92D1FF";
        iLikeToMoveItMoveIt.crc.fill(eau);
        iLikeToMoveItMoveIt.crc.stroke(eau);
        let sol = new Path2D();
        sol.rect(0, 600, 1330, 150);
        iLikeToMoveItMoveIt.crc.fillStyle = "#B3B237";
        iLikeToMoveItMoveIt.crc.strokeStyle = "#B3B237";
        iLikeToMoveItMoveIt.crc.fill(sol);
        iLikeToMoveItMoveIt.crc.stroke(sol);
        drawAlgue(); //algen
    }
    //ALGEN AUFRUF
    function drawAlgue() {
        let f = Math.random() * (10 - 1) + 1;
        for (let i = 0; i < f; i++) {
            let x = Math.random() * iLikeToMoveItMoveIt.canvas.width - 10;
            let y = 600;
            let u = Math.random() * (19 - 5) + 5;
            algues(x, y, u);
        }
    }
    //ALGEN
    function algues(_x, _y, _u) {
        iLikeToMoveItMoveIt.crc.beginPath();
        iLikeToMoveItMoveIt.crc.moveTo(_x, _y);
        iLikeToMoveItMoveIt.crc.bezierCurveTo(_x + 50, _y - 50, _x, _y, _x, _y);
        iLikeToMoveItMoveIt.crc.moveTo(_x, _y);
        iLikeToMoveItMoveIt.crc.bezierCurveTo(_x + 60, _y - 10, _x, _y, _x, _y);
        iLikeToMoveItMoveIt.crc.moveTo(_x, _y);
        iLikeToMoveItMoveIt.crc.bezierCurveTo(_x - 80, _y - 70, _x, _y, _x, _y);
        iLikeToMoveItMoveIt.crc.moveTo(_x, _y);
        iLikeToMoveItMoveIt.crc.bezierCurveTo(_x - 50, _y - 90, _x, _y, _x, _y);
        iLikeToMoveItMoveIt.crc.moveTo(_x, _y);
        iLikeToMoveItMoveIt.crc.bezierCurveTo(_x - 10, _y - 30, _x, _y, _x, _y);
        iLikeToMoveItMoveIt.crc.moveTo(_x, _y);
        iLikeToMoveItMoveIt.crc.bezierCurveTo(_x - 100, _y - 70, _x, _y, _x, _y);
        iLikeToMoveItMoveIt.crc.moveTo(_x, _y);
        iLikeToMoveItMoveIt.crc.bezierCurveTo(_x, _y, _x - 50, _y - 90, _x + 100, _y - 130);
        iLikeToMoveItMoveIt.crc.moveTo(_x, _y);
        iLikeToMoveItMoveIt.crc.bezierCurveTo(_x, _y, _x + 50, _y - 90, _x - 90, _y - 160);
        iLikeToMoveItMoveIt.crc.moveTo(_x + 190, _y - 200);
        iLikeToMoveItMoveIt.crc.closePath();
        iLikeToMoveItMoveIt.crc.lineWidth = 5;
        iLikeToMoveItMoveIt.crc.strokeStyle = "#00C212";
        iLikeToMoveItMoveIt.crc.stroke();
        let algenhead = new Path2D();
        algenhead.arc(_x + 100, _y - 130, _u, 0, 2 * Math.PI);
        iLikeToMoveItMoveIt.crc.fillStyle = "#004D08";
        iLikeToMoveItMoveIt.crc.fill(algenhead);
        algenhead.arc(_x - 90, _y - 160, _u, 0, 2 * Math.PI);
        iLikeToMoveItMoveIt.crc.fillStyle = "#004D08";
        iLikeToMoveItMoveIt.crc.fill(algenhead);
    }
})(iLikeToMoveItMoveIt || (iLikeToMoveItMoveIt = {}));
//# sourceMappingURL=canvas.js.map