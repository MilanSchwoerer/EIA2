namespace Aufgabe3 {
    document.addEventListener("DOMContentLoaded", Anzahl);
    document.addEventListener("keypress", pressKeyboard);


    interface card {
        color: string;
        value: string;
    }

    
    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<-->"];
    let cards: card[] = [{ color: "red", value: "0" }, { color: "blue", value: "0" }, { color: "green", value: "0" }, { color: "yellow", value: "0" },
        { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" },
        { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }, { color: "black", value: "Wish" }];
    let place: card[] = [];

    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let z: number = 0; z < 2; z++) {
                let card: card = { color: colors[i], value: values[a] };
                cards.push(card);
            }
        }
    }
    console.log(cards);

    let displayhand: card[] = [];

    
    function Anzahl(): void {
        var cardNumber: string = prompt("Anzahl der gewünschten Handkarten eingeben");
        let n: number = parseInt(cardNumber);

        randomCard(n);
        handcards();

        let button: HTMLElement = document.getElementById("button");
        button.addEventListener("click", sort);

        let pull: HTMLElement = document.getElementById("draw");
        pull.addEventListener("click", draw);
    }

    function randomCard(n: number): void {
        for (let random: number = n; random > 0; random--) {
            let r: number = Math.floor(Math.random() * (cards.length - 1));
            displayhand.push(cards[r]);
            cards.splice(r, 1);
        }
    }

    function draw(): void {
        randomCard(1);
        handcards();
    }

    function pressKeyboard(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) {
            draw();
        }
    }

    function handcards(): void {
        document.getElementById("displayhand").innerHTML = "";
        for (let d: number = 0; d < displayhand.length; d++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("displayhand").appendChild(div);
            div.innerHTML = displayhand[d].value;
            div.classList.add(displayhand[d].color);
            let id: string = d.toString();
            div.setAttribute("id", id);
            div.addEventListener("click", playCard);
        }
    }

    function playCard(_event: MouseEvent): void {
        document.getElementById("tray").innerHTML = "";
        let clickedCard: HTMLElement = <HTMLElement>_event.target;
        let index: number = parseInt(clickedCard.id);
        place.push(displayhand[index]);
        let div: HTMLElement = document.createElement("div");
        document.getElementById("tray").appendChild(div);
        div.innerHTML = displayhand[index].value;
        div.classList.add(displayhand[index].color);
        displayhand.splice(index, 1);
        handcards();
    }

    function sort(): void {
        document.getElementById("displayhand").innerHTML = "";
        displayhand.sort(function(a: card, b: card): number {
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
    } }
