/*was wir alles brauchen (aus dem Konzept herausgenommen)
	_Hintergrund (immer gleich)
	_Fische (Vom aussehen immer gleich)
	_Position der Fische (Mathematisch immer unterschiedlich, aber in bestimmten berreichen)
	_Luftblasen (vom Aussehen immer gleich)
	_Position der Luftblasen (immer unterschiedlich)
	_Algen (vom aussehen immer gleich)
	_Position der Algen (immer unterschiedlich)

*/
namespace ios_aqua_v1 {
	document.addEventListener("DOMContentLoaded", init);
	let crc: CanvasRenderingContext2D;
	let canvas: HTMLCanvasElement;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		lamer(); //boden und hintergrund
		aerien(); //luftblasen ;
		algue(); //algen
		poisson(); //fische

	}

	//HINTERGRUND AUFRUF
	function lamer(): void {
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
	}

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


	//ALGEN AUFRUF
	function algue(): void {
		let f: number = Math.random() * (10 - 1) + 1;

		for (let i: number = 0; i < f; i++) {
			let x: number = Math.random() * canvas.width - 10;
			let y: number = 600;
			let u: number = Math.random() * (19 - 5) + 5;
			algues(x, y, u);
		}


	}
	//AUFRUF FISCHE 
	function poisson(): void {
		let f: number = Math.random() * (10 - 1) + 1;

		for (let i: number = 0; i < f; i++) {
			let x: number = Math.random() * canvas.width - 10;
			let y: number = Math.random() * canvas.height - 350;
			fischi(x, y);
		}
	}








	// ASSETS 

	// BLASEN
	function buble(_x: number, _y: number, _r: number): void {

		let bubles: Path2D = new Path2D();
		bubles.arc(_x, _y, _r, 0, 2 * Math.PI);
		crc.fillStyle = "#26E9FF";
		crc.strokeStyle = "E0FFFA";
		crc.fill(bubles);
		crc.stroke(bubles);
	}

	//ALGEN
	function algues(_x: number, _y: number, _u:number): void {
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

		crc.lineWidth = 8;
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

	//FISCHE
	function fischi(_x: number, _y: number): void {
		//Körper
		crc.beginPath();
		crc.moveTo(_x, _y);
		crc.quadraticCurveTo(_x + 40, _y - 90, _x + 180, _y + 30);
		crc.moveTo(_x, _y);
		crc.quadraticCurveTo(_x - 40, _y + 90, _x + 180, _y + 30);
		crc.closePath();
		crc.strokeStyle = "#D90D02";
		crc.fillStyle = "#D90D02";
		crc.fill();
		crc.stroke();
		crc.closePath();

		//Flossen
		crc.beginPath();
		crc.moveTo(_x + 180, _y + 30);
		crc.lineTo(_x + 240, _y - 60);
		crc.lineTo(_x + 240, _y + 60);

		crc.strokeStyle = "#D90D02";
		crc.fillStyle = "#D90D02";
		crc.fill();
		crc.stroke();
		crc.closePath();

		//Augen
		crc.beginPath();
		crc.moveTo(_x , _y );
		crc.arc(_x, _y, 5, 0, 2 * Math.PI)
		crc.strokeStyle = "black";
		crc.fillStyle = "black";
		crc.fill();
		crc.stroke();
		crc.closePath();
	}



}