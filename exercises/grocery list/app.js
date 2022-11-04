// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newLI = document.createElement('li');
    newLI.innerText = `${product.value} ${quantity.value}`
    list.append(newLI);
    
})