/*was wir alles brauchen (aus dem Konzept herausgenommen)
	_Hintergrund (immer gleich)
	_Fische (Vom aussehen immer gleich)
	_Position der Fische (Mathematisch immer unterschiedlich, aber in bestimmten berreichen)
	_Luftblasen (vom Aussehen immer gleich)
	_Position der Luftblasen (immer unterschiedlich)
	_Algen (vom aussehen immer gleich)
	_Position der Algen (immer unterschiedlich)

*/
namespace Task12 {
	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	export let canvas: HTMLCanvasElement;
	let renderableObjectsArray: RenderableObjects[] = [];
	//let fish1Array: Fish1[] =  [] ;
	//let fish2Array: Fish2[] =  [];
	//let bubbleArray: Bubbles[] =  [];
	let fps: number = 30;
	let imgData: ImageData;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		canvas.addEventListener("click", foodoraDelivery);
		crc = canvas.getContext("2d");
		drawBackground();
		imgData = crc.getImageData(0, 0, canvas.width, canvas.height);

		//Fish1
		for (let i: number = 0; i < 10; i++) {
			let fish1: Fish1 = new Fish1();
			renderableObjectsArray.push(fish1);
			fish1.draw();
			console.log(fish1);
		}
		//Fish 2
		for (let i: number = 0; i < 10; i++) {
			let fish2: Fish2 = new Fish2();
			renderableObjectsArray.push(fish2);
			fish2.draw();
			console.log(fish2);
		}
		//Bubbles
		for (let i: number = 0; i < 65; i++) {

			let buble: Bubbles = new Bubbles();
			renderableObjectsArray.push(buble);
			buble.draw();
			console.log(buble);
		}

		update();

	}

	function foodoraDelivery(_event: MouseEvent): void {
		let x: number = _event.clientX;
		let y: number = _event.clientY;
		let food: Foodora = new Foodora();
		food.x = x - 9;
		food.y = y - 12;
		// Damit Futter direkt beim Mauscursor entsteht		
		renderableObjectsArray.push(food);
		food.draw();
	}

	function update(): void {
		window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imgData, 0, 0);

		for (let i: number = 0; i < renderableObjectsArray.length; i++) {
			console.log(renderableObjectsArray[i]);
			renderableObjectsArray[i].update();
		}

	}

	
 /*
	//LUFTBLASEN AUFRUF
	function aerien(): void {
		for (let i: number = 0; i < 45; i++) { //Blasen im Bereich 0
			let r: number = Math.random() * (30 - 5) + 5;
			let x: number = Math.random() * (1300 - 1150) + 1150;
			let y: number = Math.random() * canvas.height - 150;
			buble(x, y, r);
		}

		for (let i: number = 0; i < 20; i++) { //Blasen im Bereich 1
			let r: number = Math.random() * (30 - 5) + 5;
			let x: number = Math.random() * (900 - 800) + 800;
			let y: number = Math.random() * canvas.height - 150;
			buble(x, y, r);
		}

		for (let i: number = 0; i < 30; i++) { //Blasen im Bereich 2
			let r: number = Math.random() * (30 - 5) + 5;
			let x: number = Math.random() * (600 - 500) + 500;
			let y: number = Math.random() * canvas.height - 150;
			buble(x, y, r);
		}

		for (let i: number = 0; i < 45; i++) { //Blasen im Bereich 3
			let r: number = Math.random() * (30 - 5) + 5;
			let x: number = Math.random() * (190 - 10) + 10;
			let y: number = Math.random() * canvas.height - 150;
			buble(x, y, r);
		}
		
	}


	
	//AUFRUF FISCHE 
	function poisson(): void {
		let f: number = Math.random() * (6 - 0) + 0;

		for (let i: number = 0; i < f; i++) {
			let x: number = Math.random() * canvas.width - 10;
			let y: number = Math.random() * canvas.height - 350;
			//fischi(x, y);
		}

		for (let i: number = 0; i < f; i++) {
			let x: number = Math.random() * canvas.width - 10;
			let y: number = Math.random() * canvas.height - 350;
			//fischi2(x, y);
		}
	}

	
*/
	

	//HINTERGRUND AUFRUF
	function drawBackground(): void {
		let eau: Path2D = new Path2D();
		eau.rect(0, 0, 1330, 750);
		crc.fillStyle = "#92D1FF";
		crc.strokeStyle = "#92D1FF";
		crc.fill(eau);
		crc.stroke(eau);

		let sol: Path2D = new Path2D();
		sol.rect(0, 600, 1330, 150);
		crc.fillStyle = "#B3B237";
		crc.strokeStyle = "#B3B237";
		crc.fill(sol);
		crc.stroke(sol);
		drawAlgue(); //algen
	}

	//ALGEN AUFRUF
	function drawAlgue(): void {
		let f: number = Math.random() * (10 - 1) + 1;

		for (let i: number = 0; i < f; i++) {
			let x: number = Math.random() * canvas.width - 10;
			let y: number = 600;
			let u: number = Math.random() * (19 - 5) + 5;
			algues(x, y, u);
		}


	}

	//ALGEN
	function algues(_x: number, _y: number, _u: number): void {
		crc.beginPath();
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x + 50, _y - 50, _x, _y, _x, _y);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x + 60, _y - 10, _x, _y, _x, _y);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x - 80, _y - 70, _x, _y, _x, _y);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x - 50, _y - 90, _x, _y, _x, _y);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x - 10, _y - 30, _x, _y, _x, _y);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x - 100, _y - 70, _x, _y, _x, _y);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x, _y, _x - 50, _y - 90, _x + 100, _y - 130);
		crc.moveTo(_x, _y);
		crc.bezierCurveTo(_x, _y, _x + 50, _y - 90, _x - 90, _y - 160);
		crc.moveTo(_x + 190, _y - 200);
		crc.closePath();

		crc.lineWidth = 5;
		crc.strokeStyle = "#00C212";
		crc.stroke();

		let algenhead: Path2D = new Path2D();
		algenhead.arc(_x + 100, _y - 130, _u, 0, 2 * Math.PI);
		crc.fillStyle = "#004D08";
		crc.fill(algenhead);
		algenhead.arc(_x - 90, _y - 160, _u, 0, 2 * Math.PI);
		crc.fillStyle = "#004D08";
		crc.fill(algenhead);

	}

}