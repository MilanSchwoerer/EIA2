namespace Aufgabe2new {
    document.addEventListener("DOMContentLoaded", uno);

    function uno(): void {

        let cardNumber: number;
        let chooseCards: string = prompt("Anzahl der gewünschten Handkarten eingeben");
        cardNumber = Number(chooseCards);

        interface Card {
            color: string;
            value: string;
        }
        let b1: Card = {
            color: "blue",
            value: "0"
        };
        let b2: Card = {
            color: "blue",
            value: "1"
        };
        let b3: Card = {
            color: "blue",
            value: "2"
        };
        let b4: Card = {
            color: "blue",
            value: "3"
        };
        let b5: Card = {
            color: "blue",
            value: "4"
        };
        let b6: Card = {
            color: "blue",
            value: "5"
        };
        let b7: Card = {
            color: "blue",
            value: "6"
        };
        let b8: Card = {
            color: "blue",
            value: "7"
        };
        let b9: Card = {
            color: "blue",
            value: "8"
        };
        let b10: Card = {
            color: "blue",
            value: "9"
        };
        let b11: Card = {
            color: "blue",
            value: "take2"
        };
        let b12: Card = {
            color: "blue",
            value: "reverse"
        };
        let b13: Card = {
            color: "blue",
            value: "missturn"
        };
        let b14: Card = {
            color: "blue",
            value: "1"
        };
        let b15: Card = {
            color: "blue",
            value: "2"
        };
        let b16: Card = {
            color: "blue",
            value: "3"
        };
        let b17: Card = {
            color: "blue",
            value: "4"
        };
        let b18: Card = {
            color: "blue",
            value: "5"
        };
        let b19: Card = {
            color: "blue",
            value: "6"
        };
        let b20: Card = {
            color: "blue",
            value: "7"
        };
        let b21: Card = {
            color: "blue",
            value: "8"
        };
        let b22: Card = {
            color: "blue",
            value: "9"
        };
        let b23: Card = {
            color: "blue",
            value: "take2"
        };
        let b24: Card = {
            color: "blue",
            value: "reverse"
        };
        let b25: Card = {
            color: "blue",
            value: "missturn"
        };
        let r1: Card = {
            color: "red",
            value: "0"
        };
        let r2: Card = {
            color: "red",
            value: "1"
        };
        let r3: Card = {
            color: "red",
            value: "2"
        };
        let r4: Card = {
            color: "red",
            value: "3"
        };
        let r5: Card = {
            color: "red",
            value: "4"
        };
        let r6: Card = {
            color: "red",
            value: "5"
        };
        let r7: Card = {
            color: "red",
            value: "6"
        };
        let r8: Card = {
            color: "red",
            value: "7"
        };
        let r9: Card = {
            color: "red",
            value: "8"
        };
        let r10: Card = {
            color: "red",
            value: "9"
        };
        let r11: Card = {
            color: "red",
            value: "take2"
        };
        let r12: Card = {
            color: "red",
            value: "reverse"
        };
        let r13: Card = {
            color: "red",
            value: "missturn"
        };
        let r14: Card = {
            color: "red",
            value: "1"
        };
        let r15: Card = {
            color: "red",
            value: "2"
        };
        let r16: Card = {
            color: "red",
            value: "3"
        };
        let r17: Card = {
            color: "red",
            value: "4"
        };
        let r18: Card = {
            color: "red",
            value: "5"
        };
        let r19: Card = {
            color: "red",
            value: "6"
        };
        let r20: Card = {
            color: "red",
            value: "7"
        };
        let r21: Card = {
            color: "red",
            value: "8"
        };
        let r22: Card = {
            color: "red",
            value: "9"
        };
        let r23: Card = {
            color: "red",
            value: "take2"
        };
        let r24: Card = {
            color: "red",
            value: "reverse"
        };
        let r25: Card = {
            color: "red",
            value: "missturn"
        };
        let y1: Card = {
            color: "yellow",
            value: "0"
        };
        let y2: Card = {
            color: "yellow",
            value: "1"
        };
        let y3: Card = {
            color: "yellow",
            value: "2"
        };
        let y4: Card = {
            color: "yellow",
            value: "3"
        };
        let y5: Card = {
            color: "yellow",
            value: "4"
        };
        let y6: Card = {
            color: "yellow",
            value: "5"
        };
        let y7: Card = {
            color: "yellow",
            value: "6"
        };
        let y8: Card = {
            color: "yellow",
            value: "7"
        };
        let y9: Card = {
            color: "yellow",
            value: "8"
        };
        let y10: Card = {
            color: "yellow",
            value: "9"
        };
        let y11: Card = {
            color: "yellow",
            value: "take2"
        };
        let y12: Card = {
            color: "yellow",
            value: "reverse"
        };
        let y13: Card = {
            color: "yellow",
            value: "missturn"
        };
        let y14: Card = {
            color: "yellow",
            value: "1"
        };
        let y15: Card = {
            color: "yellow",
            value: "2"
        };
        let y16: Card = {
            color: "yellow",
            value: "3"
        };
        let y17: Card = {
            color: "yellow",
            value: "4"
        };
        let y18: Card = {
            color: "yellow",
            value: "5"
        };
        let y19: Card = {
            color: "yellow",
            value: "6"
        };
        let y20: Card = {
            color: "yellow",
            value: "7"
        };
        let y21: Card = {
            color: "yellow",
            value: "8"
        };
        let y22: Card = {
            color: "yellow",
            value: "9"
        };
        let y23: Card = {
            color: "yellow",
            value: "take2"
        };
        let y24: Card = {
            color: "yellow",
            value: "reverse"
        };
        let y25: Card = {
            color: "yellow",
            value: "missturn"
        };
        let g1: Card = {
            color: "green",
            value: "0"
        };
        let g2: Card = {
            color: "green",
            value: "1"
        };
        let g3: Card = {
            color: "green",
            value: "2"
        };
        let g4: Card = {
            color: "green",
            value: "3"
        };
        let g5: Card = {
            color: "green",
            value: "4"
        };
        let g6: Card = {
            color: "green",
            value: "5"
        };
        let g7: Card = {
            color: "green",
            value: "6"
        };
        let g8: Card = {
            color: "green",
            value: "7"
        };
        let g9: Card = {
            color: "green",
            value: "8"
        };
        let g10: Card = {
            color: "green",
            value: "9"
        };
        let g11: Card = {
            color: "green",
            value: "take2"
        };
        let g12: Card = {
            color: "green",
            value: "reverse"
        };
        let g13: Card = {
            color: "green",
            value: "missturn"
        };
        let g14: Card = {
            color: "green",
            value: "1"
        };
        let g15: Card = {
            color: "green",
            value: "2"
        };
        let g16: Card = {
            color: "green",
            value: "3"
        };
        let g17: Card = {
            color: "green",
            value: "4"
        };
        let g18: Card = {
            color: "green",
            value: "5"
        };
        let g19: Card = {
            color: "green",
            value: "6"
        };
        let g20: Card = {
            color: "green",
            value: "7"
        };
        let g21: Card = {
            color: "green",
            value: "8"
        };
        let g22: Card = {
            color: "green",
            value: "9"
        };
        let g23: Card = {
            color: "green",
            value: "take2"
        };
        let g24: Card = {
            color: "green",
            value: "reverse"
        };
        let g25: Card = {
            color: "green",
            value: "missturn"
        };
        let k1: Card = {
            color: "black",
            value: "Farbwunsch"
        };
        let k2: Card = {
            color: "black",
            value: "Farbwunsch"
        };
        let k3: Card = {
            color: "black",
            value: "Farbwunsch"
        };
        let k4: Card = {
            color: "black",
            value: "Farbwunsch"
        };
        let k5: Card = {
            color: "black",
            value: "+4"
        };
        let k6: Card = {
            color: "black",
            value: "+4"
        };
        let k7: Card = {
            color: "black",
            value: "+4"
        };
        let k8: Card = {
            color: "black",
            value: "+4"
        };

        let deck: Card[] = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25,
            b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25,
            g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21, g22, g23, g24, g25,
            y1, y2, y3, y4, y5, y6, y7, y8, y9, y10, y11, y12, y13, y14, y15, y16, y17, y18, y19, y20, y21, y22, y23, y24, y25,
            k1, k2, k3, k4, k5, k6, k7, k8];
        for (let i: number = 0; i < cardNumber; i++) {
            let randomCard: number = random(deck.length);
            placeDiv(deck[randomCard].color, deck[randomCard].value, i);
            deck.splice(randomCard, 1);
            continue;
        }
        function random(zufall: number): number {

            return Math.floor(Math.random() * Math.floor(zufall));
        }

        function placeDiv(_color: string, karte: string, eingabe: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            div.setAttribute("id", "a" + eingabe);
            document.getElementById("a" + eingabe).innerHTML += karte;


            let s: CSSStyleDeclaration = div.style;
            s.backgroundColor = _color;
            s.left = (eingabe + 1) * 160 + "px";

        }
    }


}