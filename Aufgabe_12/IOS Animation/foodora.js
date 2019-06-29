var Task12;
(function (Task12) {
    class Foodora extends Task12.MovingCompany {
        constructor() {
            super();
            this.dx = 0;
            this.dy = 5;
        }
        draw() {
            let food = new Path2D();
            food.arc(this.x, this.y, 9, 1, Math.PI);
            Task12.crc.fillStyle = "brown";
            Task12.crc.fill(food);
        }
        move() {
            this.y += this.dy;
            if (this.y > 600) {
                this.y = 600;
            }
        }
    }
    Task12.Foodora = Foodora;
})(Task12 || (Task12 = {}));
//# sourceMappingURL=foodora.js.map