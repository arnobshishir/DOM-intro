const mainConatiner = document.getElementById('main-container');

const section = document.createElement('section');
section.innerHTML = `
    <h1>My Dynamic section</h1>
    <p>My dynamic paragraph inner Html</p>
    <ul>
    <li>1st item</li>
    <li>2nd item</li>
    <li>3rd item</li>
    <li>4th item</li>
    </ul>
`
mainConatiner.appendChild(section);