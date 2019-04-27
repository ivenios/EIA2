namespace EisDealerFreude {
    /*
        Aufgabe: Aufgabe 5 Eisdealer Reloaded
        Name: Iven Otis Sieglen 
        Matrikel: 261012
        Datum: Sonntag der 28. April
            
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
        */
       document.addEventListener('DOMContentLoaded', init);

    export interface fieldsetData {
        name: string;
        type: string; 
        value: string;
        price: number;
        inStock: boolean;
    }

    function init() {
        renderFieldsets();
        addListeners();

    }


    function renderFieldsets():void{
        //zuerst werden alle inneren groups des iceDealerData Arrays durchgegangen mit for in 
        //dannach abfrage um welchen Typ es sich handelt 
        // Typ Options wird direkt zu einer anderen funktion verwiesen ( render Ice Cream), da dort nur die Optgroups geändert werden müssen
        // dannach werden die Radiobuttons abgefragt, diese werden auf eine extra funktion verwiesen die sich allein um Radio Buttons kümmert
        //zu guter letzt kommen noch die Checkboxen diese werden dann auch in eine extra funtkion verwiesen die sich nur um checkboxen kümmert #divideandconquer

        for(let group in iceDealerData) {
            if(group == "Eissorten") {//mit forschleife und iceDealerData[group][hier mit for schleife durch gehen] und dann die einzelnen types mit if abfrage abfragen 
                console.log("Eissorten sind da");
                for(let i:number = 0; i < iceDealerData[group].length; i++ ) {
                    if(iceDealerData[group][i].type == "options") {
                        console.log("Eissorte " + iceDealerData[group][i].name + " wird geladen")
                        if(iceDealerData[group][i].inStock == true){
                            if(iceDealerData[group][i].value == "Langweilige Eissorten"){
                                let a:number = 1;
                                while(a <= 4) {
                                    writeHTMLIceFlavor(iceDealerData[group][i],"IceOptionsOne" +a);
                                    a++;
                                        }
                                
                            }
                            else if(iceDealerData[group][i].value == "Moderne Eissorten") {
                                let a:number = 1;
                                while(a <= 4) {
                                    writeHTMLIceFlavor(iceDealerData[group][i],"IceOptionsTwo" +a);
                                    a++;
                                        }
                                
                                
                            }
                        }
                    }

                }
                
                //hier eine funktion die sich um die Eissorten kümmert
            }
            else if(group == "Streußel" || group == "Saucen" || group == "Specials" || group == "Sahne" ) {
                //hier dann eine funtkion die sich allein um die Checkboxen kümmert
                console.log("Toppings werden geladen");
            }
            else if(group == "Bestellübersicht") {
                console.log("Bestellübersicht wird initialisiert");

            }
        }
    }

    function addListeners():void{


    }
    
    function writeHTMLIceFlavor(_currentData: fieldsetData , _currentID:string){
        console.log(_currentData);
        let optData = document.createElement("option");
        let htmlString = `
            <option value="${_currentData.name}">${_currentData.name}</option>
        
        `;

        optData.innerHTML = htmlString;
        document.getElementById(_currentID).appendChild(optData);
    }






}