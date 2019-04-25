namespace EisDealerFreude {
    window.addEventListener("load", init);

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
            if(group == "Eissorten") {
                //mit forschleife und iceDealerData[group][hier mit for schleife durch gehen] und dann die einzelnen types mit if abfrage abfragen 
                //hier eine funktion die sich um die Eissorten kümmert
            }
            else if(group == "Streußel" || group == "Saucen" || group == "Specials" || group == "Sahne" ) {
                //hier dann eine funtkion die sich allein um die Checkboxen kümmert
            }
        }
    }

    function addListeners():void{


    }








}