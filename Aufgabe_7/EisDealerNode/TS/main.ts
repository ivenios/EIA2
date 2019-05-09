namespace EisDealerFreude {
    /* Aufgabe 7 
        Name: Iven Otis Sieglen
        Matrikel: 261012
        Datum: 09.05.2019
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. Dieser Code entstand in Nacharbeit mit Michel Orlik und Pascal Michel*/
    window.addEventListener("load", init);
    export interface iceDealerInput {
        name: string;
        price: number;
        value: number;
    }
    let namen: string;
    let strasseHN: string;
    let ort: string;

    /* INIT FUNKTION */
    function init(_event: Event): void {
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLElement = fieldsets[i];
            fieldset.addEventListener("change", aenderungen);
        }


        let schreibEis: string = ``;

        for (let i: number = 0; i < iceDealerData["Eissorten"].length; i++) {
            schreibEis += `<input type="number" name="Eissorte${i}" step="1" min="0" max="30" value="0"/> Kugeln ${iceDealerData["Eissorten"][i].name}<br>`;
        }

        document.getElementById("eisauswahl").innerHTML = schreibEis;
        document.getElementById("checkButton").addEventListener("click", checkWhetherComplete); //ich lege die submit funktion und die überprüffunktion in einen Button
       // document.getElementById("checkButton").addEventListener("click", checkWhetherComplete);


        let schreibZutaten: string = ``;

        for (let i: number = 0; i < iceDealerData["zutat"].length; i++) {
            schreibZutaten += `<input type="checkbox" name="Zutat${i}" id="check${i + 1}"> <label for="check${i + 1}"> ${iceDealerData["zutat"][i].name}</label>`;
        }

        document.getElementById("zutatenauswahl").innerHTML = schreibZutaten;
    }

    /* ÄNDERUNGEN-FUNKTION */
    function aenderungen(_event: Event): void {
        console.log(_event);
        let zuSchreiben: string;
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);

        if (target.name.substr(0, 8) == "Eissorte") {
            let nummer: number = parseInt(target.name.substr(8, 2));
            iceDealerData["Eissorten"][nummer].value = parseInt(target.value);
        }

        if (target.name.substr(0, 5) == "Zutat") {
            let nummer: number = parseInt(target.name.substr(5, 2));
            let ausgewaehlt: number = 0;

            if (target.checked == true) {
                ausgewaehlt = 1;
            }

            iceDealerData["zutat"][nummer].value = ausgewaehlt;
        }

        if (target.name == "waffelBecher") {
            if (target.value == "Waffel") {
                iceDealerData["waffelBecher"][0].value = 1;
                iceDealerData["waffelBecher"][1].value = 0;
            }

            else {
                iceDealerData["waffelBecher"][0].value = 0;
                iceDealerData["waffelBecher"][1].value = 1;
            }
        }

        if (target.name == "RadiogroupLog") {
            for (let i: number = 0; i < iceDealerData["logistik"].length; i++) {
                if (iceDealerData["logistik"][i].name == target.value) {
                    iceDealerData["logistik"][i].value = 1;
                }

                else {
                    iceDealerData["logistik"][i].value = 0;
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

        let summe: number = 0;
        for (let i: number = 0; i < iceDealerData["Eissorten"].length; i++) {
            summe += iceDealerData["Eissorten"][i].price * iceDealerData["Eissorten"][i].value;
        }

        for (let i: number = 0; i < iceDealerData["zutat"].length; i++) {
            summe += iceDealerData["zutat"][i].price * iceDealerData["zutat"][i].value;
        }

        for (let i: number = 0; i < iceDealerData["logistik"].length; i++) {
            summe += iceDealerData["logistik"][i].price * iceDealerData["logistik"][i].value;
        }

        zuSchreiben = `<h4>Ihre Bestellung:</h4><hr>Gewähltes Eis:<br>`;

        for (let i: number = 0; i < iceDealerData["Eissorten"].length; i++) {
            if (iceDealerData["Eissorten"][i].value == 1) {
                zuSchreiben += `<br>${iceDealerData["Eissorten"][i].value.toString()} Kugel ${iceDealerData["Eissorten"][i].name}<br>`;
            }

            else if (iceDealerData["Eissorten"][i].value > 1) {
                zuSchreiben += `<br>${iceDealerData["Eissorten"][i].value.toString()} Kugeln ${iceDealerData["Eissorten"][i].name}<br>`;
            }

        }

        zuSchreiben += `<hr>Zusätze:<br>`;

        for (let i: number = 0; i < iceDealerData["zutat"].length; i++) {
            if (iceDealerData["zutat"][i].value == 1) {
                zuSchreiben += `<br>${iceDealerData["zutat"][i].name}<br>`;
            }
        }

        zuSchreiben += `<hr>Darreichungsform: `;

        if (iceDealerData["waffelBecher"][0].value == 1) {
            zuSchreiben += `Waffel<br>`;
        }

        else if (iceDealerData["waffelBecher"][1].value == 1) {
            zuSchreiben += `Becher<br>`;
        }

        zuSchreiben += `<hr>Lieferung: `;

        for (let i: number = 0; i < iceDealerData["logistik"].length; i++) {
            if (iceDealerData["logistik"][i].value == 1) {
                zuSchreiben += `${iceDealerData["logistik"][i].name}<br>`;
            }
        }

        zuSchreiben += `<hr>Lieferadresse:<p>${namen}</p><p>${strasseHN}</p><p>${ort}</p>`;

        zuSchreiben += `<hr>Summe: ${summe.toFixed(2)} Euro`;

        zuSchreiben += `<hr><button id="checkButton">Beam me up!</button>`;
        document.getElementById("zusammenfassung").innerHTML = zuSchreiben;

    }
    /* ÜBERPRÜFUNG ob die Bestellung komlett ist */
    function checkWhetherComplete(): void {
        let valueKugeln: number = 0;

        for (let i: number = 0; i < iceDealerData["Eissorten"].length; i++) {
            if (iceDealerData["Eissorten"][i].value > 0) {
                valueKugeln += iceDealerData["Eissorten"][i].value;
            }

        }

        if (valueKugeln == 0) {
            alert("Wir unterbrechen die Mission nur, wenn du Eis kaufst!");
        }

        else if (iceDealerData["waffelBecher"][0].value == 0 && iceDealerData["waffelBecher"][1].value == 0) {
            alert("Das Eis kommt im Becher, oder in der Waffel und nicht anders!");
        }

        else if (iceDealerData["logistik"][0].value == 0 && iceDealerData["logistik"][1].value == 0 && iceDealerData["logistik"][2].value == 0) {
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
    let urlSchreiben: string = "https://ios-eia2.herokuapp.com/?";
    function submitData(): void {
        console.log("Submit gefunden");
        for (let i: number = 0; i < iceDealerData["Eissorten"].length; i++) {
            if (iceDealerData["Eissorten"][i].value != 0) {
                urlSchreiben += `${iceDealerData["Eissorten"][i].name}=${iceDealerData["Eissorten"][i].value}&`;
            }
        }

        for (let i: number = 0; i < iceDealerData["zutat"].length; i++) {
            if (iceDealerData["zutat"][i].value != 0) {
                urlSchreiben += `${iceDealerData["zutat"][i].name}=${iceDealerData["zutat"][i].value}&`;
            }
        }

        for (let i: number = 0; i < iceDealerData["waffelBecher"].length; i++) {
            if (iceDealerData["waffelBecher"][i].value != 0) {
                urlSchreiben += `${iceDealerData["waffelBecher"][i].name}=${iceDealerData["waffelBecher"][i].value}&`;
            }
        }

        for (let i: number = 0; i < iceDealerData["logistik"].length; i++) {
            if (iceDealerData["logistik"][i].value != 0) {
                urlSchreiben += `${iceDealerData["logistik"][i].name}=${iceDealerData["logistik"][i].value}&`;
            }
        }
        if (namen != undefined && strasseHN != undefined && ort != undefined && ort != undefined) {
            urlSchreiben += `&Kundenname=${namen}&Kundenadresse=${strasseHN}&PostleitzahlOrt=${ort}`;
        }


        console.log(urlSchreiben);
        sendRequestWithCustomData();
    }
    function sendRequestWithCustomData(): void {
        console.log("test");
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", urlSchreiben, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById('UserInterface').innerHTML = "";
            let htmlString:string = `
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

}