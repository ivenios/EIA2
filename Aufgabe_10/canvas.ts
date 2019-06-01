namespace L09 {
	document.addEventListener("DOMContentLoaded", init);
	let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		for (let i: number = 0; i < 10; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			drawIcecone(x, y);
		}
	}

	function drawIcecone(_x: number, _y: number): void {
		let waffle: Path2D = new Path2D();
		waffle.moveTo(_x - 50, _y - 100);
		waffle.lineTo(_x, _y);
		waffle.lineTo(_x + 50, _y - 100);
		waffle.closePath();
		crc.fillStyle = "peru";
		crc.fill(waffle);
		crc.stroke(waffle);

		let ice: Path2D = new Path2D();
		ice.arc(_x, _y - 100, 50, Math.PI, 2 * Math.PI);
		crc.fillStyle = "red";
		crc.fill(ice);
		crc.stroke(ice);
	}
}