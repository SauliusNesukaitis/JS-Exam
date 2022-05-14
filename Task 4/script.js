/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const outputElement = document.getElementById('output');

function fetchData() {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                const card = document.createElement('div');
                card.classList.add("card");

                const brandElement = createElement('div',element.brand);
                card.appendChild(brandElement);

                    element.models.forEach(model => {
                        const modelElement = createElement('p', model);
                        card.appendChild(modelElement);
                    });
                outputElement.appendChild(card);
            });
        });
};

fetchData();

function createElement(tag, text) {
    const element = document.createElement(tag);
    element.innerHTML = text;
    return element;
};