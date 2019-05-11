/* Aufgabe 7
Name: Iven Otis Sieglen
Matrikel: 261012
Datum: 09.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. Dieser Code entstand in Nacharbeit mit Michel Orlik und Pascal Michel*/
var EisDealerFreude;
(function (EisDealerFreude) {
    EisDealerFreude.iceDealerData = {
        "Eissorten": [
            { name: "Erdbeere", price: 1.55, value: 0 },
            { name: "Mango", price: 1.55, value: 0 },
            { name: "Schokolade", price: 1.55, value: 0 },
            { name: "Weiße-Schokolade", price: 1.55, value: 0 },
            { name: "Dunkle-Schokolade", price: 1.55, value: 0 },
            { name: "Himbeere", price: 1.55, value: 0 },
            { name: "Pistanzie", price: 1.55, value: 0 },
            { name: "Walnuss", price: 1.55, value: 0 },
            { name: "Haselnuss", price: 1.55, value: 0 },
            { name: "Melone", price: 1.55, value: 0 },
            { name: "Cassis", price: 1.55, value: 0 },
            { name: "Blaubeere", price: 1.55, value: 0 }
        ],
        "Toppings": [
            { name: "Schoko-Steußel", price: 0.8, value: 0 },
            { name: "Snickers", price: 0.8, value: 0 },
            { name: "Tropical", price: 0.8, value: 0 },
            { name: "Schokolinsen", price: 0.8, value: 0 },
            { name: "Lions-Steußel", price: 0.8, value: 0 },
            { name: "Bounty-Steußel", price: 0.8, value: 0 },
            { name: "Kit-Kat-Steußel", price: 0.8, value: 0 },
            { name: "Buchstabenstreußel", price: 0.8, value: 0 },
            { name: "HFU-Steußel", price: 0.8, value: 0 }
        ],
        "Darrbietungsform:": [
            { name: "Waffel", price: 0, value: 0 },
            { name: "Becher", price: 0, value: 0 }
        ],
        "Lieferoptionen": [
            { name: "SameDayDelivery", price: 4.99, value: 0 },
            { name: "SameHourDelivery", price: 19.99, value: 0 },
            { name: "Beamemeup", price: 0, value: 0 }
        ]
    };
})(EisDealerFreude || (EisDealerFreude = {}));
//# sourceMappingURL=data.js.map