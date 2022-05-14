/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const userInputElement = document.querySelector('#search');
const submitFormElement = document.querySelector('#submit-btn');
const outputElement = document.querySelector('#output').style.visibility = 'hidden';


submitFormElement.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#output').style.visibility = 'visible';
    let kg = userInputElement.value
    document.querySelector('#outputLb').innerHTML = "Svarai: " + (kg * 2.2046).toFixed(2);
    document.querySelector('#outputG').innerHTML = "Gramai: " + (kg / 0.0010000).toFixed(2);
    document.querySelector('#outputOz').innerHTML = "Uncijos: " + (kg * 35.274).toFixed(2);
});