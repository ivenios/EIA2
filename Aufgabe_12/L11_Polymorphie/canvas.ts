namespace L11 {

	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;
	let iceArray: IceCone[] = [];
	let fps: number = 30;
	let imageData: ImageData;


	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		drawBackground();
		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);
		for (let i: number = 0; i < 3; i++) {
			let ice: IceConeTwoScoops = new IceConeTwoScoops("red");
			iceArray.push(ice);
		}
		for (let i: number = 0; i < 3; i++) {
			let ice: IceCone = new IceCone("blue");
			iceArray.push(ice);
		}
		update();
	}

	function update(): void {
		window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, 0, 0);

		for (let i: number = 0; i < iceArray.length; i++) {
			iceArray[i].update();
		}
	}


	export function randomColor(): string {
		return "hsl(" + Math.random() * 360 + ", 80%, 80%)";
	}


	function drawBackground(): void {
		//sky
		crc.fillStyle = "#08f";
		crc.fillRect(0, 0, canvas.width, canvas.height);
		crc.fillStyle = "#f39f18";
		let sun: Path2D = new Path2D();
		sun.arc(550, 50, 30, 0, 2 * Math.PI);
		crc.fill(sun);
		//street
		crc.fillStyle = "#808080";
		crc.fillRect(0, 300, canvas.width, 100);
		crc.fillStyle = "#fff";
		for (let i: number = 0; i < 8; i++) {
			crc.fillRect(10 + 80 * i, 345, 40, 10);
		}

		//truck
		let tire: Path2D = new Path2D();
		let x: number = 200;
		let y: number = 320;
		tire.arc(x - 75, y - 25, 25, 0, 2 * Math.PI);
		tire.arc(x + 75, y - 25, 25, 0, 2 * Math.PI);
		crc.fillStyle = "#000";
		crc.fill(tire);
		tire = new Path2D();
		tire.arc(x - 75, y - 25, 12, 0, 2 * Math.PI);
		tire.arc(x + 75, y - 25, 12, 0, 2 * Math.PI);
		crc.fillStyle = "#f7c8dd";
		crc.fill(tire);
		let truck: Path2D = new Path2D();
		truck.moveTo(x - 125, y - 60);
		truck.lineTo(x + 155, y - 60);
		truck.quadraticCurveTo(x + 160, y - 37.5, x + 155, y - 25);
		truck.lineTo(x + 105, y - 25);
		truck.bezierCurveTo(x + 105, y - 60, x + 45, y - 60, x + 45, y - 25);
		truck.lineTo(x - 45, y - 25);
		truck.bezierCurveTo(x - 45, y - 60, x - 105, y - 60, x - 105, y - 25);
		truck.lineTo(x - 125, y - 25);
		truck.closePath();
		crc.fillStyle = "#73daf2";
		crc.fill(truck);

		truck = new Path2D();
		truck.moveTo(x - 125, y - 60);
		truck.lineTo(x - 125, y - 150);
		truck.lineTo(x + 125, y - 150);
		truck.bezierCurveTo(x + 125, y - 150, x + 140, y - 130, x + 140, y - 75);
		truck.bezierCurveTo(x + 140, y - 75, x + 140, y - 60, x + 155, y - 60);
		truck.closePath();
		crc.fillStyle = "#fefefe";
		crc.fill(truck);

		let truckWindow: Path2D = new Path2D();
		truckWindow.moveTo(x + 75, y - 75);
		truckWindow.lineTo(x + 75, y - 140);
		truckWindow.lineTo(x + 115, y - 140);
		truckWindow.bezierCurveTo(x + 115, y - 140, x + 130, y - 130, x + 130, y - 75);
		truckWindow.closePath();
		crc.fillStyle = "#acdfe6";
		crc.fill(truckWindow);


		truckWindow = new Path2D();
		truckWindow.rect(x + 10, y - 140, 50, 65);
		crc.fillStyle = "#f7c8dd";
		crc.fill(truckWindow);

		truckWindow = new Path2D();
		truckWindow.rect(x - 110, y - 140, 100, 65);
		crc.fillStyle = "#acdfe6";
		crc.fill(truckWindow);

		let truckLines: Path2D = new Path2D();
		truckLines.moveTo(x - 125, y - 65);
		truckLines.lineTo(x + 145, y - 65);
		crc.strokeStyle = "hotpink";
		crc.lineWidth = 5;
		crc.lineCap = "round";
		crc.stroke(truckLines);

		truckLines = new Path2D();
		truckLines.moveTo(x - 110, y - 75);
		truckLines.lineTo(x - 10, y - 75);
		crc.lineWidth = 5;
		crc.stroke(truckLines);

		truckLines = new Path2D();
		truckLines.moveTo(x - 125, y - 150);
		truckLines.lineTo(x + 125, y - 150);
		crc.lineWidth = 10;
		crc.strokeStyle = "#f7c8dd";
		crc.stroke(truckLines);
	}
}