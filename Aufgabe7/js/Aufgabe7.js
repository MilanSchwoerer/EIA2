var Aufgabe7;
(function (Aufgabe7) {
    window.addEventListener("load", init);
    let treeboolean = false;
    let holderboolean = false;
    let deliveryboolean = false;
    let address = "https://eia2-server-node.herokuapp.com/";
    function init() {
        console.log("start");
        displayFieldsets(Aufgabe7.data);
        document.getElementsByTagName("body")[0].addEventListener("input", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }
    function displayFieldsets(_item) {
        let form = document.createElement("form");
        document.getElementsByTagName("body")[0].appendChild(form);
        for (let key in _item) {
            console.log(key);
            let value = _item[key];
            let h2 = document.createElement("h2");
            form.appendChild(h2);
            h2.innerText = key;
            let fieldset = document.createElement("fieldset");
            form.appendChild(fieldset);
            fieldset.setAttribute("name", key);
            fieldset.setAttribute("id", key);
            for (let i = 0; i < value.length; i++) {
                createInnerFieldset(value[i], fieldset, key);
            }
        }
        let h2 = document.createElement("h2");
        form.appendChild(h2);
        h2.innerHTML = "Anschrift";
        let div = document.createElement("div");
        let HTML = "<input class=adress type=text name=Text placeholder=Strasse required />";
        HTML += "<input class=adress type=text name=Pattern pattern={1,} placeholder=Hausnummer required />";
        form.appendChild(div);
        div.innerHTML = HTML;
        form.innerHTML += "<button type=button id=async>Async</button>";
        document.getElementById("async").addEventListener("click", sendRequestWithCustomData);
    }
    function sendRequestWithCustomData() {
        console.log("requestcustom");
        let xhr = new XMLHttpRequest();
        let co = document.getElementById("checkout");
        let checkout = "";
        for (let i = 0; i < co.childNodes.length; i++) {
            let value = document.getElementsByTagName("p")[i].getAttribute("value");
            let name = document.getElementsByTagName("p")[i].getAttribute("name");
            checkout += name + ":" + value + "&";
        }
        showSelection(checkout);
        console.log(checkout);
        xhr.open("GET", address + "?" + checkout, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    function createInnerFieldset(_heteroPredef, _fieldset, _key) {
        if (_key == "tree" || _key == "holder" || _key == "delivery") {
            let forID = _fieldset.childNodes.length;
            let label = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
            let input = document.createElement("input");
            label.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name", "radio" + _key);
            input.setAttribute("id", _key + forID);
            input.setAttribute("hiddenName", _heteroPredef.name);
            input.setAttribute("category", _key);
        }
        else {
            let p = document.createElement("p");
            _fieldset.appendChild(p);
            let input = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("value", "0");
            input.setAttribute("pattern", "[0-9]{1,}");
            input.setAttribute("name", _key + _heteroPredef.name);
            input.setAttribute("hiddenName", _heteroPredef.name);
            input.setAttribute("category", _key);
            p.innerText = _heteroPredef.name;
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        target.setAttribute("value", target.value);
        if (target.name == "radiotree") {
            treeboolean = true;
            for (let i = 0; i < Aufgabe7.data["tree"].length; i++) {
                let dom = document.getElementById("tree" + i);
                dom.setAttribute("hiddenvalue", "off");
            }
            target.setAttribute("hiddenvalue", "on");
        }
        if (target.name == "radioholder") {
            holderboolean = true;
            for (let i = 0; i < Aufgabe7.data["holder"].length; i++) {
                let dom = document.getElementById("holder" + i);
                dom.setAttribute("hiddenvalue", "off");
            }
            target.setAttribute("hiddenvalue", "on");
        }
        if (target.name == "radiodelivery") {
            deliveryboolean = true;
            for (let i = 0; i < Aufgabe7.data["delivery"].length; i++) {
                let dom = document.getElementById("delivery" + i);
                dom.setAttribute("hiddenvalue", "off");
            }
            target.setAttribute("hiddenvalue", "on");
        }
        if (target.className == "adress" && target.value.length > 0) {
            target.setAttribute("hiddenName", target.value);
            target.setAttribute("hiddenvalue", "on");
        }
        let articles = document.getElementsByTagName("input");
        let checkout = document.getElementById("checkout");
        checkout.innerText = "";
        for (let i = 0; i < articles.length; i++) {
            let article = articles[i];
            let articleName = article.getAttribute("name");
            if (articleName == "radiotree" || articleName == "radioholder" || articleName == "radiodelivery") {
                articleName = article.getAttribute("hiddenName");
            }
            let articleValue = Number(article.getAttribute("value"));
            let articlePrice = Number(article.getAttribute("price"));
            if (articleValue > 0 || article.getAttribute("hiddenvalue") == "on") {
                let articleCategory = article.getAttribute("category");
                if (articleCategory == "tree" || articleCategory == "holder" || articleCategory == "delivery") {
                    articleValue = 1;
                }
                let price = articleValue * articlePrice;
                if (article.className == "adress") {
                    if (article.name == "Text") {
                        articleCategory = "Adresse:";
                    }
                    else {
                        articleCategory = "Hausnummer:";
                    }
                    let createArticle = document.createElement("p");
                    console.log("zws:" + articleName);
                    createArticle.setAttribute("name", articleName);
                    createArticle.setAttribute("value", article.getAttribute("value"));
                    checkout.appendChild(createArticle);
                    createArticle.innerText = articleCategory + ": " + article.getAttribute("hiddenName");
                }
                else {
                    articleName = articleCategory + ":" + article.getAttribute("hiddenName");
                    let createArticle = document.createElement("p");
                    checkout.appendChild(createArticle);
                    createArticle.setAttribute("price", price.toString());
                    createArticle.setAttribute("value", articleValue.toString());
                    createArticle.setAttribute("name", articleName);
                    createArticle.innerText = articleCategory + ": " + article.getAttribute("hiddenName") + " x " + articleValue;
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
        let prompt = "Bitte noch auswählen:";
        if (treeboolean == false || holderboolean == false || deliveryboolean == false) {
            if (treeboolean == false) {
                prompt += "Baum ";
            }
            if (holderboolean == false) {
                prompt += "Halter ";
            }
            if (deliveryboolean == false) {
                prompt += "Lieferung";
            }
            alert(prompt);
        }
        else {
            alert("Alles ausgewählt!");
        }
    }
    function showSelection(_string) {
        let UrlArray = [];
        console.log("works");
        let div = document.getElementById("HTMLSelection");
        if (div != null) {
            div.remove();
        }
        let HTML = "<br>";
        for (let i = 0; i < _string.length; i++) {
            if (_string[i] == "&") {
                UrlArray.push(HTML);
                HTML = "<br>";
            }
            else {
                if (HTML == "<br>Text") {
                    HTML = "<br>Adresse";
                }
                if (HTML == "<br>Pattern") {
                    HTML = "<br>Hausnummer";
                }
                HTML += _string[i];
            }
        }
        let create = document.createElement("div");
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(create);
        create.setAttribute("id", "HTMLSelection");
        for (let i = 0; i < UrlArray.length; i++) {
            create.innerHTML += UrlArray[i];
        }
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=Aufgabe7.js.map