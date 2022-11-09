console.log('Second file of js');
const allLi = document.getElementsByTagName('li');
console.log(allLi); 

const allTitles = document.getElementsByClassName('section-title')
console.log(allTitles); 
const secondSection = document.getElementById('second-section')
console.log(secondSection);
secondSection.style.color = 'white'
secondSection.style.backgroundColor = 'blue'

const secondList = document.getElementById('second-list');

const li = document.createElement('li')
li.innerText= 'My dynamic principal'

secondList.appendChild(li);
 

