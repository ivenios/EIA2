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
            {name:"Dunkle Schokolade", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Jogurt", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Zitrone", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Melone", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Cassis", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            {name:"Blaubeere", type:"options", value:"Langweilige Eissorten" , price: 1.55, inStock: true },
            //optgroup2
            {name:"Karamell-Meersalz", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Weiße Schokolade", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Hard Time ;)", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Mutterlich", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Pferdefleisch", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Tintenfischtinte", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Braunkohle", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Farbwechselnde Eiscreme", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Krokodileier", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Tierfette", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Hummer", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Cheesburger", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Kiwi", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Beton&Asphalt", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Euroklassen 1-5", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Black Mamba", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Weißbier-Eis", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Erdbeer-Balsamico", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Matcha-Eis", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Acai-Beeren", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Rote-Bete", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
            {name:"Sellerie-Eis", type:"options", value:"Moderne Eissorten" , price: 1.55, inStock: true },
		],
		"Streußel": [
            {name:"", type:"", value:"" , price: 0, inStock: true},
            
        ],
        "Saucen": [
            {name:"", type:"", value:"" , price: 0, inStock: true},
        ],
        "Specials":[
            {name:"", type:"", value:"" , price: 0, inStock: true},
        ],
        "Sahne":[
            {name:"", type:"", value:"" , price: 0, inStock: true},
        ],
        "Becher":[
            {name:"", type:"", value:"" , price: 0, inStock: true},
        ],
        "Löffel":[
            {name:"", type:"", value:"" , price: 0, inStock: true},
        ],
        "Lieferung":[
            {name:"", type:"", value:"" , price: 0, inStock: true},
        ],
        "Bestellübersicht":[
            {name:"", type:"", value:"" , price: 0, inStock: true},
        ]

	};












}