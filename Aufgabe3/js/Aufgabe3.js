var Aufgabe3;
(function (Aufgabe3) {
    document.addEventListener("DOMContentLoaded", Anzahl);
    document.addEventListener("keypress", pressKeyboard);
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<-->"];
    let cards = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }];
    let place = [];
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let z = 0; z < 2; z++) {
                let card = { color: colors[i], value: values[a] };
                cards.push(card);
            }
        }
    }
    console.log(cards);
    let displayhand = [];
    function Anzahl() {
        var cardNumber = prompt("Anzahl der gewünschten Handkarten eingeben");
        let n = parseInt(cardNumber);
        randomCard(n);
        handcards();
        let button = document.getElementById("button");
        button.addEventListener("click", sort);
        let pull = document.getElementById("draw");
        pull.addEventListener("click", draw);
    }
    function randomCard(n) {
        for (let random = n; random > 0; random--) {
            let r = Math.floor(Math.random() * (cards.length - 1));
            displayhand.push(cards[r]);
            cards.splice(r, 1);
        }
    }
    function draw() {
        randomCard(1);
        handcards();
    }
    function pressKeyboard(_event) {
        if (_event.keyCode == 32) {
            draw();
        }
    }
    function handcards() {
        document.getElementById("displayhand").innerHTML = "";
        for (let d = 0; d < displayhand.length; d++) {
            let div = document.createElement("div");
            document.getElementById("displayhand").appendChild(div);
            div.innerHTML = displayhand[d].value;
            div.classList.add(displayhand[d].color);
            let id = d.toString();
            div.setAttribute("id", id);
            div.addEventListener("click", playCard);
        }
    }
    function playCard(_event) {
        document.getElementById("tray").innerHTML = "";
        let clickedCard = _event.target;
        let index = parseInt(clickedCard.id);
        place.push(displayhand[index]);
        let div = document.createElement("div");
        document.getElementById("tray").appendChild(div);
        div.innerHTML = displayhand[index].value;
        div.classList.add(displayhand[index].color);
        displayhand.splice(index, 1);
        handcards();
    }
    function sort() {
        document.getElementById("displayhand").innerHTML = "";
        displayhand.sort(function (a, b) {
            if (a.color > b.color) {
                return 1;
            }
            if (a.color < b.color) {
                return -1;
            }
            if (a.value > b.value) {
                return 1;
            }
            if (a.value < b.value) {
                return -1;
            }
            return 0;
        });
        console.log(displayhand);
        handcards();
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=Aufgabe3.js.map