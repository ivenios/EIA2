var EisDealerFreude;
(function (EisDealerFreude) {
    /* Aufgabe 7
        Name: Iven Otis Sieglen
        Matrikel: 261012
        Datum: 09.05.2019
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. Dieser Code entstand in Nacharbeit mit Michel Orlik und Pascal Michel*/
    document.addEventListener('DOMContentLoaded', init);
    let namen;
    let strasseHN;
    let ort;
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        writefieldsets();
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChanges);
        }
        document.getElementById("checkButton").addEventListener("click", checkWhetherComplete); //ich lege die submit funktion und die überprüffunktion in einen Button
        // document.getElementById("checkButton").addEventListener("click", checkWhetherComplete);
    }
    function writefieldsets() {
        let writeInnerHTML = ``;
        for (let group in EisDealerFreude.iceDealerData) {
            if (group == "Eissorten") {
                console.log(EisDealerFreude.iceDealerData[group]);
                writeInnerHTML += `<fieldset> <legend>Eissorten:</legend></br> <p>1.55 Pro Kugel</p>`;
                for (let i = 0; i < EisDealerFreude.iceDealerData[group].length; i++) {
                    writeInnerHTML += `<input type="number" name="Eissorte${i}" step="1" min="0" max="30" value="0"/> Kugel(n) ${EisDealerFreude.iceDealerData[group][i].name}<br>`;
                }
                writeInnerHTML += `</fieldset>`;
            }
            else if (group == "Toppings") {
                writeInnerHTML += `<fieldset> <legend>Toppings(unsere besten):</legend> </br> <p>Nur 80ct das Stück</p>`;
                for (let i = 0; i < EisDealerFreude.iceDealerData[group].length; i++) {
                    writeInnerHTML += `<input type="checkbox" name="Zutat${i}" id="check${i + 1}"> <label for="check${i + 1}"> ${EisDealerFreude.iceDealerData[group][i].name}</label>`;
                }
                writeInnerHTML += `</fieldset>`;
            }
            /*
                        else {
                            writeInnerHTML += `<fieldset> <legend>${iceDealerData[group]}</legend>`;
                            for (let i: number = 0; i < iceDealerData[group].length; i++) {
                                writeInnerHTML += `<input type="radio" name="${iceDealerData[group]}" id="check${i + 1}"> <label for="check${i + 1}"> ${iceDealerData[group][i].name}</label>`;
                            }
                            writeInnerHTML  += `</fieldset>`;
                        }
            */
        }
        document.getElementById("renderHere").innerHTML = writeInnerHTML;
    }
    function handleChanges(_event) {
        console.log(_event);
        let zuSchreiben;
        let change = _event.target;
        console.log("Changed " + change.name + " to " + change.value);
        if (change.name.substr(0, 8) == "Eissorte") {
            let nummer = parseInt(change.name.substr(8, 2));
            EisDealerFreude.iceDealerData["Eissorten"][nummer].value = parseInt(change.value);
        }
        if (change.name.substr(0, 5) == "Zutat") {
            let nummer = parseInt(change.name.substr(5, 2));
            let ausgewaehlt = 0;
            if (change.checked == true) {
                ausgewaehlt = 1;
            }
            EisDealerFreude.iceDealerData["Toppings"][nummer].value = ausgewaehlt;
        }
        if (change.name == "Darrbietungsform:") {
            if (change.value == "Waffel") {
                EisDealerFreude.iceDealerData["Darrbietungsform:"][0].value = 1;
                EisDealerFreude.iceDealerData["Darrbietungsform:"][1].value = 0;
            }
            else {
                EisDealerFreude.iceDealerData["Darrbietungsform:"][0].value = 0;
                EisDealerFreude.iceDealerData["Darrbietungsform:"][1].value = 1;
            }
        }
        if (change.name == "Lieferoptionen") {
            for (let i = 0; i < EisDealerFreude.iceDealerData["Lieferoptionen"].length; i++) {
                if (EisDealerFreude.iceDealerData["Lieferoptionen"][i].name == change.value) {
                    EisDealerFreude.iceDealerData["Lieferoptionen"][i].value = 1;
                }
                else {
                    EisDealerFreude.iceDealerData["Lieferoptionen"][i].value = 0;
                }
            }
        }
        if (change.name == "Namen") {
            namen = change.value;
        }
        if (change.name == "StrasseHN") {
            strasseHN = change.value;
        }
        if (change.name == "PLZOrt") {
            ort = change.value;
        }
        let summe = 0;
        for (let i = 0; i < EisDealerFreude.iceDealerData["Eissorten"].length; i++) {
            summe += EisDealerFreude.iceDealerData["Eissorten"][i].price * EisDealerFreude.iceDealerData["Eissorten"][i].value;
        }
        for (let i = 0; i < EisDealerFreude.iceDealerData["Toppings"].length; i++) {
            summe += EisDealerFreude.iceDealerData["Toppings"][i].price * EisDealerFreude.iceDealerData["Toppings"][i].value;
        }
        for (let i = 0; i < EisDealerFreude.iceDealerData["Lieferoptionen"].length; i++) {
            summe += EisDealerFreude.iceDealerData["Lieferoptionen"][i].price * EisDealerFreude.iceDealerData["Lieferoptionen"][i].value;
        }
        zuSchreiben = `<h4>Ihre Bestellung:</h4><hr>Gewähltes Eis:<br>`;
        for (let i = 0; i < EisDealerFreude.iceDealerData["Eissorten"].length; i++) {
            if (EisDealerFreude.iceDealerData["Eissorten"][i].value == 1) {
                zuSchreiben += `<br>${EisDealerFreude.iceDealerData["Eissorten"][i].value.toString()} Kugel ${EisDealerFreude.iceDealerData["Eissorten"][i].name}<br>`;
            }
            else if (EisDealerFreude.iceDealerData["Eissorten"][i].value > 1) {
                zuSchreiben += `<br>${EisDealerFreude.iceDealerData["Eissorten"][i].value.toString()} Kugeln ${EisDealerFreude.iceDealerData["Eissorten"][i].name}<br>`;
            }
        }
        zuSchreiben += `<hr>Zusätze:<br>`;
        for (let i = 0; i < EisDealerFreude.iceDealerData["Toppings"].length; i++) {
            if (EisDealerFreude.iceDealerData["Toppings"][i].value == 1) {
                zuSchreiben += `<br>${EisDealerFreude.iceDealerData["Toppings"][i].name}<br>`;
            }
        }
        zuSchreiben += `<hr>Darreichungsform: `;
        if (EisDealerFreude.iceDealerData["Darrbietungsform:"][0].value == 1) {
            zuSchreiben += `Waffel<br>`;
        }
        else if (EisDealerFreude.iceDealerData["Darrbietungsform:"][1].value == 1) {
            zuSchreiben += `Becher<br>`;
        }
        zuSchreiben += `<hr>Lieferung: `;
        for (let i = 0; i < EisDealerFreude.iceDealerData["Lieferoptionen"].length; i++) {
            if (EisDealerFreude.iceDealerData["Lieferoptionen"][i].value == 1) {
                zuSchreiben += `${EisDealerFreude.iceDealerData["Lieferoptionen"][i].name}<br>`;
            }
        }
        zuSchreiben += `<hr>Lieferadresse:<p>${namen}</p><p>${strasseHN}</p><p>${ort}</p>`;
        zuSchreiben += `<hr>Summe: ${summe.toFixed(2)} Euro`;
        zuSchreiben += `<hr><button id="checkButton">Beam me up!</button>`;
        document.getElementById("zusammenfassung").innerHTML = zuSchreiben;
    }
    function checkWhetherComplete() {
        let iceValue = 0;
        for (let i = 0; i < EisDealerFreude.iceDealerData["Eissorten"].length; i++) {
            if (EisDealerFreude.iceDealerData["Eissorten"][i].value > 0) {
                iceValue += EisDealerFreude.iceDealerData["Eissorten"][i].value;
            }
        }
        if (iceValue == 0) {
            alert("Du musst Eis bestellen um Eis zu erhalten.");
        }
        else if (EisDealerFreude.iceDealerData["Darrbietungsform:"][0].value == 0 && EisDealerFreude.iceDealerData["Darrbietungsform:"][1].value == 0) {
            alert("Bitte Wähle eine Darbierungsform");
        }
        else if (EisDealerFreude.iceDealerData["Lieferoptionen"][0].value == 0 && EisDealerFreude.iceDealerData["Lieferoptionen"][1].value == 0 && EisDealerFreude.iceDealerData["Lieferoptionen"][2].value == 0) {
            alert("Bitte gib eine Lieferoption an.");
        }
        else if (namen == undefined || strasseHN == undefined || ort == undefined) {
            alert("Bitte überprüfe deine persönlichen Angaben!");
        }
        else {
            submitData(); //hier werden dann die Daten an den Heroku Server gesendet 
        }
    }
    //ab  hier wird der URL Sring geschrieben 
    function submitData() {
        let urlSchreiben = "https://ios-eia2.herokuapp.com/?";
        for (let group in EisDealerFreude.iceDealerData) {
            for (let i = 0; i < EisDealerFreude.iceDealerData[group].length; i++) {
                if (EisDealerFreude.iceDealerData[group][i].value != 0) {
                    if (group == "Eissorten") {
                        urlSchreiben += `IHREEISSORTEN&`;
                        urlSchreiben += `${EisDealerFreude.iceDealerData[group][i].name}=${EisDealerFreude.iceDealerData[group][i].value}_Kugel(n)&`;
                    }
                    else if (group == "Toppings") {
                        urlSchreiben += `IHRETOPPINGS&`;
                        urlSchreiben += `${EisDealerFreude.iceDealerData[group][i].name}=${EisDealerFreude.iceDealerData[group][i].value}&`;
                    }
                    else {
                        urlSchreiben += `${EisDealerFreude.iceDealerData[group][i].name}=${EisDealerFreude.iceDealerData[group][i].value}&`;
                    }
                }
            }
        }
        if (namen != undefined && strasseHN != undefined && ort != undefined && ort != undefined) {
            urlSchreiben += `&Kundenname=${namen}&Kundenadresse=${strasseHN}&PostleitzahlOrt=${ort}`;
        }
        /* Alter Code:
                for (let i: number = 0; i < iceDealerData["Toppings"].length; i++) {
                    if (iceDealerData["Toppings"][i].value != 0) {
                        urlSchreiben += `</br>TOPPINGS&${iceDealerData["Toppings"][i].name}=${iceDealerData["Toppings"][i].value}&`;
                    }
                }
        
                for (let i: number = 0; i < iceDealerData["Darrbietungsform:"].length; i++) {
                    if (iceDealerData["Darrbietungsform:"][i].value != 0) {
                        urlSchreiben += `${iceDealerData["Darrbietungsform:"][i].name}=${iceDealerData["Darrbietungsform:"][i].value}&`;
                    }
                }
        
                for (let i: number = 0; i < iceDealerData["Lieferoptionen"].length; i++) {
                    if (iceDealerData["Lieferoptionen"][i].value != 0) {
                        urlSchreiben += `${iceDealerData["Lieferoptionen"][i].name}=${iceDealerData["Lieferoptionen"][i].value}&`;
                    }
                }
        */
        console.log(urlSchreiben);
        sendRequestWithCustomData(urlSchreiben); //URl string wird an Funktion übergeben, welche diesen wiederum an Heruko sendet
    }
    function sendRequestWithCustomData(_urlSchreiben) {
        console.log("test");
        let xhr = new XMLHttpRequest();
        xhr.open("GET", _urlSchreiben, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target; //der bearbeitete String wird wieder entgegengenommen und untern in die htmlString eingearbeitet
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById('UserInterface').innerHTML = "";
            let htmlString = `
                <div class="EndÜbersicht">
                    <p> Vielen Dank für deine Bestellung, hier ist nochmal eine Übersicht:</p>
                    <p> ${xhr.response}</p>
                </div>
            `;
            document.getElementById('UserInterface').innerHTML = htmlString;
            //console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            //console.log("response: " + xhr.response);
        }
    }
})(EisDealerFreude || (EisDealerFreude = {}));
//# sourceMappingURL=main.js.map