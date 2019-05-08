var EisDealerFreude;
(function (EisDealerFreude) {
    /*
        Aufgabe: Aufgabe 5 Eisdealer Reloaded
        Name: Iven Otis Sieglen
        Matrikel: 261012
        Datum: Sonntag der 28. April
            
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
        */
    EisDealerFreude.iceDealerData = {
        "Eissorten": [
            //zuerst die Optgroups, value wird dabei als ID verwendet,wo die einzelnen Eissorten hin müssen
            //{name:"Langweilige Eissorten", type:"optgroup", value:"IceOptionsOne" , price: 0, inStock: true },
            //{name:"Moderne Eissorten", type:"optgroup", value:"IceOptionsTwo" , price: 0, inStock: true },
            //dann werden die Eissorten sortiert 
            { name: "Erdbeere", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true, anzahl: 0 },
            { name: "Vanille", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true, anzahl: 0 },
            { name: "Schokolade", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true, anzahl: 0 },
            { name: "Mango", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true, anzahl: 0 },
            { name: "Pistanzie", type: "options", value: "", price: 1.55, inStock: false, anzahl: 0 },
            { name: "Walnuss", type: "options", value: "", price: 1.55, inStock: false, anzahl: 0 },
            { name: "Haselnuss", type: "options", value: "", price: 1.55, inStock: false, anzahl: 0 },
            { name: "Dunkle-Schokolade", type: "options", value: "", price: 1.55, inStock: false, anzahl: 0 },
            { name: "Jogurt", type: "options", value: "", price: 1.55, inStock: false, anzahl: 0 },
            { name: "Zitrone", type: "options", value: "", price: 1.55, inStock: false, anzahl: 0 },
            { name: "Melone", type: "options", value: "", price: 1.55, inStock: false, anzahl: 0 },
            { name: "Cassis", type: "options", value: "", price: 1.55, inStock: false, anzahl: 0 },
            { name: "Blaubeere", type: "options", value: "", price: 1.55, inStock: false, anzahl: 0 },
        ],
        "Streußel": [
            { name: "Schoko-Steußel", type: "checkbox", value: "true", price: 0.80, inStock: true, anzahl: 0 },
            { name: "Snickers", type: "checkbox", value: "true", price: 0.80, inStock: true, anzahl: 0 },
            { name: "Tropical", type: "checkbox", value: "true", price: 0.80, inStock: true, anzahl: 0 },
            { name: "Schokolinsen", type: "checkbox", value: "true", price: 0.80, inStock: true, anzahl: 0 },
            { name: "Lions-Steußel", type: "checkbox", value: "true", price: 0.80, inStock: true, anzahl: 0 },
            { name: "Bounty-Steußel", type: "checkbox", value: "true", price: 0.80, inStock: true, anzahl: 0 },
            { name: "Kit-Kat-Steußel", type: "checkbox", value: "true", price: 0.80, inStock: true, anzahl: 0 },
            { name: "Buchstabenstreußel", type: "checkbox", value: "true", price: 0.80, inStock: true, anzahl: 0 },
            { name: "HFU-Steußel", type: "checkbox", value: "true", price: 0.80, inStock: true, anzahl: 0 }
        ],
        "Saucen": [
            { name: "Schoko-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Karamell-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Vanille-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Himbeere-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Schlumpf-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Apfel-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Erdbeere-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Salzsäure-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Schaaf-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: false, anzahl: 0 },
            { name: "Döner-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: false, anzahl: 0 },
            { name: "-Sauce", type: "checkbox", value: "true", price: 0.8, inStock: false, anzahl: 0 },
        ],
        "Specials": [
            { name: "Wasabi", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Geschmeltze Zwiebeln", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Ibuprofen 800mg", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Tabasco", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Parmesan", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
        ],
        "Sahne": [
            { name: "Gewöhnliche Schlagsahne", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Lactose-Frei", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Vegane Sahneersatzprodukte", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Schokosahne", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
            { name: "Mehr Sahne als Eis", type: "checkbox", value: "true", price: 0.8, inStock: true, anzahl: 0 },
        ],
        "Becher": [
            { name: "radiogroup1", type: "radio", value: "Im Becher (kostenlos)", price: 0, inStock: true, anzahl: 0 },
            { name: "radiogroup1", type: "radio", value: "In der Waffel (kostenlos)", price: 0, inStock: true, anzahl: 0 },
            { name: "radiogroup1", type: "radio", value: "In der Schoko-Waffel (kostenlos)", price: 0, inStock: true, anzahl: 0 },
        ],
        "Löffel": [
            { name: "radiogroup2", type: "radio", value: "Löffel", price: 0, inStock: true, anzahl: 0 },
            { name: "radiogroup2", type: "radio", value: "Gabel", price: 0, inStock: true, anzahl: 0 },
            { name: "radiogroup2", type: "radio", value: "Stäbchen", price: 0, inStock: true, anzahl: 0 },
            { name: "radiogroup2", type: "radio", value: "Wir sind zu Zweit", price: 0, inStock: true, anzahl: 0 },
        ],
        "Lieferung": [
            { name: "radiogroup3", type: "radio", value: "Same Day", price: 0, inStock: true, anzahl: 0 },
            { name: "radiogroup3", type: "radio", value: "Same Hour", price: 0, inStock: true, anzahl: 0 },
            { name: "radiogroup3", type: "radio", value: "5-10 Werktage", price: 0, inStock: true, anzahl: 0 },
            { name: "radiogroup3", type: "radio", value: "Beamen", price: 0, inStock: true, anzahl: 0 },
        ],
    };
})(EisDealerFreude || (EisDealerFreude = {}));
//# sourceMappingURL=data.js.map