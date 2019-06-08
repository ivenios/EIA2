namespace iLikeToMoveItMoveIt {
	export class Fish1 {
		x: number;
		y: number;
		dx: number;
		dy: number;
		color: string;

		draw(): void {
			//Körper
			crc.beginPath();
			crc.moveTo(this.x, this.y);
			crc.quadraticCurveTo(this.x + 40, this.y - 90, this.x + 180, this.y + 30);
			crc.moveTo(this.x, this.y);
			crc.quadraticCurveTo(this.x - 40, this.y + 90, this.x + 180, this.y + 30);
			crc.closePath();
			crc.strokeStyle = "#D90D02";
			crc.fillStyle = "#D90D02";
			crc.fill();
			crc.stroke();
			crc.closePath();

			//Flossen
			crc.beginPath();
			crc.moveTo(this.x + 180, this.y + 30);
			crc.lineTo(this.x + 240, this.y - 60);
			crc.lineTo(this.x + 240, this.y + 60);

			crc.strokeStyle = "#D90D02";
			crc.fillStyle = "#D90D02";
			crc.fill();
			crc.stroke();
			crc.closePath();

			//Augen
			crc.beginPath();
			crc.moveTo(this.x, this.y);
			crc.arc(this.x, this.y, 5, 0, 2 * Math.PI);
			crc.strokeStyle = "black";
			crc.fillStyle = "black";
			crc.fill();
			crc.stroke();
			crc.closePath();
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.x += this.dx;
			this.y += this.dy;
		}
	}
}