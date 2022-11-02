const btn = document.querySelector('#v2');
btn.onclick = function () {
    alert('button 2 clicked');

}

function scream () {
    alert('how dare you enter my range!');
}

function inform () {
    alert('button 3 clicked');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked on an h1');
};


const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', inform);