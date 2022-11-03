const form = document.querySelector('#shelterForm');
const list = document.querySelector('#cats');
const input = document.querySelector('#catName');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(input.value);
    const newLI = document.createElement("LI");
    const catName = input.value;
    newLI.innerText = catName;
    list.appendChild(newLI);
    input.value = '';
})

