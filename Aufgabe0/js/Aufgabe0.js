/*
Aufgabe: (Nummer und Titel der Aufgabe)
Name: (Ihr Name)
Matrikel: (Ihre Matrikelnummer)
Datum: (Datum der letzten Bearbeitung)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe0;
(function (Aufgabe0) {
    function box() {
        var name = prompt("Wie hei�t du?");
        var node = document.getElementById("content");
        node.innerHTML += "Hallo ";
        node.innerHTML += name;
        node.innerHTML += " ,wie geht es dir?";
        console.log("Hey", name, ",wie geht es dir");
    }
    document.addEventListener('DOMContentLoaded', box);
})(Aufgabe0 || (Aufgabe0 = {}));
//# sourceMappingURL=Aufgabe0.js.map