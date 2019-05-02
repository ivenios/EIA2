var EisDealerFreude;
(function (EisDealerFreude) {
    /*
        Aufgabe: Aufgabe 6 Eisdealer
        Name: Iven Otis Sieglen
        Matrikel: 261012
        Datum: Sonntag der 1. Mai
            
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
        */
    document.addEventListener('DOMContentLoaded', init);
    let lableNum = 0;
    function init() {
        renderFieldsets();
        addListeners();
    }
    function renderFieldsets() {
        for (let group in EisDealerFreude.iceDealerData) {
            if (group == "Eissorten") { //mit forschleife und iceDealerData[group][hier mit for schleife durch gehen] und dann die einzelnen types mit if abfrage abfragen 
                console.log("Eissorten sind da");
                for (let i = 0; i < EisDealerFreude.iceDealerData[group].length; i++) {
                    if (EisDealerFreude.iceDealerData[group][i].type == "options") {
                        console.log("Eissorte " + EisDealerFreude.iceDealerData[group][i].name + " wird geladen");
                        if (EisDealerFreude.iceDealerData[group][i].inStock == true) {
                            if (EisDealerFreude.iceDealerData[group][i].value == "Langweilige Eissorten") {
                                let a = 1;
                                while (a <= 4) {
                                    writeHTMLIceFlavor(EisDealerFreude.iceDealerData[group][i], "IceOptionsOne" + a);
                                    a++;
                                }
                            }
                            else if (EisDealerFreude.iceDealerData[group][i].value == "Moderne Eissorten") {
                                let a = 1;
                                while (a <= 4) {
                                    writeHTMLIceFlavor(EisDealerFreude.iceDealerData[group][i], "IceOptionsTwo" + a);
                                    a++;
                                }
                            }
                        }
                    }
                }
                //hier eine funktion die sich um die Eissorten kümmert
            }
            else if (group == "Streußel" || group == "Saucen" || group == "Specials" || group == "Sahne") {
                //hier dann eine funtkion die sich allein um die Checkboxen kümmert
                console.log("Toppings werden geladen");
                for (let i = 0; i < EisDealerFreude.iceDealerData[group].length; i++) {
                    if (EisDealerFreude.iceDealerData[group][i].inStock == true) {
                        writeHTML(EisDealerFreude.iceDealerData[group][i], group, "Lable" + lableNum);
                        lableNum++; //diese Variable ist dafür da, dass jeder Input und das dazugehörige Label eine gleiche ID bekommen, damit sie zusammen passen. 
                    }
                }
            }
            else if (group == "Becher" || group == "Löffel" || group == "Lieferung") {
                for (let i = 0; i < EisDealerFreude.iceDealerData[group].length; i++) {
                    if (EisDealerFreude.iceDealerData[group][i].inStock == true) {
                        writeHTML(EisDealerFreude.iceDealerData[group][i], group, "Lable" + lableNum);
                        lableNum++; //diese Variable ist dafür da, dass jeder Input und das dazugehörige Label eine gleiche ID bekommen, damit sie zusammen passen. 
                    }
                }
            }
        }
    }
    function addListeners() {
        let formSet = document.getElementsByTagName('fieldset'); //alle fieldsets in ein Array, um daraus dann die Daten zu bekommen
        //console.log(formSet);
        let i = 0;
        while (i < formSet.length) {
            let form = formSet[i];
            form.addEventListener('change', checkValueAndChange); //jedes element in dem Array bekommt nochmals einen Eventlistener, der auf veränderungen des Wert achtet 
            i++;
        }
        document.getElementById('BestellButton').addEventListener('click', completeOrder); //wenn kunde fertig, funktion ausführen, die testet ob alles ausgefüllt
        document.getElementById('SendeBestellung').addEventListener('click', submitData);
    }
    function writeHTMLIceFlavor(_currentData, _currentID) {
        console.log(_currentData);
        let optData = document.createElement("option");
        let htmlString = `
            <option value="${_currentData.name}">${_currentData.name}</option>
        
        `;
        optData.innerHTML = htmlString;
        document.getElementById(_currentID).appendChild(optData);
    }
    function writeHTML(_currentData, _currentID, _labelID) {
        console.log(_currentData);
        let topData = document.createElement("div");
        let htmlString = `
            <input type="${_currentData.type}" value="${_currentData.name}" name="${_currentData.value}" id="${_labelID}"> 
            <label for="${_labelID}">${_currentData.name}</label>
        
        `;
        topData.innerHTML = htmlString;
        document.getElementById(_currentID).appendChild(topData);
    }
    let iceWorth = 0;
    let iceQuantity1 = 0;
    let iceQuantity2 = 0;
    let iceQuantity3 = 0;
    let iceQuantity4 = 0;
    let iceFlavor1;
    let iceFlavor2;
    let iceFlavor3;
    let iceFlavor4;
    let toppingNumber = 0;
    let userName;
    let userStreet;
    let userHousnr;
    let userPLZ;
    let UserCity;
    let userMail;
    let userBecher;
    let userGabel;
    let userShippingSpeed;
    let userAGB;
    let userPayment;
    function checkValueAndChange(_event) {
        console.log(_event);
        let change = _event.target;
        //zuerst die Anzahl der Eiskugeln bestimmen 
        if (change.name == "Stepper1") {
            if (iceFlavor1 == undefined) {
                alert("Bitte zuerst die Eissorte Wählen");
            }
            else {
                iceQuantity1 = parseInt(change.value);
                writeIceChoice(iceQuantity1, iceFlavor1, "Sorte1");
                renderPrize();
            }
        }
        else if (change.name == "Stepper2") {
            if (iceFlavor2 == undefined) {
                alert("Bitte zuerst die Eissorte Wählen");
            }
            else {
                iceQuantity2 = parseInt(change.value);
                writeIceChoice(iceQuantity2, iceFlavor2, "Sorte2");
                renderPrize();
            }
        }
        else if (change.name == "Stepper3") {
            if (iceFlavor3 == undefined) {
                alert("Bitte zuerst die Eissorte Wählen");
            }
            else {
                iceQuantity3 = parseInt(change.value);
                writeIceChoice(iceQuantity3, iceFlavor3, "Sorte3");
                renderPrize();
            }
        }
        else if (change.name == "Stepper4") {
            if (iceFlavor4 == undefined) {
                alert("Bitte zuerst die Eissorte Wählen");
            }
            else {
                iceQuantity4 = parseInt(change.value);
                writeIceChoice(iceQuantity4, iceFlavor4, "Sorte4");
                renderPrize();
            }
        }
        //Bestimmung welche Eissorte gewählt wurde. 
        else if (change.name == "Select1") {
            iceFlavor1 = change.value;
            writeIceChoice(iceQuantity1, iceFlavor1, "Sorte1");
        }
        else if (change.name == "Select2") {
            iceFlavor2 = change.value;
            writeIceChoice(iceQuantity2, iceFlavor2, "Sorte2");
        }
        else if (change.name == "Select3") {
            iceFlavor3 = change.value;
            writeIceChoice(iceQuantity3, iceFlavor3, "Sorte3");
        }
        else if (change.name == "Select4") {
            iceFlavor4 = change.value;
            writeIceChoice(iceQuantity4, iceFlavor4, "Sorte4");
        }
        //In welchem Gefäß möchte der Kunde sein Eis ? 
        else if (change.value == "Becher") {
            renderCategories("Becher", "BechoWaff");
            userBecher = change.value;
        }
        else if (change.value == "Waffel") {
            renderCategories("Waffel", "BechoWaff");
            userBecher = change.value;
        }
        else if (change.value == "Schoko-Waffel") {
            renderCategories("Schoko-Waffel", "BechoWaff");
            userBecher = change.value;
        }
        //jetzt kommen die ganzen Toppings, da toppings einen pauschal Preis haben, wird zubeginn gezählt, wie viele Toppings gewählt wurden
        else if (change.type == "checkbox") {
            if (change.checked == true) {
                toppingNumber += 1;
                let pCon = document.createElement('p');
                let span = `${change.value}`;
                pCon.innerHTML = span;
                document.getElementById("TopÜbersicht").appendChild(pCon);
                renderPrize();
            }
            if (change.checked == false) {
                toppingNumber -= 1;
                document.getElementById(change.name).innerHTML = "";
                renderPrize();
            }
        }
        //jetzt kommt die Abfrage gabel oder löffel
        else if (change.value == "Löffel") {
            renderCategories("Löffel", "GaboLoff");
            userGabel = change.value;
        }
        else if (change.value == "Gabel") {
            renderCategories("Gabel", "GaboLoff");
            userGabel = change.value;
        }
        else if (change.value == "Stäbchen") {
            renderCategories("Stäbchen", "GaboLoff");
            userGabel = change.value;
        }
        else if (change.value == "Zwei Löffel") {
            renderCategories("Zwei Löffel", "GaboLoff");
            userGabel = change.value;
        }
        // jetzt kommt der Part mit den Delivery Arten
        else if (change.value == "Same Day Delivery") {
            renderCategories("noch am selben Tag", "ShipTime");
            userShippingSpeed = change.value;
        }
        else if (change.value == "Same Hour Delivery") {
            renderCategories("noch in der selben Stunde", "ShipTime");
            userShippingSpeed = change.value;
        }
        else if (change.value == "5-10 Werktage ") {
            renderCategories("in 5-10 Werktagen", "ShipTime");
            userShippingSpeed = change.value;
        }
        else if (change.value == "Beamen") {
            renderCategories(" das in den nächsten 10 Sekunden ", "ShipTime");
            userShippingSpeed = change.value;
        }
        // hier die Abfragen über Namen und co 
        else if (change.name == "Name") {
            renderCategories(change.value, "UserName");
            userName = change.value;
        }
        else if (change.name == "Mail") {
            renderCategories(change.value, "UserMail");
            userMail = change.value;
        }
        else if (change.name == "Street") {
            renderCategories(change.value, "UserStreet");
            userStreet = change.value;
        }
        else if (change.name == "Hausnr") {
            renderCategories(change.value, "UserHouseNum");
            userHousnr = change.value;
        }
        else if (change.name == "PLZ") {
            renderCategories(change.value, "UserPLZ");
            userPLZ = change.value;
        }
        else if (change.name == "Stadt") {
            renderCategories(change.value, "UserCity");
            UserCity = change.value;
        }
        else if (change.name == "Telenr") {
            renderCategories(change.value, "UserTele");
        }
        else if (change.name == "Agbgroup") {
            //console.log("test2")
            userAGB = true;
        }
        else if (change.name == "Zahlungsgroup") {
            userPayment = true;
        }
    }
    function completeOrder(_event) {
        if (iceQuantity1 + iceQuantity2 + iceQuantity3 + iceQuantity4 < 1) {
            alert("Du musst Eis bestellen um Eis zu bekommen...");
        }
        else if (userName == undefined) {
            alert("Ohne Namen wird es sehr schwer das Eis zu liefen.");
        }
        else if (userMail == undefined) {
            alert("Bitte gibt uns noch deine Mail-Adresse an, damit wir die Bestätigung versenden können");
        }
        else if (userHousnr == undefined) {
            alert("Bitte gib noch deine Hausnummer an");
        }
        else if (userPLZ == undefined) {
            alert("Na, wie sieht es aus, welche PLZ hast du?");
        }
        else if (userStreet == undefined) {
            alert("Bitte gib uns noch deine Straße an");
        }
        else if (UserCity == undefined) {
            alert("Bitte gib uns noch die Stadt an, in der du lebst");
        }
        else if (toppingNumber == 0) {
            alert("Möchtest du keine Toppings? ;)");
        }
        else if (userBecher == undefined) {
            alert("In was möchtest du dein Eis?");
        }
        else if (userShippingSpeed == undefined) {
            alert("Wie schnell soll dein Eis dich erreichen?");
        }
        else if (userGabel == undefined) {
            alert("Möchtest du keinen Löffel?");
        }
        else if (userAGB == undefined) {
            console.log("test");
            alert("Bitte kreuze die AGB optionen an!");
        }
        else if (userPayment == undefined) {
            alert("Bitte gib noch eine Zahlungsmöglichkeit an");
        }
        else {
            alert("Vielen Dank für deine Bestellung, sie wird in kürze bearbeitet");
        }
    }
    function writeIceChoice(_x, _y, _html) {
        document.getElementById(_html).innerHTML = "";
        let pCon = document.createElement('p');
        let p = `<span>  ${_x} Kugel(n) ${_y}</span>`;
        pCon.innerHTML = p;
        document.getElementById(_html).appendChild(pCon);
    }
    //funkion die die Darreichungsform und Löffel anzeigt
    function renderCategories(_r, _id) {
        document.getElementById(_id).innerHTML = "";
        let pCon = document.createElement('span');
        let span = `${_r}`;
        pCon.innerHTML = span;
        document.getElementById(_id).appendChild(pCon);
        renderPrize();
    }
    function renderPrize() {
        iceWorth = (1.55 * (iceQuantity1 + iceQuantity2 + iceQuantity3 + iceQuantity4)) + (toppingNumber * 0.80);
        document.getElementById('Preis').innerHTML = "";
        let pCon = document.createElement('p');
        let span = `Zu zahlen: ${iceWorth}€`;
        pCon.innerHTML = span;
        document.getElementById('Preis').appendChild(pCon);
    }
    //funktion mit den Server Sachen:
    function submitData() {
        console.log("Submit gefunden");
        let urlSchreiben = "http://ios-eia2.herokuapp.com/";
        let xhr = new XMLHttpRequest();
        for (let i = 0; i < EisDealerFreude.iceDealerData["Eissorten"].length; i++) {
            urlSchreiben += `${EisDealerFreude.iceDealerData["Eissorten"][i].name}&`;
        }
        xhr.open("GET", urlSchreiben, true);
        xhr.send();
        // console.log(urlSchreiben);
        // window.open(urlSchreiben);
    }
})(EisDealerFreude || (EisDealerFreude = {}));
//# sourceMappingURL=main.js.map