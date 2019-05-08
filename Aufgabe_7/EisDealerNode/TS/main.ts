
namespace EisDealerFreude {
    /*
        Aufgabe: Aufgabe 6 Eisdealer
        Name: Iven Otis Sieglen 
        Matrikel: 261012
        Datum: Sonntag der 1. Mai
            
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
        */


    document.addEventListener('DOMContentLoaded', init);
    let lableNum: number = 0;
    export interface fieldsetData {
        name: string;
        type: string;
        value: string;
        price: number;
        inStock: boolean;
    }

    function init():void {
        renderFieldsets();
        addListeners();

    }

    function renderFieldsets(): void {
        

        for (let group in iceDealerData) {
            if (group == "Eissorten") {//mit forschleife und iceDealerData[group][hier mit for schleife durch gehen] und dann die einzelnen types mit if abfrage abfragen 
                console.log("Eissorten sind da");
                for (let i: number = 0; i < iceDealerData[group].length; i++) {
                    writeHTML(iceDealerData[group][i], "Eissorten", "Lable" + lableNum);
                    lableNum++;
                }

                //hier eine funktion die sich um die Eissorten kümmert
            }
            else if (group == "Streußel" || group == "Saucen" || group == "Specials" || group == "Sahne") {
                //hier dann eine funtkion die sich allein um die Checkboxen kümmert
                console.log("Toppings werden geladen");

                for (let i: number = 0; i < iceDealerData[group].length; i++) {
                    if (iceDealerData[group][i].inStock == true) {
                        writeHTML(iceDealerData[group][i], group, "Lable" + lableNum);
                        lableNum++; //diese Variable ist dafür da, dass jeder Input und das dazugehörige Label eine gleiche ID bekommen, damit sie zusammen passen. 
                    }
                }
            }
            else if (group == "Becher" || group == "Löffel" || group == "Lieferung") {
                for (let i: number = 0; i < iceDealerData[group].length; i++) {
                    if (iceDealerData[group][i].inStock == true) {
                        writeHTML2(iceDealerData[group][i], group, "Lable" + lableNum);
                        lableNum++; //diese Variable ist dafür da, dass jeder Input und das dazugehörige Label eine gleiche ID bekommen, damit sie zusammen passen. 
                    }
                }
            }

        }
    }
    let formSet: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName('fieldset');
    function addListeners(): void {
         //alle fieldsets in ein Array, um daraus dann die Daten zu bekommen
        //console.log(formSet);
        let i: number = 0;
        while (i < formSet.length) {
            let form: HTMLElement = formSet[i];
            form.addEventListener('change', checkValueAndChange); //jedes element in dem Array bekommt nochmals einen Eventlistener, der auf veränderungen des Wert achtet 
            i++;
        }
        document.getElementById('BestellButton').addEventListener('click', completeOrder);//wenn kunde fertig, funktion ausführen, die testet ob alles ausgefüllt
        document.getElementById('submit').addEventListener('click', submitData);
    }

  
    function writeHTML(_currentData: fieldsetData, _currentID: string, _labelID: string): void {

        console.log(_currentData);
        let topData = document.createElement("div");
        let htmlString = `
            <input type="${_currentData.type}" value="${_currentData.value}" name="${_currentData.name}" id="${_labelID}"> 
            <label for="${_labelID}">${_currentData.name}</label>
        
        `;

        topData.innerHTML = htmlString;
        document.getElementById(_currentID).appendChild(topData);


    }
    //und Gott sah, dass der Code scheiße war und brachte ampelstufen auf diese Welt. 
    function writeHTML2(_currentData: fieldsetData, _currentID: string, _labelID: string): void {

        console.log(_currentData);
        let topData = document.createElement("div");
        let htmlString = `
            <input type="${_currentData.type}" value="${_currentData.value}" name="${_currentData.name}" id="${_labelID}"> 
            <label for="${_labelID}">${_currentData.value}</label>
        
        `;

        topData.innerHTML = htmlString;
        document.getElementById(_currentID).appendChild(topData);


    }
    let iceWorth: number = 0;
    let iceFlavor1: string;
    let iceFlavor2: string;
    let iceFlavor3: string;
    let iceFlavor4: string;
    let iceQuantity1: number = 0;
    let iceQuantity2: number = 0;
    let iceQuantity3: number = 0;
    let iceQuantity4: number = 0;
    let toppingNumber: number = 0;
    let userAGB: boolean;
    let userPayment:boolean;

