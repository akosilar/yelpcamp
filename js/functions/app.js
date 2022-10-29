function singSong() {
    console.log('do');
    console.log('re');
    console.log('mi');
}

singSong();

function greet(person) {
    console.log(`hi, ${person}`);
}

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
