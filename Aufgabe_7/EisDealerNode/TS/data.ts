/* Aufgabe 7 
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 09.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. Dieser Code entstand in Nacharbeit mit Michel Orlik und Pascal Michel*/

namespace EisDealerFreude {
    
    export interface HomogenousArray {
        [key: string]: iceDealerInput[];
    }
    export let iceDealerData: HomogenousArray
        = {
        "Eissorten": [
            { name: "Cosmic-Splash", price: 2, value: 0 },
            { name: "Cosmic-Wave", price: 2, value: 0 },
            { name: "Seven-Lightyears", price: 2, value: 0 },
            { name: "Galactical-Splash", price: 2, value: 0 },
            { name: "Eternal-Splash", price: 2, value: 0 },
            { name: "Captain-Kirk", price: 2, value: 0 },
            { name: "Orbital-Order", price: 2, value: 0 },
            { name: "Space-Mission", price: 2, value: 0 },
            { name: "Deathstar-Explosion", price: 2, value: 0 },
            { name: "Vaders-Favorite", price: 2, value: 0 },
            { name: "Skyrider", price: 2, value: 0 },
            { name: "Favorite-Yoda-Sort", price: 2, value: 0 }

        ],

        "zutat": [
            { name: "Mooncrystal", price: 4, value: 0 },
            { name: "Star-Flakes", price: 4, value: 0 },
            { name: "Sparkle", price: 4, value: 0 },
            { name: "Moonlight-Sauce", price: 4, value: 0 }
        ],

        "waffelBecher": [
            { name: "Waffel", price: 0, value: 0 },
            { name: "Becher", price: 0, value: 0 }
        ],

        "logistik": [
            { name: "Spaceshuttle", price: 0, value: 0 },
            { name: "Warp", price: 2, value: 0 },
            { name: "Wurmloch", price: 5, value: 0 }
        ]
    };

}