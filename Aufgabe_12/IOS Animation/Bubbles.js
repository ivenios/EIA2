var iLikeToMoveItMoveIt;
(function (iLikeToMoveItMoveIt) {
    class Bubbles {
        draw() {
            let bubles = new Path2D();
            bubles.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            iLikeToMoveItMoveIt.crc.fillStyle = "#26E9FF";
            iLikeToMoveItMoveIt.crc.strokeStyle = "E0FFFA";
            iLikeToMoveItMoveIt.crc.fill(bubles);
            iLikeToMoveItMoveIt.crc.stroke(bubles);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.dy = -Math.abs(this.dy);
            this.y += this.dy;
            if (this.y + 5 < 0) {
                this.y = 790;
            }
        }
    }
    iLikeToMoveItMoveIt.Bubbles = Bubbles;
})(iLikeToMoveItMoveIt || (iLikeToMoveItMoveIt = {}));
//# sourceMappingURL=Bubbles.js.map