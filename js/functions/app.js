function singSong() {
    console.log('do');
    console.log('re');
    console.log('mi');
}

singSong();

function greet(person) {
    console.log(`hi, ${person}`);
}

greet(prompt('name'));

function repeat(message, reps) {
    for(let i = 1; i <= reps; i++) {
        console.log(message);
    }
}

repeat('hola', 3);

function add(x,y) {
    a = parseInt(x);
    b = parseInt(y);
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('enter a number!');
    }
    else {
        return a+b;
    }
}

console.log(add(prompt('enter x'),prompt('enter y')));