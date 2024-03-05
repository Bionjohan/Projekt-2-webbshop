var varukorg = JSON.parse(localStorage.getItem("varukorg")) || [];

function add(produkt,pris) {
    varukorg.push({namn: produkt, pris: pris})
    localStorage.setItem("varukorg", JSON.stringify(varukorg));
}

var container = document.createElement("div");

varukorg.forEach(element => {
    var namn = element.namn;
    var pris = element.pris;

    var text = document.createElement("p");
    text.innerHTML = "Produkt: " + namn + ", Pris: " + pris;
    container.appendChild(text);
});

document.body.appendChild(container);