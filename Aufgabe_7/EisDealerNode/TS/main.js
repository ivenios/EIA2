var EisDealerFreude;
(function (EisDealerFreude) {
    /* Aufgabe 7
        Name: Iven Otis Sieglen
        Matrikel: 261012
        Datum: 09.05.2019
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. Dieser Code entstand in Nacharbeit mit Michel Orlik und Pascal Michel*/
    window.addEventListener("load", init);
    let namen;
    let strasseHN;
    let ort;
    /* INIT FUNKTION */
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", aenderungen);
        }
        let schreibEis = ``;
        for (let i = 0; i < EisDealerFreude.iceDealerData["Eissorten"].length; i++) {
            schreibEis += `<input type="number" name="Eissorte${i}" step="1" min="0" max="30" value="0"/> Kugeln ${EisDealerFreude.iceDealerData["Eissorten"][i].name}<br>`;
        }
        document.getElementById("eisauswahl").innerHTML = schreibEis;
        document.getElementById("checkButton").addEventListener("click", checkWhetherComplete); //ich lege die submit funktion und die überprüffunktion in einen Button
        // document.getElementById("checkButton").addEventListener("click", checkWhetherComplete);
        let schreibZutaten = ``;
        for (let i = 0; i < EisDealerFreude.iceDealerData["zutat"].length; i++) {
            schreibZutaten += `<input type="checkbox" name="Zutat${i}" id="check${i + 1}"> <label for="check${i + 1}"> ${EisDealerFreude.iceDealerData["zutat"][i].name}</label>`;
        }
        document.getElementById("zutatenauswahl").innerHTML = schreibZutaten;
    }
    /* ÄNDERUNGEN-FUNKTION */
    function aenderungen(_event) {
        console.log(_event);
        let zuSchreiben;
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        if (target.name.substr(0, 8) == "Eissorte") {
            let nummer = parseInt(target.name.substr(8, 2));
            EisDealerFreude.iceDealerData["Eissorten"][nummer].value = parseInt(target.value);
        }
        if (target.name.substr(0, 5) == "Zutat") {
            let nummer = parseInt(target.name.substr(5, 2));
            let ausgewaehlt = 0;
            if (target.checked == true) {
                ausgewaehlt = 1;
            }
            EisDealerFreude.iceDealerData["zutat"][nummer].value = ausgewaehlt;
        }
        if (target.name == "waffelBecher") {
            if (target.value == "Waffel") {
                EisDealerFreude.iceDealerData["waffelBecher"][0].value = 1;
                EisDealerFreude.iceDealerData["waffelBecher"][1].value = 0;
            }
            else {
                EisDealerFreude.iceDealerData["waffelBecher"][0].value = 0;
                EisDealerFreude.iceDealerData["waffelBecher"][1].value = 1;
            }
        }
        if (target.name == "RadiogroupLog") {
            for (let i = 0; i < EisDealerFreude.iceDealerData["logistik"].length; i++) {
                if (EisDealerFreude.iceDealerData["logistik"][i].name == target.value) {
                    EisDealerFreude.iceDealerData["logistik"][i].value = 1;
                }
                else {
                    EisDealerFreude.iceDealerData["logistik"][i].value = 0;
                }
            }
        }
        if (target.name == "Namen") {
            namen = target.value;
        }
        if (target.name == "StrasseHN") {
            strasseHN = target.value;
        }
        if (target.name == "PLZOrt") {
            ort = target.value;
        }
        let summe = 0;
        for (let i = 0; i < EisDealerFreude.iceDealerData["Eissorten"].length; i++) {
            summe += EisDealerFreude.iceDealerData["Eissorten"][i].price * EisDealerFreude.iceDealerData["Eissorten"][i].value;
        }
        for (let i = 0; i < EisDealerFreude.iceDealerData["zutat"].length; i++) {
            summe += EisDealerFreude.iceDealerData["zutat"][i].price * EisDealerFreude.iceDealerData["zutat"][i].value;
        }
        for (let i = 0; i < EisDealerFreude.iceDealerData["logistik"].length; i++) {
            summe += EisDealerFreude.iceDealerData["logistik"][i].price * EisDealerFreude.iceDealerData["logistik"][i].value;
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
        for (let i = 0; i < EisDealerFreude.iceDealerData["zutat"].length; i++) {
            if (EisDealerFreude.iceDealerData["zutat"][i].value == 1) {
                zuSchreiben += `<br>${EisDealerFreude.iceDealerData["zutat"][i].name}<br>`;
            }
        }
        zuSchreiben += `<hr>Darreichungsform: `;
        if (EisDealerFreude.iceDealerData["waffelBecher"][0].value == 1) {
            zuSchreiben += `Waffel<br>`;
        }
        else if (EisDealerFreude.iceDealerData["waffelBecher"][1].value == 1) {
            zuSchreiben += `Becher<br>`;
        }
        zuSchreiben += `<hr>Lieferung: `;
        for (let i = 0; i < EisDealerFreude.iceDealerData["logistik"].length; i++) {
            if (EisDealerFreude.iceDealerData["logistik"][i].value == 1) {
                zuSchreiben += `${EisDealerFreude.iceDealerData["logistik"][i].name}<br>`;
            }
        }
        zuSchreiben += `<hr>Lieferadresse:<p>${namen}</p><p>${strasseHN}</p><p>${ort}</p>`;
        zuSchreiben += `<hr>Summe: ${summe.toFixed(2)} Euro`;
        zuSchreiben += `<hr><button id="checkButton">Beam me up!</button>`;
        document.getElementById("zusammenfassung").innerHTML = zuSchreiben;
    }
    /* ÜBERPRÜFUNG ob die Bestellung komlett ist */
    function checkWhetherComplete() {
        let valueKugeln = 0;
        for (let i = 0; i < EisDealerFreude.iceDealerData["Eissorten"].length; i++) {
            if (EisDealerFreude.iceDealerData["Eissorten"][i].value > 0) {
                valueKugeln += EisDealerFreude.iceDealerData["Eissorten"][i].value;
            }
        }
        if (valueKugeln == 0) {
            alert("Wir unterbrechen die Mission nur, wenn du Eis kaufst!");
        }
        else if (EisDealerFreude.iceDealerData["waffelBecher"][0].value == 0 && EisDealerFreude.iceDealerData["waffelBecher"][1].value == 0) {
            alert("Das Eis kommt im Becher, oder in der Waffel und nicht anders!");
        }
        else if (EisDealerFreude.iceDealerData["logistik"][0].value == 0 && EisDealerFreude.iceDealerData["logistik"][1].value == 0 && EisDealerFreude.iceDealerData["logistik"][2].value == 0) {
            alert("Also das Eis muss zu dir. Wie?  Das entscheidest du");
        }
        else if (namen == undefined || strasseHN == undefined || ort == undefined) {
            alert("For Research reasons, please tell me about you!");
        }
        else {
            submitData(); //hier werden dann die Daten an den Heroku Server gesendet 
        }
    }
    /* SUBMIT-DATA-FUNKTION - Für Aufgabe 6 geschrieben */
    let urlSchreiben = "https://ios-eia2.herokuapp.com/?";
    function submitData() {
        console.log("Submit gefunden");
        for (let i = 0; i < EisDealerFreude.iceDealerData["Eissorten"].length; i++) {
            if (EisDealerFreude.iceDealerData["Eissorten"][i].value != 0) {
                urlSchreiben += `${EisDealerFreude.iceDealerData["Eissorten"][i].name}=${EisDealerFreude.iceDealerData["Eissorten"][i].value}&`;
            }
        }
        for (let i = 0; i < EisDealerFreude.iceDealerData["zutat"].length; i++) {
            if (EisDealerFreude.iceDealerData["zutat"][i].value != 0) {
                urlSchreiben += `${EisDealerFreude.iceDealerData["zutat"][i].name}=${EisDealerFreude.iceDealerData["zutat"][i].value}&`;
            }
        }
        for (let i = 0; i < EisDealerFreude.iceDealerData["waffelBecher"].length; i++) {
            if (EisDealerFreude.iceDealerData["waffelBecher"][i].value != 0) {
                urlSchreiben += `${EisDealerFreude.iceDealerData["waffelBecher"][i].name}=${EisDealerFreude.iceDealerData["waffelBecher"][i].value}&`;
            }
        }
        for (let i = 0; i < EisDealerFreude.iceDealerData["logistik"].length; i++) {
            if (EisDealerFreude.iceDealerData["logistik"][i].value != 0) {
                urlSchreiben += `${EisDealerFreude.iceDealerData["logistik"][i].name}=${EisDealerFreude.iceDealerData["logistik"][i].value}&`;
            }
        }
        if (namen != undefined && strasseHN != undefined && ort != undefined && ort != undefined) {
            urlSchreiben += `&Kundenname=${namen}&Kundenadresse=${strasseHN}&PostleitzahlOrt=${ort}`;
        }
        console.log(urlSchreiben);
        sendRequestWithCustomData();
    }
    function sendRequestWithCustomData() {
        console.log("test");
        let xhr = new XMLHttpRequest();
        xhr.open("GET", urlSchreiben, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
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