namespace Aufgabe6 {

    window.addEventListener("load", init);

    let treeboolean: boolean = false;
    let holderboolean: boolean = false;
    let deliveryboolean: boolean = false;

    function init(): void {
        console.log("start");
        displayFieldsets(data);
        document.getElementsByTagName("body")[0].addEventListener("input", handleChange);
        document.getElementById("check").addEventListener("click", check);
    }

    function displayFieldsets(_item: Category): void {


        let form: HTMLElement = document.createElement("form");
        form.setAttribute("action", "https://eia2-server-node.herokuapp.com/");
        form.setAttribute("method", "get");
        document.getElementsByTagName("body")[0].appendChild(form);
        for (let key in _item) {
            console.log(key);
            let value: Product[] = _item[key];
            let h2: HTMLElement = document.createElement("h2");
            form.appendChild(h2);
            h2.innerText = key;
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            form.appendChild(fieldset);
            fieldset.setAttribute("name", key);
            fieldset.setAttribute("id", key);

            for (let i: number = 0; i < value.length; i++) {
                createInnerFieldset(value[i], fieldset, key);
            }
        }
        let h2: HTMLElement = document.createElement("h2");
        form.appendChild(h2);
        h2.innerHTML = "Anschrift";
        let div: HTMLElement = document.createElement("div");
        let HTML: string = "<input class=adress type=text name=Text placeholder=Strasse required />";
        HTML += "<input class=adress type=text name=Pattern pattern={1,} placeholder=Hausnummer required />";
        form.appendChild(div);
        div.innerHTML = HTML;
        form.innerHTML += "<button type=submit>Submit</button>";
    }

    function createInnerFieldset(_heteroPredef: Product, _fieldset: Element, _key: string): void {

        if (_key == "tree" || _key == "holder" || _key == "delivery") {
            let forID: number = _fieldset.childNodes.length;

            let label: HTMLElement = document.createElement("label");
            _fieldset.appendChild(label);
            label.setAttribute("for", _key + forID);
            label.innerText = _heteroPredef.name;
            let input: HTMLInputElement = document.createElement("input");
            label.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "radio");
            input.setAttribute("name", "radio" + _key);
            input.setAttribute("id", _key + forID);
            input.setAttribute("hiddenName", _heteroPredef.name);
            input.setAttribute("category", _key);

        }

        else {
            let p: HTMLElement = document.createElement("p");
            _fieldset.appendChild(p);
            let input: HTMLInputElement = document.createElement("input");
            _fieldset.appendChild(input);
            input.setAttribute("price", _heteroPredef.price.toString());
            input.setAttribute("type", "number");
            input.setAttribute("stepper", "{1} [0-9]");
            input.setAttribute("name", _key + _heteroPredef.name);
            input.setAttribute("category", _key);
            p.innerText = _heteroPredef.name;
        }
    }

    function handleChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        target.setAttribute("value", target.value);
        if (target.name == "radiotree") {
            treeboolean = true;
            for (let i: number = 0; i < data["tree"].length; i++) {
                let dom: HTMLElement = document.getElementById("tree" + i);
                dom.setAttribute("hiddenvalue", "off");
            }
            target.setAttribute("hiddenvalue", "on");
        }

        if (target.name == "radioholder") {
            holderboolean = true;
            for (let i: number = 0; i < data["holder"].length; i++) {
                let dom: HTMLElement = document.getElementById("holder" + i);
                dom.setAttribute("hiddenvalue", "off");
            }
            target.setAttribute("hiddenvalue", "on");
        }

        if (target.name == "radiodelivery") {
            deliveryboolean = true;
            for (let i: number = 0; i < data["delivery"].length; i++) {
                let dom: HTMLElement = document.getElementById("delivery" + i);
                dom.setAttribute("hiddenvalue", "off");
            }
            target.setAttribute("hiddenvalue", "on");
        }
        if (target.className == "adress" && target.value.length > 0) {
            target.setAttribute("hiddenName", target.value);
            target.setAttribute("hiddenvalue", "on");
        }

        let articles: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let checkout: HTMLElement = document.getElementById("checkout");
        checkout.innerText = "";
        for (let i: number = 0; i < articles.length; i++) {
            let article: HTMLInputElement = articles[i];
            let articleName: string = article.getAttribute("name");
            if (articleName == "radiotree" || articleName == "radioholder" || articleName == "radiodelivery") {
                articleName = article.getAttribute("hiddenName");
            }


            let articleValue: number = Number(article.getAttribute("value"));
            let articlePrice: number = Number(article.getAttribute("price"));
            if (articleValue > 0 || article.getAttribute("hiddenvalue") == "on") {
                let articleCategory: string = article.getAttribute("category");
                if (articleCategory == "tree" || articleCategory == "holder" || articleCategory == "delivery") {
                    articleValue = 1;
                }
                let price: number = articleValue * articlePrice;
                if (article.className == "adress") {
                    if (article.name == "Text") {

                        articleCategory = "Adresse:";
                    }
                    else {
                        articleCategory = "Hausnummer:";
                    }
                    let createArticle: HTMLElement = document.createElement("p");
                    checkout.appendChild(createArticle);
                    createArticle.innerText = articleCategory + article.getAttribute("hiddenName");
                }

                else {
                    let createArticle: HTMLElement = document.createElement("p");
                    checkout.appendChild(createArticle);
                    createArticle.setAttribute("price", price.toString());
                    createArticle.innerText = articleCategory + ": " + articleName + " x " + articleValue;
                }
            }


        }
        calcPrice();
    }


    function calcPrice(): void {
        let co: HTMLElement = document.getElementById("checkout");
        let gesPrice: number = 0;
        for (let i: number = 0; i < co.childNodes.length; i++) {
            let price: number = Number(document.getElementsByTagName("p")[i].getAttribute("price"));
            gesPrice += price;
            document.getElementById("price").innerText = gesPrice.toString();
        }
        console.log(gesPrice);
    }

    function check(): void {
        let prompt: string = "Bitte noch wählen!:";
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
}