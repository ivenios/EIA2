var L11;
(function (L11) {
    class IceCone {
        constructor(_color) {
            this.x = Math.random() * L11.crc.canvas.width;
            this.y = Math.random() * L11.crc.canvas.height;
            this.dx = Math.random() * 10 - 5;
            this.dy = Math.random() * 10 - 5;
            // this.color = randomColor();
            this.color = _color;
        }
        draw() {
            let ice = new Path2D();
            ice.arc(this.x, this.y - 120, 50, 0, 2 * Math.PI);
            L11.crc.fillStyle = this.color;
            L11.crc.fill(ice);
            let waffle = new Path2D();
            waffle.moveTo(this.x - 50, this.y - 100);
            waffle.lineTo(this.x, this.y);
            waffle.lineTo(this.x + 50, this.y - 100);
            waffle.closePath();
            L11.crc.fillStyle = "peru";
            L11.crc.fill(waffle);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > L11.crc.canvas.width + 50) {
                this.x = 0 - 50;
            }
            if (this.x < 0 - 50) {
                this.x = L11.crc.canvas.width + 50;
            }
            if (this.y > L11.crc.canvas.height + 200) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = L11.crc.canvas.height + 200;
            }
        }
    }
    L11.IceCone = IceCone;
})(L11 || (L11 = {}));
//# sourceMappingURL=IceCone.js.map