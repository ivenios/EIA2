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
            { name: "Erdbeere", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Vanille", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Schokolade", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Mango", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Pistanzie", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Walnuss", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Haselnuss", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Dunkle-Schokolade", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Jogurt", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Zitrone", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Melone", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Cassis", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            { name: "Blaubeere", type: "options", value: "Langweilige Eissorten", price: 1.55, inStock: true },
            //optgroup2
            { name: "Karamell-Meersalz", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Weiße-Schokolade", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "HardTime", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Mutterlich", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Pferdefleisch", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Tintenfischtinte", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Braunkohle", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Farbwechselnde-Eiscreme", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Krokodileier", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Tierfette", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Hummer", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Cheesburger", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Kiwi", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Beton-Asphalt", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Euroklassen1-5", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Black-Mamba", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Weißbier-Eis", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Erdbeer-Balsamico", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Matcha-Eis", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Acai-Beeren", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Rote-Bete", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true },
            { name: "Sellerie-Eis", type: "options", value: "Moderne Eissorten", price: 1.55, inStock: true }
        ],
        "Streußel": [
            { name: "Schoko-Steußel", type: "checkbox", value: "Schoko-Steußel", price: 0.80, inStock: true },
            { name: "Snickers", type: "checkbox", value: "Snickers", price: 0.80, inStock: true },
            { name: "Tropical", type: "checkbox", value: "Tropical", price: 0.80, inStock: true },
            { name: "Schokolinsen", type: "checkbox", value: "Schokolinsen", price: 0.80, inStock: true },
            { name: "Lions-Steußel", type: "checkbox", value: "Lions-Steußel", price: 0.80, inStock: true },
            { name: "Bounty-Steußel", type: "checkbox", value: "Bounty-Steußel", price: 0.80, inStock: true },
            { name: "Kit-Kat-Steußel", type: "checkbox", value: "Kit-Kat-Steußel", price: 0.80, inStock: true },
            { name: "Buchstabenstreußel", type: "checkbox", value: "Buchstabenstreußel", price: 0.80, inStock: true },
            { name: "HFU-Steußel", type: "checkbox", value: "HFU-Steußel", price: 0.80, inStock: true }
        ],
        "Saucen": [
            { name: "Schoko-Sauce", type: "checkbox", value: "Schoko-Sauce", price: 0.8, inStock: true },
            { name: "Karamell-Sauce", type: "checkbox", value: "Karamell-Sauce", price: 0.8, inStock: true },
            { name: "Vanille-Sauce", type: "checkbox", value: "Vanille-Sauce", price: 0.8, inStock: true },
            { name: "Himbeere-Sauce", type: "checkbox", value: "Himbeere-Sauce", price: 0.8, inStock: true },
            { name: "Schlumpf-Sauce", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Apfel-Sauce", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Erdbeere-Sauce", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Salzsäure-Sauce", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Schaaf-Sauce", type: "checkbox", value: "", price: 0.8, inStock: false },
            { name: "Döner-Sauce", type: "checkbox", value: "", price: 0.8, inStock: false },
            { name: "-Sauce", type: "checkbox", value: "", price: 0.8, inStock: false },
        ],
        "Specials": [
            { name: "Wasabi", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Geschmeltze Zwiebeln", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Ibuprofen 800mg", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Tabasco", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Parmesan", type: "checkbox", value: "", price: 0.8, inStock: true },
        ],
        "Sahne": [
            { name: "Gewöhnliche Schlagsahne", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Lactose-Frei", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Vegane Sahneersatzprodukte", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Schokosahne", type: "checkbox", value: "", price: 0.8, inStock: true },
            { name: "Mehr Sahne als Eis", type: "checkbox", value: "", price: 0.8, inStock: true },
        ],
        "Becher": [
            { name: "Im Becher (kostenlos)", type: "radio", value: "radiogroup1", price: 0, inStock: true },
            { name: "In der Waffel (kostenlos)", type: "radio", value: "radiogroup1", price: 0, inStock: true },
            { name: "In der Schoko-Waffel (kostenlos)", type: "radio", value: "radiogroup1", price: 0, inStock: true },
        ],
        "Löffel": [
            { name: "Löffel", type: "radio", value: "radiogroup2", price: 0, inStock: true },
            { name: "Gabel", type: "radio", value: "radiogroup2", price: 0, inStock: true },
            { name: "Stäbchen", type: "radio", value: "radiogroup2", price: 0, inStock: true },
            { name: "Wir sind zu Zweit", type: "radio", value: "radiogroup2", price: 0, inStock: true },
        ],
        "Lieferung": [
            { name: "Same Day", type: "radio", value: "radiogroup3", price: 0, inStock: true },
            { name: "Same Hour", type: "radio", value: "radiogroup3", price: 0, inStock: true },
            { name: "5-10 Werktage", type: "radio", value: "radiogroup3", price: 0, inStock: true },
            { name: "Beamen", type: "radio", value: "radiogroup3", price: 0, inStock: true },
        ],
        "Bestellübersicht": [
            { name: "", type: "", value: "", price: 0, inStock: true },
        ]
    };
})(EisDealerFreude || (EisDealerFreude = {}));
//# sourceMappingURL=data.js.map