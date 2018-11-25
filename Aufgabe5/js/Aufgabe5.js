var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    let treeboolean = false;
    let holderboolean = false;
    let shipmentboolean = false;
    function init() {
        displayFieldsets(Aufgabe5.data);
        document.getElementsByTagName("body")[0].addEventListener("change", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }
    function displayFieldsets(_item) {
        for (let key in _item) {
            console.log(key);
            let value = _item[key];
            let node = document.getElementsByTagName("body")[0];
            let h2 = document.createElement("h2");
            node.appendChild(h2);
            h2.innerText = key;
            let fieldset = document.createElement("fieldset");
            node.appendChild(fieldset);
            fieldset.setAttribute("name", key);
            for (let i = 0; i < value.length; i++) {
                displayHeteroPredef(value[i], fieldset, key);
            }
        }
    }
    function displayHeteroPredef(_heteroPredef, _fieldset, _key) {
        if (_key == "trees" || _key == "holder" || _key == "delivery") {
            console.log(_fieldset.childNodes.length);
            let forID = _fieldset.childNodes.length;
            let input = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name", "radio" + _key);
            input.setAttribute("id", _key + forID);
            let label = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
        }
        else {
            let p = document.createElement("p");
            _fieldset.appendChild(p);
            let input = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("value", "0");
            input.setAttribute("pattern", "[0-9]{1,}");
            input.setAttribute("name", _heteroPredef.name);
            p.innerText = _heteroPredef.name;
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        if (target.name == "radiotree") {
            treeboolean = true;
            let del = document.getElementById("treecheckout");
            if (del != null) {
                let co = document.getElementById("checkout");
                co.removeChild(del);
            }
            let convString = Number(target.id.substr(4));
            let id;
            if (convString > 0) {
                id = convString / 2;
            }
            else {
                id = 0;
            }
            let node = document.getElementById("checkout");
            let name = "Baum: " + Aufgabe5.data["trees"][id].name;
            let tree = document.createElement("p");
            node.appendChild(tree);
            let price = Aufgabe5.data["trees"][id].price;
            tree.setAttribute("price", price.toString());
            tree.setAttribute("id", "treescheckout");
            tree.innerText = name;
        }
        if (target.name == "radioholder") {
            holderboolean = true;
            let del = document.getElementById("holdercheckout");
            if (del != null) {
                let co = document.getElementById("checkout");
                co.removeChild(del);
            }
            let convString = Number(target.id.substr(6));
            let id;
            if (convString > 0) {
                id = convString / 2;
            }
            else {
                id = 0;
            }
            let node = document.getElementById("checkout");
            let name = "Halter: " + Aufgabe5.data["holder"][id].name;
            let holder = document.createElement("p");
            node.appendChild(holder);
            let price = Aufgabe5.data["holder"][id].price;
            holder.setAttribute("price", price.toString());
            holder.setAttribute("id", "holdercheckout");
            holder.innerText = name;
        }
        if (target.name == "radiodelivery") {
            shipmentboolean = true;
            let del = document.getElementById("deliverycheckout");
            if (del != null) {
                let co = document.getElementById("checkout");
                co.removeChild(del);
            }
            let convString = Number(target.id.substr(8));
            let id;
            if (convString > 0) {
                id = convString / 2;
            }
            else {
                id = 0;
            }
            let node = document.getElementById("checkout");
            let name = "Lieferung: " + Aufgabe5.data["delivery"][id].name;
            let shipment = document.createElement("p");
            node.appendChild(shipment);
            let price = Aufgabe5.data["delivery"][id].price;
            shipment.setAttribute("price", price.toString());
            shipment.setAttribute("id", "deliverycheckout");
            shipment.innerText = name;
        }
        else {
            if (Number(target.value) > 0) {
                let node = document.getElementById("checkout");
                let multiply = Number(target.getAttribute("price"));
                let parent = target.parentElement.getAttribute("name");
                let itemNum = Number(target.value);
                let name = parent + ": " + target.name + " x " + itemNum;
                let price = itemNum *= multiply;
                let category = document.createElement("p");
                node.appendChild(category);
                category.setAttribute("price", price.toString());
                category.setAttribute("name", target.name);
                category.innerText = name;
            }
            else {
                let co = document.getElementById("checkout");
                for (let i = 0; i < co.childNodes.length; i++) {
                    let delObj = document.getElementsByTagName("p")[i];
                    if (target.name == delObj.getAttribute("name")) {
                        co.removeChild(delObj);
                    }
                }
            }
        }
        calcPrice();
    }
    function calcPrice() {
        let co = document.getElementById("checkout");
        let gesPrice = 0;
        for (let i = 0; i < co.childNodes.length; i++) {
            let price = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            gesPrice += price;
            document.getElementById("price").innerText = gesPrice.toString();
        }
        console.log(gesPrice);
    }
    function check() {
        let prompt = "Bitte wählen sie noch:";
        if (treeboolean == false || holderboolean == false || shipmentboolean == false) {
            if (treeboolean == false) {
                prompt += "Baum ";
            }
            if (holderboolean == false) {
                prompt += "Halter ";
            }
            if (shipmentboolean == false) {
                prompt += "Lieferung";
            }
            alert(prompt);
        }
        else {
            alert("Alles in Ordnung!");
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map