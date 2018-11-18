namespace Aufgabe4 {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);

    let treePrice: number = 0;
    let ballPrice: number = 0;
    let candlePrice: number = 0;
    let tinselPrice: number = 0;
    let holderPrice: number = 0;
    let shipmentPrice: number = 0;
    let ort: string = "";
    let strass: string = "";
    let nummer: string = "";
    let postleitzahl: string = "";

    function writeHTML(): void {
        let node: HTMLElement = document.getElementById("fieldset");
        let childNodeHTML: string;

        childNodeHTML = "<h3>Baumart</h3>";
        childNodeHTML += "<select name='Select' id='tree'>";
        for (let i: number = 0; i < tree.length; i++) {
            childNodeHTML += "<option value='" + i + tree[i].name + "'>" + tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Glaskugeln</h3>";
        childNodeHTML += "<select name='Select' id='christmasBalls'>";
        for (let i: number = 0; i < christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + christmasBall[i].name + "'>" + christmasBall[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i: number = 0; i < candle.length; i++) {
            childNodeHTML += "<option value='" + i + candle[i].name + "'>" + candle[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='tinsels'>";
        for (let i: number = 0; i < tinsel.length; i++) {
            childNodeHTML += "<option value='" + i + tinsel[i].name + "'>" + tinsel[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Halterung</h3>";
        childNodeHTML += "<select name='Select' id='holders'>";
        for (let i: number = 0; i < holder.length; i++) {
            childNodeHTML += "<option value='" + i + holder[i].name + "'>" + holder[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Select' id='deliveries'>";
        for (let i: number = 0; i < delivery.length; i++) {
            childNodeHTML += "<option value='" + i + delivery[i].name + "'>" + delivery[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";

        childNodeHTML += "<h3>Adresse</h3>";
        childNodeHTML += "<input id='streets' type='text' name='Text' placeholder='Straße' required/>";
        childNodeHTML += "<input id='numbers' type='text' name='Text' placeholder='Hausnummer' required/>";
        childNodeHTML += "<br>";
        childNodeHTML += "<input id='postcodes' type='text' name='Pattern' pattern='[0-9]{5}' placeholder='PLZ' required/>";
        childNodeHTML += "<input id='places' type='text' name='Text' placeholder='Ort' required/>";
        childNodeHTML += "<br>";
        node.innerHTML += childNodeHTML;


    }

    function init(_event: Event): void {
        let fieldset: HTMLElement = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", checkInputs);
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (target.id == "tree") {
            let node: HTMLElement = document.getElementById("tree");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            treePrice = tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(treePrice);

        }
        if (target.id == "christmasBalls") {
            let node: HTMLElement = document.getElementById("ball");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            ballPrice = christmasBall[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(ballPrice);

        }
        if (target.id == "candles") {
            let node: HTMLElement = document.getElementById("candle");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            candlePrice = candle[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(candlePrice);

        }
        if (target.id == "tinsels") {
            let node: HTMLElement = document.getElementById("tinsel");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            tinselPrice = tinsel[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(tinselPrice);

        }
        if (target.id == "holders") {
            let node: HTMLElement = document.getElementById("holder");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            holderPrice = holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(holderPrice);
        }
        if (target.id == "deliveries") {
            let node: HTMLElement = document.getElementById("delivery");
            let value: string = target.value;
            let priceIndex: number = parseInt(value.substr(0, 1));
            let childNodeHTML: string;
            shipmentPrice = delivery[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(shipmentPrice);
        }

        if (target.id == "streets") {
            let node: HTMLElement = document.getElementById("street");
            strass = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;

        }

        if (target.id == "numbers") {
            let node: HTMLElement = document.getElementById("number");
            nummer = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;

        }

        if (target.id == "postcodes") {
            let node: HTMLElement = document.getElementById("postcode");
            postleitzahl = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;

        }

        if (target.id == "places") {
            let node: HTMLElement = document.getElementById("place");
            ort = target.value;
            let childNodeHTML: string;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";


            node.innerHTML = childNodeHTML;
        }
        let HTML: string;
        let node: HTMLElement = document.getElementById("price");
        HTML = " ";
        HTML += (treePrice + ballPrice + candlePrice + tinselPrice + holderPrice + shipmentPrice);
        HTML += " Euro";
        node.innerHTML = HTML;

    }

    function checkInputs(): void {
        console.log("lul");
        if (treePrice == 0 || ballPrice == 0 || candlePrice == 0 || tinselPrice == 0 || holderPrice == 0 || shipmentPrice == 0 || ort == "" || nummer == "" || postleitzahl == "" || strass == "")
         document.getElementById("buttonCheck").innerHTML = "Bitte prüfen sie ihre Angaben!"; 
        else {
            document.getElementById("buttonCheck").innerHTML = "";
        }
    }
}