var iLikeToMoveItMoveIt;
(function (iLikeToMoveItMoveIt) {
    class Fish1 {
        draw() {
            //Körper
            iLikeToMoveItMoveIt.crc.beginPath();
            iLikeToMoveItMoveIt.crc.moveTo(this.x, this.y);
            iLikeToMoveItMoveIt.crc.quadraticCurveTo(this.x + 40, this.y - 90, this.x + 180, this.y + 30);
            iLikeToMoveItMoveIt.crc.moveTo(this.x, this.y);
            iLikeToMoveItMoveIt.crc.quadraticCurveTo(this.x - 40, this.y + 90, this.x + 180, this.y + 30);
            iLikeToMoveItMoveIt.crc.closePath();
            iLikeToMoveItMoveIt.crc.strokeStyle = "#D90D02";
            iLikeToMoveItMoveIt.crc.fillStyle = "#D90D02";
            iLikeToMoveItMoveIt.crc.fill();
            iLikeToMoveItMoveIt.crc.stroke();
            iLikeToMoveItMoveIt.crc.closePath();
            //Flossen
            iLikeToMoveItMoveIt.crc.beginPath();
            iLikeToMoveItMoveIt.crc.moveTo(this.x + 180, this.y + 30);
            iLikeToMoveItMoveIt.crc.lineTo(this.x + 240, this.y - 60);
            iLikeToMoveItMoveIt.crc.lineTo(this.x + 240, this.y + 60);
            iLikeToMoveItMoveIt.crc.strokeStyle = "#D90D02";
            iLikeToMoveItMoveIt.crc.fillStyle = "#D90D02";
            iLikeToMoveItMoveIt.crc.fill();
            iLikeToMoveItMoveIt.crc.stroke();
            iLikeToMoveItMoveIt.crc.closePath();
            //Augen
            iLikeToMoveItMoveIt.crc.beginPath();
            iLikeToMoveItMoveIt.crc.moveTo(this.x, this.y);
            iLikeToMoveItMoveIt.crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            iLikeToMoveItMoveIt.crc.strokeStyle = "black";
            iLikeToMoveItMoveIt.crc.fillStyle = "black";
            iLikeToMoveItMoveIt.crc.fill();
            iLikeToMoveItMoveIt.crc.stroke();
            iLikeToMoveItMoveIt.crc.closePath();
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
    iLikeToMoveItMoveIt.Fish1 = Fish1;
})(iLikeToMoveItMoveIt || (iLikeToMoveItMoveIt = {}));
//# sourceMappingURL=Fish1.js.map