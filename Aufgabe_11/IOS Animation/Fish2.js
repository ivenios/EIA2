var iLikeToMoveItMoveIt;
(function (iLikeToMoveItMoveIt) {
    class Fish2 {
        draw() {
            //Körper
            iLikeToMoveItMoveIt.crc.beginPath();
            iLikeToMoveItMoveIt.crc.arc(this.x, this.y, 45, 0, Math.PI * 2);
            iLikeToMoveItMoveIt.crc.closePath();
            iLikeToMoveItMoveIt.crc.strokeStyle = "#66572A";
            iLikeToMoveItMoveIt.crc.lineWidth = 2;
            iLikeToMoveItMoveIt.crc.fillStyle = "#FFC51C";
            iLikeToMoveItMoveIt.crc.fill();
            iLikeToMoveItMoveIt.crc.stroke();
            //Flossenseite
            iLikeToMoveItMoveIt.crc.beginPath();
            iLikeToMoveItMoveIt.crc.moveTo(this.x, this.y - 5);
            iLikeToMoveItMoveIt.crc.lineTo(this.x + 15, this.y - 20);
            iLikeToMoveItMoveIt.crc.moveTo(this.x + 15, this.y - 20);
            iLikeToMoveItMoveIt.crc.lineTo(this.x + 15, this.y + 20);
            iLikeToMoveItMoveIt.crc.moveTo(this.x + 15, this.y + 20);
            iLikeToMoveItMoveIt.crc.lineTo(this.x, this.y + 5);
            iLikeToMoveItMoveIt.crc.closePath();
            iLikeToMoveItMoveIt.crc.strokeStyle = "#66572A";
            iLikeToMoveItMoveIt.crc.lineWidth = 1;
            iLikeToMoveItMoveIt.crc.stroke();
            //Augen 
            iLikeToMoveItMoveIt.crc.beginPath();
            iLikeToMoveItMoveIt.crc.arc(this.x - 15, this.y - 15, 5, 0, 2 * Math.PI);
            iLikeToMoveItMoveIt.crc.strokeStyle = "black";
            iLikeToMoveItMoveIt.crc.fillStyle = "black";
            iLikeToMoveItMoveIt.crc.closePath();
            iLikeToMoveItMoveIt.crc.fill();
            iLikeToMoveItMoveIt.crc.stroke();
            //Flossenhinten
            iLikeToMoveItMoveIt.crc.beginPath();
            iLikeToMoveItMoveIt.crc.moveTo(this.x + 45, this.y);
            iLikeToMoveItMoveIt.crc.lineTo(this.x + 60, this.y - 20);
            iLikeToMoveItMoveIt.crc.moveTo(this.x + 60, this.y - 20);
            iLikeToMoveItMoveIt.crc.lineTo(this.x + 60, this.y + 20);
            iLikeToMoveItMoveIt.crc.moveTo(this.x + 60, this.y + 20);
            iLikeToMoveItMoveIt.crc.lineTo(this.x + 45, this.y + 5);
            iLikeToMoveItMoveIt.crc.moveTo(this.x + 45, this.y);
            iLikeToMoveItMoveIt.crc.fillStyle = "#FFC51C";
            iLikeToMoveItMoveIt.crc.strokeStyle = "#66572A";
            iLikeToMoveItMoveIt.crc.lineWidth = 2;
            iLikeToMoveItMoveIt.crc.stroke();
            iLikeToMoveItMoveIt.crc.fill();
            iLikeToMoveItMoveIt.crc.closePath();
        }
        update() {
            this.move();
            this.draw();
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
    iLikeToMoveItMoveIt.Fish2 = Fish2;
})(iLikeToMoveItMoveIt || (iLikeToMoveItMoveIt = {}));
//# sourceMappingURL=Fish2.js.map