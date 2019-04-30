namespace hiAndBye {

    document.addEventListener('DOMContentLoaded', init);
    let helloArray:string []=["Herzlich","Willkommen","hier","im","Europa","-","Park","!"];
    let byeArray:string []=["Verpiss","dich",",","aldeeeeeeeäeee","."];



    function init():void{

        document.getElementById("Hello").addEventListener('click',welcome);

        document.getElementById("ByeBye").addEventListener('click', goodBye);
    }

    function welcome():void{
        document.getElementById("WriteHere").innerHTML="";
        renderHTML(helloArray);

    }

    function goodBye():void{
        document.getElementById("WriteHere").innerHTML="";
        renderHTML(byeArray);


    }

    function renderHTML(_writeArray:string[]):void{

        for(let i:number = 0; i < _writeArray.length; i++) {
            if(_writeArray[i] == "." || _writeArray[i] == "!" ||_writeArray[i] == ","){
                let span = document.createElement('span');

                span.innerHTML = _writeArray[i];
                document.getElementById("WriteHere").appendChild(span);
            }
            else {
            let span = document.createElement('span');

                span.innerHTML =" " +_writeArray[i];
                document.getElementById("WriteHere").appendChild(span);
            }


        }

    }



}

