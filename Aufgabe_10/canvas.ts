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
		lamer();
		for (let i: number = 0; i < 10; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;


		}
	}


	function lamer():void {
		

	}

}