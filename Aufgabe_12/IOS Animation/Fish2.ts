namespace iLikeToMoveItMoveIt {
	export class Fish2 {
		x: number;
		y: number;
		dx: number;
		dy: number;

		draw(): void {
			//Körper
			crc.beginPath();
			crc.arc(this.x, this.y, 45, 0, Math.PI * 2);
			crc.closePath();
			crc.strokeStyle = "#66572A";
			crc.lineWidth = 2;
			crc.fillStyle = "#FFC51C";
			crc.fill();
			crc.stroke();

			//Flossenseite
			crc.beginPath();
			crc.moveTo(this.x, this.y - 5);
			crc.lineTo(this.x + 15, this.y - 20);
			crc.moveTo(this.x + 15, this.y - 20);
			crc.lineTo(this.x + 15, this.y + 20);
			crc.moveTo(this.x + 15, this.y + 20);
			crc.lineTo(this.x, this.y + 5);
			crc.closePath();
			crc.strokeStyle = "#66572A";
			crc.lineWidth = 1;
			crc.stroke();

			//Augen 
			crc.beginPath();
			crc.arc(this.x - 15, this.y - 15, 5, 0, 2 * Math.PI);
			crc.strokeStyle = "black";
			crc.fillStyle = "black";
			crc.closePath();
			crc.fill();
			crc.stroke();

			//Flossenhinten
			crc.beginPath();
			crc.moveTo(this.x + 45, this.y);
			crc.lineTo(this.x + 60, this.y - 20);
			crc.moveTo(this.x + 60, this.y - 20);
			crc.lineTo(this.x + 60, this.y + 20);
			crc.moveTo(this.x + 60, this.y + 20);
			crc.lineTo(this.x + 45, this.y + 5);
			crc.moveTo(this.x + 45, this.y);
			crc.fillStyle = "#FFC51C";
			crc.strokeStyle = "#66572A";
			crc.lineWidth = 2;
			crc.stroke();
			crc.fill();
			crc.closePath();


		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.x -= this.dx;
			this.y += this.dy;
			if (this.x + 100 < 0) {
				this.x = 1330;
			}
			if (this.y > 750) {
				this.y = 0;
			}
			if (this.x  > 1330) {
				this.x = -50;
			}
			if (this.y + 5 < 0) {
				this.y = 750;
			}
			
		}
	}
}