var Task12;
(function (Task12) {
    class Fish2 extends Task12.MovingCompany {
        constructor() {
            super();
            this.x = Math.random() * 725 + 50;
            this.y = Math.random() * 450 + 50;
            this.dx = Math.random() * 10 - 5;
            this.dy = Math.random() * 10 - 5;
        }
        draw() {
            //Körper
            Task12.crc.beginPath();
            Task12.crc.arc(this.x, this.y, 45, 0, Math.PI * 2);
            Task12.crc.closePath();
            Task12.crc.strokeStyle = "#66572A";
            Task12.crc.lineWidth = 2;
            Task12.crc.fillStyle = "#FFC51C";
            Task12.crc.fill();
            Task12.crc.stroke();
            //Flossenseite
            Task12.crc.beginPath();
            Task12.crc.moveTo(this.x, this.y - 5);
            Task12.crc.lineTo(this.x + 15, this.y - 20);
            Task12.crc.moveTo(this.x + 15, this.y - 20);
            Task12.crc.lineTo(this.x + 15, this.y + 20);
            Task12.crc.moveTo(this.x + 15, this.y + 20);
            Task12.crc.lineTo(this.x, this.y + 5);
            Task12.crc.closePath();
            Task12.crc.strokeStyle = "#66572A";
            Task12.crc.lineWidth = 1;
            Task12.crc.stroke();
            //Augen 
            Task12.crc.beginPath();
            Task12.crc.arc(this.x - 15, this.y - 15, 5, 0, 2 * Math.PI);
            Task12.crc.strokeStyle = "black";
            Task12.crc.fillStyle = "black";
            Task12.crc.closePath();
            Task12.crc.fill();
            Task12.crc.stroke();
            //Flossenhinten
            Task12.crc.beginPath();
            Task12.crc.moveTo(this.x + 45, this.y);
            Task12.crc.lineTo(this.x + 60, this.y - 20);
            Task12.crc.moveTo(this.x + 60, this.y - 20);
            Task12.crc.lineTo(this.x + 60, this.y + 20);
            Task12.crc.moveTo(this.x + 60, this.y + 20);
            Task12.crc.lineTo(this.x + 45, this.y + 5);
            Task12.crc.moveTo(this.x + 45, this.y);
            Task12.crc.fillStyle = "#FFC51C";
            Task12.crc.strokeStyle = "#66572A";
            Task12.crc.lineWidth = 2;
            Task12.crc.stroke();
            Task12.crc.fill();
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
    Task12.Fish2 = Fish2;
})(Task12 || (Task12 = {}));
//# sourceMappingURL=Fish2.js.map