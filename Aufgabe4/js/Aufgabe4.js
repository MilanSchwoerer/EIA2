var Aufgabe4;
(function (Aufgabe4) {
    document.addEventListener("DOMContentLoaded", writeHTML);
    document.addEventListener("DOMContentLoaded", init);
    let treePrice = 0;
    let ballPrice = 0;
    let candlePrice = 0;
    let tinselPrice = 0;
    let holderPrice = 0;
    let deliveryPrice = 0;
    let place = "";
    let street = "";
    let nummer = "";
    let postcode = "";
    function writeHTML() {
        let node = document.getElementById("fieldset");
        let childNodeHTML;
        childNodeHTML = "<h3>Baumart</h3>";
        childNodeHTML += "<select name='Select' id='trees'>";
        for (let i = 0; i < Aufgabe4.tree.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.tree[i].name + "'>" + Aufgabe4.tree[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Glaskugeln</h3>";
        childNodeHTML += "<select name='Select' id='christmasBalls'>";
        for (let i = 0; i < Aufgabe4.christmasBall.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.christmasBall[i].name + "'>" + Aufgabe4.christmasBall[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Kerzen</h3>";
        childNodeHTML += "<select name='Select' id='candles'>";
        for (let i = 0; i < Aufgabe4.candle.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.candle[i].name + "'>" + Aufgabe4.candle[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lametta</h3>";
        childNodeHTML += "<select name='Select' id='tinsels'>";
        for (let i = 0; i < Aufgabe4.tinsel.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.tinsel[i].name + "'>" + Aufgabe4.tinsel[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Halterung</h3>";
        childNodeHTML += "<select name='Select' id='holders'>";
        for (let i = 0; i < Aufgabe4.holder.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.holder[i].name + "'>" + Aufgabe4.holder[i].name + "</option>";
        }
        childNodeHTML += "</select>";
        childNodeHTML += "<br>";
        childNodeHTML += "<h3>Lieferant</h3>";
        childNodeHTML += "<select name='Select' id='deliveries'>";
        for (let i = 0; i < Aufgabe4.delivery.length; i++) {
            childNodeHTML += "<option value='" + i + Aufgabe4.delivery[i].name + "'>" + Aufgabe4.delivery[i].name + "</option>";
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
    function init(_event) {
        let fieldset = document.getElementById("fieldset");
        fieldset.addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", checkInputs);
    }
    function handleChange(_event) {
        let target = _event.target;
        if (target.id == "trees") {
            let node = document.getElementById("tree");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            treePrice = Aufgabe4.tree[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(treePrice);
        }
        if (target.id == "christmasBalls") {
            let node = document.getElementById("ball");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            ballPrice = Aufgabe4.christmasBall[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(ballPrice);
        }
        if (target.id == "candles") {
            let node = document.getElementById("candle");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            candlePrice = Aufgabe4.candle[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(candlePrice);
        }
        if (target.id == "tinsels") {
            let node = document.getElementById("tinsel");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            tinselPrice = Aufgabe4.tinsel[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(tinselPrice);
        }
        if (target.id == "holders") {
            let node = document.getElementById("holder");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            holderPrice = Aufgabe4.holder[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(holderPrice);
        }
        if (target.id == "deliveries") {
            let node = document.getElementById("delivery");
            let value = target.value;
            let priceIndex = parseInt(value.substr(0, 1));
            let childNodeHTML;
            deliveryPrice = Aufgabe4.delivery[priceIndex].price;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + value.substr(1);
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
            console.log(deliveryPrice);
        }
        if (target.id == "streets") {
            let node = document.getElementById("street");
            street = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "numbers") {
            let node = document.getElementById("number");
            nummer = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "postcodes") {
            let node = document.getElementById("postcode");
            postcode = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        if (target.id == "places") {
            let node = document.getElementById("place");
            place = target.value;
            let childNodeHTML;
            childNodeHTML = "";
            childNodeHTML += "<a>";
            childNodeHTML += " " + target.value;
            childNodeHTML += "</a>";
            node.innerHTML = childNodeHTML;
        }
        let HTML;
        let node = document.getElementById("price");
        HTML = " ";
        HTML += (treePrice + ballPrice + candlePrice + tinselPrice + holderPrice + deliveryPrice);
        HTML += " Euro";
        node.innerHTML = HTML;
    }
    function checkInputs() {
        console.log("Error");
        if (treePrice == 0 || ballPrice == 0 || candlePrice == 0 || tinselPrice == 0 || holderPrice == 0 || deliveryPrice == 0 || place == "" || nummer == "" || postcode == "" || street == "")
            document.getElementById("buttonCheck").innerHTML = "Bitte prüfen sie ihre Angaben!";
        else {
            document.getElementById("buttonCheck").innerHTML = "";
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4.js.map