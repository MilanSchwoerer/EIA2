namespace Uno {

 {
    /*
    Aufgabe: Aufgabe 2
    Name: Milan Schwörer
    Matrikel: 259154
    Datum: 21.10.2018
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
    Er wurde nicht kopiert und auch nicht diktiert.
    */
    /* Interface Karten */
    function uno() {
        let names = {
            rot: "#ff0c0c",
            gelb: "#fbff23",
            grün: "#4c0cff",
            blau: "#26f70e",
            zero: "0",
            eins: "1",
            zwei: "2",
            drei: "3",
            vier: "4",
            fünf: "5",
            sechs: "6",
            sieben: "7",
            acht: "8",
            neun: "9",
            nimm2: "Nimm 2",
            Richtungswechsel: "Richtungswechsel",
            Aussetzen: "Aussetzen",
            Farbwahl: "Farbwahl",
            Nimm4: "Nimm 4 und Farbwahl",
        };
        /* Arrays f�r die verschiedenen Karten, plus random funktion um zuf�lliges Objekt auszuw�hlen */
        let colorsarray = [names.rot, names.gelb, names.grün, names.blau];
        let namesarray = [names.zero, names.eins, names.zwei, names.drei, names.vier, names.fünf, names.sechs, names.sieben, names.acht, names.neun];
        let specialarray = [names.nimm2, names.Richtungswechsel, names.Aussetzen];
        let blackcarray = [names.Farbwahl, names.Nimm4];
        /* Hauptfunktion */
        let p;
        let a = prompt("Mit wie vielen Karten willst du spielen?");
        p = Number(a);
        for (let i = 0; i < p; i++) {
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    buildNormalCard(i);
                    break;
                case 1:
                    buildSpecialCard(i);
                    break;
                case 2:
                    buildBlackCard(i);
                    break;
            }
        }
        /* Funktionen zum Bau der Karten */
        function buildNormalCard(i) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + i);
            document.getElementById("a" + i).innerHTML += namesarray[Math.floor(Math.random() * namesarray.length)];
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = colorsarray[Math.floor(Math.random() * colorsarray.length)];
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.bottom = 40 + "px";
            s.left = (i + 0.5) * 100 + "px";
            s.borderRadius = 5 + "px";
            s.color = "black";
        }
        function buildSpecialCard(i) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + i);
            document.getElementById("a" + i).innerHTML += specialarray[Math.floor(Math.random() * specialarray.length)];
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = colorsarray[Math.floor(Math.random() * colorsarray.length)];
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.bottom = 40 + "px";
            s.left = (i + 0.5) * 100 + "px";
            s.borderRadius = 5 + "px";
            s.color = "black";
        }
        function buildBlackCard(i) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "a" + i);
            document.getElementById("a" + i).innerHTML += blackcarray[Math.floor(Math.random() * blackcarray.length)];
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "#000000";
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.bottom = 40 + "px";
            s.left = (i + 0.5) * 100 + "px";
            s.borderRadius = 5 + "px";
            s.color = "white";
        }
        function Ablagestapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Ablagestapel");
            document.getElementById("Ablagestapel").innerHTML += "Ablagestapel";
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "white";
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.left = 50 + "px";
            s.top = 20 + "px";
            s.borderRadius = 5 + "px";
            s.color = "black";
        }
        function Aufnahmestapel() {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.setAttribute("id", "Aufnahmestapel");
            document.getElementById("Aufnahmestapel").innerHTML += "Aufnahme- stapel";
            let s = div.style;
            s.border = "thin solid black";
            s.textAlign = "center";
            s.position = "absolute";
            s.backgroundColor = "black";
            s.width = 90 + "px";
            s.height = 140 + "px";
            s.right = 50 + "px";
            s.top = 20 + "px";
            s.borderRadius = 5 + "px";
            s.color = "white";
        }
        Ablagestapel();
        Aufnahmestapel();
    }
    document.addEventListener('DOMContentLoaded', uno);
}
}