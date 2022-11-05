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
btn3.addEventListener('mousedown', inform);


function twist() {
    console.log("TWIST");
}
function shout() {
    console.log("SHOUT");
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;
tasButton.addEventListener('click', twist, {once: true});
tasButton.addEventListener('click', shout);
