/*
Aufgabe: Aufgabe 4 Eisdealer
Name: Iven Otis Sieglen 
Matrikel: 261012
Datum: Sonntag der 21. April
	
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace DEeis {
    document.addEventListener('DOMContentLoaded', dealIce);
    let iceWorth:number = 0;
    let iceQuantity1:number =0;
    let iceQuantity2:number =0;
    let iceQuantity3:number =0;
    let iceQuantity4:number =0;
    let iceFlavor1:string;
    let iceFlavor2:string;
    let iceFlavor3:string;
    let iceFlavor4:string;
    let toppingNumber:number = 0;
    

function dealIce ():void{
    let formSet: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName('fieldset'); //alle fieldsets in ein Array, um daraus dann die Daten zu bekommen
    //console.log(formSet);
    let i:number = 0;
    while (i < formSet.length){
        let form: HTMLElement = formSet[i];
            form.addEventListener('change', checkValueAndChange); //jedes element in dem Array bekommt nochmals einen Eventlistener, der auf veränderungen des Wert achtet 
            i++;
    }
    document.getElementById('BestellButton').addEventListener('click', completeOrder);//wenn kunde fertig, funktion ausführen, die testet ob alles ausgefüllt


}
function checkValueAndChange(_event:Event):void{
    console.log(_event);
    let change: HTMLInputElement = <HTMLInputElement>_event.target;
    //zuerst die Anzahl der Eiskugeln bestimmen 
    if(change.name == "Stepper1" ){
        if(iceFlavor1 == undefined) {alert("Bitte zuerst die Eissorte Wählen")}
        else {
            iceQuantity1 = parseInt(change.value);
            writeQuantiy1(iceQuantity1, iceFlavor1, "Sorte1");
            renderPrize();
    }
    }
    else if(change.name == "Stepper2"){
        if(iceFlavor2 == undefined) {alert("Bitte zuerst die Eissorte Wählen")}
        else {
            iceQuantity2 = parseInt(change.value);
            writeQuantiy2(iceQuantity2, iceFlavor2, "Sorte2");
            renderPrize();
    }
    }
    else if(change.name == "Stepper3"){
        if(iceFlavor3 == undefined) {alert("Bitte zuerst die Eissorte Wählen")}
        else {
            iceQuantity3 = parseInt(change.value);
            writeQuantiy3(iceQuantity3, iceFlavor3, "Sorte3");
            renderPrize();
    }
    }
    else if(change.name == "Stepper4"){
        if(iceFlavor4 == undefined) {alert("Bitte zuerst die Eissorte Wählen")}
        else {
            iceQuantity4 = parseInt(change.value);
            writeQuantiy4(iceQuantity4, iceFlavor4, "Sorte4");
            renderPrize();
    }
    }
    //Bestimmung welche Eissorte gewählt wurde. 
    else if(change.name == "Select1") {
        iceFlavor1 = change.value;
        writeQuantiy1(iceQuantity1, iceFlavor1, "Sorte1");
    }
    else if(change.name == "Select2") {
        iceFlavor2 = change.value;
        writeQuantiy1(iceQuantity2, iceFlavor2, "Sorte2");
    }
    else if(change.name == "Select3") {
        iceFlavor3 = change.value;
        writeQuantiy1(iceQuantity3, iceFlavor3, "Sorte3");
    }
    else if(change.name == "Select4") {
        iceFlavor4 = change.value;
        writeQuantiy1(iceQuantity4, iceFlavor4, "Sorte4");
    }
    //In welchem Gefäß möchte der Kunde sein Eis ? 
    else if(change.value == "Becher") {
        console.log("test");
        renderCategories("Becher","BechoWaff");
    }
    else if(change.value == "Waffel"){
        renderCategories("Waffel","BechoWaff");
    }

    else if(change.value == "Schoko-Waffel") {
        iceWorth += 2.50;
        renderCategories("Schoko-Waffel","BechoWaff");
    }   
    //jetzt kommen die ganzen Toppings, da toppings einen pauschal Preis haben, wird zubeginn gezählt, wie viele Toppings gewählt wurden
    else if (change.type == "checkbox") {

        if (change.checked == true){
            toppingNumber += 1;
            let pCon = document.createElement('p');
            let span = `${change.name}`;

            pCon.innerHTML = span;

            document.getElementById(change.name).appendChild(pCon);
            renderPrize();
        }

        if (change.checked == false){
            toppingNumber -= 1;
            document.getElementById(change.name).innerHTML = "";
            renderPrize();
        }
    }
    //jetzt kommt die Abfrage gabel oder löffel

    else if(change.value == "Löffel") {
        renderCategories("Löffel","GaboLoff");
    }
    else if(change.value == "Gabel") {
        renderCategories("Gabel","GaboLoff");
    }
    else if(change.value == "Stäbchen") {
        renderCategories("Stäbchen","GaboLoff");
    }
    else if(change.value == "Zwei Löffel") {
        renderCategories("Zwei Löffel", "GaboLoff");
    }

    // jetzt kommt der Part mit den Delivery Arten
    else if(change.value == "Fertiges Eis") {
        renderCategories("als fertiges Eis","ShipFormat");
    }
    else if(change.value == "Nicht fertiges Eis") {
        renderCategories("als DIY-Kit für extra Spass", "ShipFormat");
    }
    else if(change.value == "Same Day Delivery") {
        renderCategories("noch am selben Tag", "ShipTime");
    }
    else if(change.value == "Same Hour Delivery"){
        renderCategories("noch in der selben Stunde", "ShipTime");
    }
    else if(change.value == "5-10 Werktage "){
        renderCategories("in 5-10 Werktagen", "ShipTime");
    }
    else if(change.value == "Beamen") {
        renderCategories(" das in den nächsten 10 Sekunden ","ShipTime");
    }
    else if(change.value == "Möpsgeschwindigkeit") {
        renderCategories("es kommt vielleicht an","ShipTime");
    }





}

function completeOrder():void{

}


function writeQuantiy1(_x:number, _y:string, _html:string):void{
    document.getElementById(_html).innerHTML="";
    let pCon = document.createElement('p');
    let p = `<span>  ${_x} Kugel(n) ${_y}</span>`;

    pCon.innerHTML = p;

    document.getElementById(_html).appendChild(pCon);

}
function writeQuantiy2(_x:number, _y:string, _html:string):void{
    document.getElementById(_html).innerHTML="";
    let pCon = document.createElement('p');
    let p = `<span>  ${_x} Kugel(n) ${_y}</span>`;

    pCon.innerHTML = p;

    document.getElementById(_html).appendChild(pCon);

}
function writeQuantiy3(_x:number, _y:string, _html:string):void{
    document.getElementById(_html).innerHTML="";
    let pCon = document.createElement('p');
    let p = `<span>  ${_x} Kugel(n) ${_y}</span>`;

    pCon.innerHTML = p;

    document.getElementById(_html).appendChild(pCon);

}
function writeQuantiy4(_x:number, _y:string, _html:string):void{
    document.getElementById(_html).innerHTML="";
    let pCon = document.createElement('p');
    let p = `<span>  ${_x} Kugel(n) ${_y}</span>`;

    pCon.innerHTML = p;

    document.getElementById(_html).appendChild(pCon);

}
//funkion die die Darreichungsform und Löffel anzeigt
function renderCategories(_r:string,_id:string):void{
    document.getElementById(_id).innerHTML="";
    let pCon = document.createElement('span');
    let span = `${_r}`;
    pCon.innerHTML = span;
    document.getElementById(_id).appendChild(pCon);

    renderPrize();
}



function renderPrize():void{
   iceWorth = (1.55 *(iceQuantity1+iceQuantity2+iceQuantity3+iceQuantity4))+(toppingNumber*0.80);

    document.getElementById('Preis').innerHTML="";
    let pCon = document.createElement('p');
    let span = `Zu zahlen: ${iceWorth}€`;

    pCon.innerHTML = span;

    document.getElementById('Preis').appendChild(pCon);

}


}