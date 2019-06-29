var Task12;
(function (Task12) {
    class Fish1 extends Task12.MovingCompany {
        constructor() {
            super();
            this.x = Math.random() * Task12.canvas.width;
            this.y = Math.random() * Task12.canvas.height;
            this.dx = Math.random() * 10 - 5;
            this.dy = Math.random() * 10 - 5;
        }
        draw() {
            //Körper
            Task12.crc.beginPath();
            Task12.crc.moveTo(this.x, this.y);
            Task12.crc.quadraticCurveTo(this.x + 40, this.y - 90, this.x + 180, this.y + 30);
            Task12.crc.moveTo(this.x, this.y);
            Task12.crc.quadraticCurveTo(this.x - 40, this.y + 90, this.x + 180, this.y + 30);
            Task12.crc.closePath();
            Task12.crc.strokeStyle = "#D90D02";
            Task12.crc.fillStyle = "#D90D02";
            Task12.crc.fill();
            Task12.crc.stroke();
            Task12.crc.closePath();
            //Flossen
            Task12.crc.beginPath();
            Task12.crc.moveTo(this.x + 180, this.y + 30);
            Task12.crc.lineTo(this.x + 240, this.y - 60);
            Task12.crc.lineTo(this.x + 240, this.y + 60);
            Task12.crc.strokeStyle = "#D90D02";
            Task12.crc.fillStyle = "#D90D02";
            Task12.crc.fill();
            Task12.crc.stroke();
            Task12.crc.closePath();
            //Augen
            Task12.crc.beginPath();
            Task12.crc.moveTo(this.x, this.y);
            Task12.crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Task12.crc.strokeStyle = "black";
            Task12.crc.fillStyle = "black";
            Task12.crc.fill();
            Task12.crc.stroke();
            Task12.crc.closePath();
        }
        move() {
            this.x -= this.dx;
            this.y += this.dy;
            if (this.x + 100 < 0) {
                this.x = 1330;
            }
            if (this.y > 750) {
                this.y = 0;
            }
            if (this.x > 1330) {
                this.x = -50;
            }
            if (this.y + 5 < 0) {
                this.y = 750;
            }
        }
    }
    Task12.Fish1 = Fish1;
})(Task12 || (Task12 = {}));
//# sourceMappingURL=Fish1.js.map