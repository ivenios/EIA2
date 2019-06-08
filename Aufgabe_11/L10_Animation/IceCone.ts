namespace L10 {
	export class IceCone {
		x: number;
		y: number;
		dx: number;
		dy: number;
		color: string;

		draw(): void {
			let ice: Path2D = new Path2D();
			ice.arc(this.x, this.y - 120, 50, 0, 2 * Math.PI);
			crc.fillStyle = this.color;
			crc.fill(ice);

			let waffle: Path2D = new Path2D();
			waffle.moveTo(this.x - 50, this.y - 100);
			waffle.lineTo(this.x, this.y);
			waffle.lineTo(this.x + 50, this.y - 100);
			waffle.closePath();
			crc.fillStyle = "peru";
			crc.fill(waffle);
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