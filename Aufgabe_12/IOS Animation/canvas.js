/*was wir alles brauchen (aus dem Konzept herausgenommen)
    _Hintergrund (immer gleich)
    _Fische (Vom aussehen immer gleich)
    _Position der Fische (Mathematisch immer unterschiedlich, aber in bestimmten berreichen)
    _Luftblasen (vom Aussehen immer gleich)
    _Position der Luftblasen (immer unterschiedlich)
    _Algen (vom aussehen immer gleich)
    _Position der Algen (immer unterschiedlich)

*/
var Task12;
(function (Task12) {
    document.addEventListener("DOMContentLoaded", init);
    let renderableObjectsArray = [];
    //let fish1Array: Fish1[] =  [] ;
    //let fish2Array: Fish2[] =  [];
    //let bubbleArray: Bubbles[] =  [];
    let fps = 30;
    let imgData;
    function init() {
        Task12.canvas = document.getElementsByTagName("canvas")[0];
        Task12.canvas.addEventListener("click", foodoraDelivery);
        Task12.crc = Task12.canvas.getContext("2d");
        drawBackground();
        imgData = Task12.crc.getImageData(0, 0, Task12.canvas.width, Task12.canvas.height);
        //Fish1
        for (let i = 0; i < 10; i++) {
            let fish1 = new Task12.Fish1();
            renderableObjectsArray.push(fish1);
            fish1.draw();
            console.log(fish1);
        }
        //Fish 2
        for (let i = 0; i < 10; i++) {
            let fish2 = new Task12.Fish2();
            renderableObjectsArray.push(fish2);
            fish2.draw();
            console.log(fish2);
        }
        //Bubbles
        for (let i = 0; i < 65; i++) {
            let buble = new Task12.Bubbles();
            renderableObjectsArray.push(buble);
            buble.draw();
            console.log(buble);
        }
        update();
    }
    function foodoraDelivery(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let food = new Task12.Foodora();
        food.x = x - 9;
        food.y = y - 12;
        renderableObjectsArray.push(food);
        food.draw();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Task12.crc.clearRect(0, 0, Task12.canvas.width, Task12.canvas.height);
        Task12.crc.putImageData(imgData, 0, 0);
        for (let i = 0; i < renderableObjectsArray.length; i++) {
            console.log(renderableObjectsArray[i]);
            renderableObjectsArray[i].update();
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
        Task12.crc.fillStyle = "#92D1FF";
        Task12.crc.strokeStyle = "#92D1FF";
        Task12.crc.fill(eau);
        Task12.crc.stroke(eau);
        let sol = new Path2D();
        sol.rect(0, 600, 1330, 150);
        Task12.crc.fillStyle = "#B3B237";
        Task12.crc.strokeStyle = "#B3B237";
        Task12.crc.fill(sol);
        Task12.crc.stroke(sol);
        drawAlgue(); //algen
    }
    //ALGEN AUFRUF
    function drawAlgue() {
        let f = Math.random() * (10 - 1) + 1;
        for (let i = 0; i < f; i++) {
            let x = Math.random() * Task12.canvas.width - 10;
            let y = 600;
            let u = Math.random() * (19 - 5) + 5;
            algues(x, y, u);
        }
    }
    //ALGEN
    function algues(_x, _y, _u) {
        Task12.crc.beginPath();
        Task12.crc.moveTo(_x, _y);
        Task12.crc.bezierCurveTo(_x + 50, _y - 50, _x, _y, _x, _y);
        Task12.crc.moveTo(_x, _y);
        Task12.crc.bezierCurveTo(_x + 60, _y - 10, _x, _y, _x, _y);
        Task12.crc.moveTo(_x, _y);
        Task12.crc.bezierCurveTo(_x - 80, _y - 70, _x, _y, _x, _y);
        Task12.crc.moveTo(_x, _y);
        Task12.crc.bezierCurveTo(_x - 50, _y - 90, _x, _y, _x, _y);
        Task12.crc.moveTo(_x, _y);
        Task12.crc.bezierCurveTo(_x - 10, _y - 30, _x, _y, _x, _y);
        Task12.crc.moveTo(_x, _y);
        Task12.crc.bezierCurveTo(_x - 100, _y - 70, _x, _y, _x, _y);
        Task12.crc.moveTo(_x, _y);
        Task12.crc.bezierCurveTo(_x, _y, _x - 50, _y - 90, _x + 100, _y - 130);
        Task12.crc.moveTo(_x, _y);
        Task12.crc.bezierCurveTo(_x, _y, _x + 50, _y - 90, _x - 90, _y - 160);
        Task12.crc.moveTo(_x + 190, _y - 200);
        Task12.crc.closePath();
        Task12.crc.lineWidth = 5;
        Task12.crc.strokeStyle = "#00C212";
        Task12.crc.stroke();
        let algenhead = new Path2D();
        algenhead.arc(_x + 100, _y - 130, _u, 0, 2 * Math.PI);
        Task12.crc.fillStyle = "#004D08";
        Task12.crc.fill(algenhead);
        algenhead.arc(_x - 90, _y - 160, _u, 0, 2 * Math.PI);
        Task12.crc.fillStyle = "#004D08";
        Task12.crc.fill(algenhead);
    }
})(Task12 || (Task12 = {}));
//# sourceMappingURL=canvas.js.map