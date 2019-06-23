var L11;
(function (L11) {
    class IceConeTwoScoops extends L11.IceCone {
        constructor(_color) {
            super(_color);
            this.color2 = L11.randomColor();
        }
        draw() {
            let ice2 = new Path2D();
            ice2.arc(this.x, this.y - 160, 50, 0, 2 * Math.PI);
            L11.crc.fillStyle = this.color2;
            L11.crc.fill(ice2);
            super.draw();
        }
        move() {
            //;
        }
    }
    L11.IceConeTwoScoops = IceConeTwoScoops;
})(L11 || (L11 = {}));
//# sourceMappingURL=IceConeTwoScoops.js.map