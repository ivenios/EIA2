namespace Task12 {
	export class Fish1 extends MovingCompany {

		constructor() { 
			super();
   this.x = Math.random() * canvas.width;
   this.y = Math.random() * canvas.height;
   this.dx = Math.random() * 10 - 5;
   this.dy = Math.random() * 10 - 5;

		}

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