    function checkValueAndChange(_event: Event): void {
       
        console.log(_event);
        let change: HTMLInputElement = <HTMLInputElement>_event.target;
        //zuerst die Anzahl der Eiskugeln bestimmen 
        if (change.name == "Stepper1") {
                iceQuantity1 = parseInt(change.value);
                writeIceChoice(iceQuantity1, iceFlavor1, "Sorte1");
                renderPrize();
        }
        else if (change.name == "Stepper2") {
                iceQuantity2 = parseInt(change.value);
                writeIceChoice(iceQuantity2, iceFlavor2, "Sorte2");
                renderPrize();
        }
        else if (change.name == "Stepper3") {
                iceQuantity3 = parseInt(change.value);
                writeIceChoice(iceQuantity3, iceFlavor3, "Sorte3");
                renderPrize();
        }
        else if (change.name == "Stepper4") {
                iceQuantity4 = parseInt(change.value);
                writeIceChoice(iceQuantity4, iceFlavor4, "Sorte4");
                renderPrize();
        }
        //Bestimmung welche Eissorte gewählt wurde. 
        else if (change.name == "EisSorte1") {
            iceFlavor1 = change.value;
            writeIceChoice(iceQuantity1, iceFlavor1, "Sorte1");
        }
        else if (change.name == "EisSorte2") {
            iceFlavor2 = change.value;
            writeIceChoice(iceQuantity2, iceFlavor2, "Sorte2");
        }
        else if (change.name == "EisSorte3") {
            iceFlavor3 = change.value;
            writeIceChoice(iceQuantity3, iceFlavor3, "Sorte3");
        }
        else if (change.name == "EisSorte4") {
            iceFlavor4 = change.value;
            writeIceChoice(iceQuantity4, iceFlavor4, "Sorte4");
        }
        //In welchem Gefäß möchte der Kunde sein Eis ? 

        else if (change.value == "Im Becher (kostenlos)") {
            renderCategories(change.value, "BechoWaff");
        }
        else if (change.value == "In der Waffel (kostenlos)") {
            renderCategories(change.value, "BechoWaff");
        }

        else if (change.value == "In der Schoko-Waffel (kostenlos)") {
            renderCategories(change.value, "BechoWaff");
        }
        //jetzt kommen die ganzen Toppings, da toppings einen pauschal Preis haben, wird zubeginn gezählt, wie viele Toppings gewählt wurden
        else if (change.type == "checkbox") {

            if (change.checked == true) {
                toppingNumber += 1;
                let ul = document.createElement('ul');
                let span = `<li id="${change.name}">${change.name}</li>`;

                ul.innerHTML = span;

                document.getElementById("TopÜbersicht").appendChild(ul);
                renderPrize();
            }

             else if (change.checked == false) {
                toppingNumber -= 1;
                document.getElementById(change.name).innerHTML = "";
                renderPrize();
            }
        }
        
        //jetzt kommt die Abfrage gabel oder löffel

        else if (change.value == "Löffel") {
            renderCategories(change.value, "GaboLoff");
        }
        else if (change.value == "Gabel") {
            renderCategories(change.value, "GaboLoff");
        }
        else if (change.value == "Stäbchen") {
            renderCategories(change.value, "GaboLoff");
        }
        else if (change.value == "Wir sind zu Zweit") {
            renderCategories(change.value, "GaboLoff");
        }

        // jetzt kommt der Part mit den Delivery Arten
        else if (change.value == "Same Day Delivery") {
            renderCategories(change.value, "ShipTime");
        }
        else if (change.value == "Same Hour Delivery") {
            renderCategories(change.value, "ShipTime");
        }
        else if (change.value == "5-10 Werktage ") {
            renderCategories(change.value, "ShipTime");
        }
        else if (change.value == "Beamen") {
            renderCategories(change.value, "ShipTime");
        }
        // hier die Abfragen über Namen und co 
        else if (change.name == "Name") {
            renderCategories(change.value, "UserName");
        }
        else if (change.name == "Mail") {
            renderCategories(change.value, "UserMail")
        }
        else if (change.name == "Street") {
            renderCategories(change.value, "UserStreet")
        }
        else if (change.name == "Hausnr") {
            renderCategories(change.value, "UserHouseNum")
        }
        else if (change.name == "PLZ") {
            renderCategories(change.value, "UserPLZ")
        }
        else if (change.name == "Stadt") {
            renderCategories(change.value, "UserCity")
        }
        else if (change.name == "Telenr") {
            renderCategories(change.value, "UserTele")
        }
        else if (change.name == "Agbgroup") {
            //console.log("test2")
            userAGB = true;
        }
        else if(change.name == "Zahlungsgroup"){
            userPayment = true;
        }
    }
 
        function completeOrder(_event: Event): void {
            if (iceQuantity1 + iceQuantity2 + iceQuantity3 + iceQuantity4 < 1) {
                alert("Du musst Eis bestellen um Eis zu bekommen...");
            }
            else if (userAGB == undefined) {
                console.log("test")
                alert("Bitte kreuze die AGB optionen an!");
            }
            else if(userPayment == undefined) {
                alert("Bitte gib noch eine Zahlungsmöglichkeit an");
            }
            else {
                alert("Vielen Dank für deine Bestellung, sie wird in kürze bearbeitet")
            }
        }


    function writeIceChoice(_x: number, _y: string, _html: string): void {
        document.getElementById(_html).innerHTML = "";
        let pCon = document.createElement('p');
        let p = `<span>  ${_x} Kugel(n) ${_y}</span>`;

        pCon.innerHTML = p;

        document.getElementById(_html).appendChild(pCon);

    }
   
    //funkion die die Darreichungsform und Löffel anzeigt
    function renderCategories(_r: string, _id: string): void {
        document.getElementById(_id).innerHTML = "";
        let pCon = document.createElement('span');
        let span = `${_r}`;
        pCon.innerHTML = span;
        document.getElementById(_id).appendChild(pCon);

        renderPrize();
    }



    function renderPrize(): void {
        iceWorth = (1.55 * (iceQuantity1 + iceQuantity2 + iceQuantity3 + iceQuantity4)) + (toppingNumber * 0.80);

        document.getElementById('Preis').innerHTML = "";
        let pCon = document.createElement('p');
        let span = `Zu zahlen: ${iceWorth}€`;

        pCon.innerHTML = span;

        document.getElementById('Preis').appendChild(pCon);

    }

    //funktion mit den Server Sachen:

    function submitData(): void {
        console.log("Submit gefunden"); 
        let urlSchreiben: string = "http://ios-eia2.herokuapp.com/?name=hello";
        let xhr: XMLHttpRequest = new XMLHttpRequest();

        xhr.send(urlSchreiben);
    }
    console.log(submitData);


}



