var L10;
(function (L10) {
    class IceCone {
        draw() {
            let ice = new Path2D();
            ice.arc(this.x, this.y - 120, 50, 0, 2 * Math.PI);
            L10.crc.fillStyle = this.color;
            L10.crc.fill(ice);
            let waffle = new Path2D();
            waffle.moveTo(this.x - 50, this.y - 100);
            waffle.lineTo(this.x, this.y);
            waffle.lineTo(this.x + 50, this.y - 100);
            waffle.closePath();
            L10.crc.fillStyle = "peru";
            L10.crc.fill(waffle);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    L10.IceCone = IceCone;
})(L10 || (L10 = {}));
//# sourceMappingURL=IceCone.js.map