const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'West indies';

placesList.appendChild(li);

const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food list';
section.appendChild(h1);

mainContainer.appendChild(section);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Burger';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'pizza';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Coke';
ul.appendChild(li3);

section.appendChild(ul);