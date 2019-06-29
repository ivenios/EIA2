namespace Task12 {
	export class Foodora extends MovingCompany {
       
        constructor() {
            super(); 
            this.dx = 0;
            this.dy  = 5;
        }

		draw(): void {
            let food: Path2D = new Path2D();
            food.arc(this.x, this.y, 9, 1, Math.PI);
            crc.fillStyle = "brown";
            crc.fill(food);
		}

		move(): void {
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 600;
            }
        }

    }
}