namespace iLikeToMoveItMoveIt {
	export class Bubbles {
		x: number;
		y: number;
		dx: number;
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
			this.x += this.dx;
			this.y += this.dy;
		}
	}
}