namespace Task12 {


	export class Bubbles extends MovingCompany {
		r: number; //radius deklaration

        constructor() {
            super(); 
            this.x  = Math.random() * crc.canvas.width;
            this.y  = Math.random() * crc.canvas.height;
            this.dx = 0;
            this.dy  = Math.random() * 4 - 2;
            this.r  =  Math.random() * (30 - 5) + 5;
        }

		draw(): void {


			let bubles: Path2D = new Path2D();
			bubles.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
			crc.fillStyle = "#26E9FF";
			crc.strokeStyle = "E0FFFA";
			crc.fill(bubles);
			crc.stroke(bubles);
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