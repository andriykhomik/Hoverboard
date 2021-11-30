const container = document.querySelector('#container');

//from tutorial
// const colors = [
//     '#e74c3c',
//     '#8e44ad',
//     '#3498db',
//     '#e67e22',
//     '#2ecc71'
// ]

//I prefer
const colors = [
    '#a91708',
    '#b9023a',
    '#85040f',
    '#6e0213',
    '#98091f'
]

for (let i = 0; i < 500; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', ()=> setColor(square));
    square.addEventListener('mouseout', ()=> removeColor(square));

    container.appendChild(square);
}

//My way
function randomColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    // return `rgb(${r} ${g} ${b})`;

    //from tutorial
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(square){
     square.style.backgroundColor = randomColor();
}

function removeColor(square){
    square.style.backgroundColor = '#1d1d1d';
}


