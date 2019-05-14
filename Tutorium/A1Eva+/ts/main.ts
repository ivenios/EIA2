namespace A2 {
let Hallo: string []=["Hi","du","Mensch","."];
let Tschüss: string []=["Ich", "hole" ,"mir", "jetzt", "ein",  "Glas", "Wein" ,"und" ,"setze" ,"mich" ,"mit", "meiner", "Tocher", "vor" ,"den" ,"TV" ,"und", "schaue", "ARTE"]; 
document.addEventListener('DOMContentLoaded', init);
function init() {
    document.getElementById('B1').addEventListener('click', write);
    document.getElementById('B2').addEventListener('click',write);
}
function write(_event:Event) {
    let Satz:string ="";
    let htmlText:HTMLElement= document.createElement('p');
    console.log(_event);
    if(_event == 'B1'){
        for(let i:number; i<Hallo.length; i++ ) {
            Satz +='Hallo[i]';
        }
        htmlText.innerHTML = Satz;
        document.getElementsByTagName('body')[0].appendChild(htmlText);
    }
    else if (_event == 'B2') {   
        for(let i:number=0; i<Tschüss.length; i++){
            Satz += 'Tschuüs[i]';
        }
        htmlText.innerHTML = Satz;
        document.getElementsByTagName('body')[0].appendChild(htmlText);
    }
}
}