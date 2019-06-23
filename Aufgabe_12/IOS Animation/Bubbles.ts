namespace iLikeToMoveItMoveIt {
	export class Bubbles {
		x: number;
		y: number;
		dy: number;
		r: number;

		draw(): void {


			let bubles: Path2D = new Path2D();
			bubles.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			crc.fillStyle = "#26E9FF";
			crc.strokeStyle = "E0FFFA";
			crc.fill(bubles);
			crc.stroke(bubles);
		}

		update(): void {
			this.move();
			this.draw();
		}

		move(): void {
			this.dy = -Math.abs(this.dy);
			this.y += this.dy;

			if (this.y + 5 < 0) {
				this.y = 790;
			}
		}
	}
}