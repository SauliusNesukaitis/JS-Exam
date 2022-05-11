/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const showUsersBtn = document.getElementById('btn');
const mesageElement = document.getElementById('message');
const outputElement = document.getElementById('output');

function getUser() {
    showUsersBtn.addEventListener('click', () => {
    mesageElement.remove();
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                const card = document.createElement('div');
                card.classList.add("card");

                const userImageOutput = createElement('img',element.avatar_url);
                userImageOutput.classList.add('image');
                card.appendChild(userImageOutput);

                const userLoginOutput = createElement('h3',element.login);       
                card.appendChild(userLoginOutput);

                outputElement.appendChild(card);
            });
        })
    })
};

getUser();

function createElement(tag, text) {
    const element = document.createElement(tag);
    if(tag === 'img') {
        element.src = text;
    } else {
        element.innerHTML = text; 
    }
    return element;
}