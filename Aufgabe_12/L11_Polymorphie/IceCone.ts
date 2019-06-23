namespace L11 {
	export class IceCone {
		x: number;
		y: number;
		dx: number;
		dy: number;
		color: string;

		constructor(_color: string) {
			this.x = Math.random() * crc.canvas.width;
			this.y = Math.random() * crc.canvas.height;
			this.dx = Math.random() * 10 - 5;
			this.dy = Math.random() * 10 - 5;
			
			// this.color = randomColor();
			this.color = _color;
		}

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
			
			if (this.x > crc.canvas.width + 50) {
				this.x = 0 - 50;
			}
			if (this.x < 0 - 50) {
				this.x = crc.canvas.width + 50;
			}
			if (this.y > crc.canvas.height + 200) {
				this.y = 0;
			}
			if (this.y < 0) {
				this.y = crc.canvas.height + 200;
			}
		}
	}
}