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
// greet(prompt('name'));
const week = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}
let num = 2;
console.log(week[num]);

const player = {
    name: 'lars',
    rating: 1500
}

console.log(`${player.name} is rated ${player.rating}`);

function returnDay(num) {
    const week = {
         1: 'Monday',
         2: 'Tuesday',
         3: 'Wednesday',
         4: 'Thursday',
         5: 'Friday',
         6: 'Saturday',
         7: 'Sunday'
     }
     if(num >= 1 && num <= 7){
         return week[num];
     }
     else {
         return null;
     }
 }
console.log(returnDay(5));

const cat = {
    name: 'maymay',
    color: 'orange',
    meow() {
        console.log("meow meow");
        console.log(`${this.name}`);
    }
    
}
