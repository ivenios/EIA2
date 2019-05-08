
namespace EisDealerFreude {
    /*
        Aufgabe: Aufgabe 5 Eisdealer Reloaded
        Name: Iven Otis Sieglen 
        Matrikel: 261012
        Datum: Sonntag der 28. April
            
        Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
        */

    export let iceDealerData: {[group: string]: fieldsetData[]}
		= {
		"Eissorten": [
            //zuerst die Optgroups, value wird dabei als ID verwendet,wo die einzelnen Eissorten hin müssen
			//{name:"Langweilige Eissorten", type:"optgroup", value:"IceOptionsOne" , price: 0, inStock: true },
            //{name:"Moderne Eissorten", type:"optgroup", value:"IceOptionsTwo" , price: 0, inStock: true },
            //dann werden die Eissorten sortiert 
            {name:"Erdbeere", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Vanille", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Schokolade", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Mango", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Pistanzie", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Walnuss", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Haselnuss", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Dunkle-Schokolade", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Jogurt", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Zitrone", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Melone", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Cassis", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Blaubeere", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            //optgroup2
            {name:"Karamell-Meersalz", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Weiße-Schokolade", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"HardTime", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Mutterlich", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Pferdefleisch", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Tintenfischtinte", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Braunkohle", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Farbwechselnde-Eiscreme", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Krokodileier", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Tierfette", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Hummer", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Cheesburger", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Kiwi", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Beton-Asphalt", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Euroklassen1-5", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Black-Mamba", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Weißbier-Eis", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Erdbeer-Balsamico", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Matcha-Eis", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Acai-Beeren", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Rote-Bete", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Sellerie-Eis", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true }
		],
		"Streußel": [
            {name:"Schoko-Steußel", type:"checkbox", value:"true" , price: 0.80, inStock: true},
            {name:"Snickers", type:"checkbox", value:"true" , price: 0.80, inStock: true},
            {name:"Tropical", type:"checkbox", value:"true" , price: 0.80, inStock: true},
            {name:"Schokolinsen", type:"checkbox", value:"true" , price: 0.80, inStock: true},
            {name:"Lions-Steußel", type:"checkbox", value:"true" , price: 0.80, inStock: true},
            {name:"Bounty-Steußel", type:"checkbox", value:"true" , price: 0.80, inStock: true},
            {name:"Kit-Kat-Steußel", type:"checkbox", value:"true" , price: 0.80, inStock: true},
            {name:"Buchstabenstreußel", type:"checkbox", value:"true" , price: 0.80, inStock: true},
            {name:"HFU-Steußel", type:"checkbox", value:"true" , price: 0.80, inStock: true}
        ],
        "Saucen": [
            {name:"Schoko-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Karamell-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Vanille-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Himbeere-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Schlumpf-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Apfel-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Erdbeere-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Salzsäure-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Schaaf-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: false},
            {name:"Döner-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: false},
            {name:"-Sauce", type:"checkbox", value:"true" , price: 0.8, inStock: false},
            
        ],
        "Specials":[
            {name:"Wasabi", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Geschmeltze Zwiebeln", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Ibuprofen 800mg", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Tabasco", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Parmesan", type:"checkbox", value:"true" , price: 0.8, inStock: true},
        ],
        "Sahne":[
            {name:"Gewöhnliche Schlagsahne", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Lactose-Frei", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Vegane Sahneersatzprodukte", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Schokosahne", type:"checkbox", value:"true" , price: 0.8, inStock: true},
            {name:"Mehr Sahne als Eis", type:"checkbox", value:"true" , price: 0.8, inStock: true},
        ],
        "Becher":[
            {name:"radiogroup1", type:"radio", value:"Im Becher (kostenlos)" , price: 0, inStock: true},
            {name:"radiogroup1", type:"radio", value:"In der Waffel (kostenlos)" , price: 0, inStock: true},
            {name:"radiogroup1", type:"radio", value:"In der Schoko-Waffel (kostenlos)" , price: 0, inStock: true},
        ],
        "Löffel":[
            {name:"radiogroup2", type:"radio", value:"Löffel" , price: 0, inStock: true},
            {name:"radiogroup2", type:"radio", value:"Gabel" , price: 0, inStock: true},
            {name:"radiogroup2", type:"radio", value:"Stäbchen" , price: 0, inStock: true},
            {name:"radiogroup2", type:"radio", value:"Wir sind zu Zweit" , price: 0, inStock: true},
        ],
        "Lieferung":[
            {name:"radiogroup3", type:"radio", value:"Same Day" , price: 0, inStock: true},
            {name:"radiogroup3", type:"radio", value:"Same Hour" , price: 0, inStock: true},
            {name:"radiogroup3", type:"radio", value:"5-10 Werktage" , price: 0, inStock: true},
            {name:"radiogroup3", type:"radio", value:"Beamen" , price: 0, inStock: true},
        ],

	};












}