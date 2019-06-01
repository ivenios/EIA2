/*was wir alles brauchen (aus dem Konzept herausgenommen)
    _Hintergrund (immer gleich)
    _Fische (Vom aussehen immer gleich)
    _Position der Fische (Mathematisch immer unterschiedlich, aber in bestimmten berreichen)
    _Luftblasen (vom Aussehen immer gleich)
    _Position der Luftblasen (immer unterschiedlich)
    _Algen (vom aussehen immer gleich)
    _Position der Algen (immer unterschiedlich)

*/
var ios_aqua_v1;
(function (ios_aqua_v1) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        lamer();
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
        }
    }
    function lamer() {
    }
})(ios_aqua_v1 || (ios_aqua_v1 = {}));
//# sourceMappingURL=canvas.js.map