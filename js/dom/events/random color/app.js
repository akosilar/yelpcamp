const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const randomColor = makeRandomColor();
    document.body.style.backgroundColor = randomColor;
    h1.innerText = randomColor;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const newColor = `rgb(${r},${g},${b})`

    return newColor;
}
