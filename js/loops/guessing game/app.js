
let maximum = parseInt(prompt("enter the max number"));
while(!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}


const target = Math.floor(Math.random() * maximum ) + 1;
console.log(target);

let guess = parseInt(prompt("enter your first guess!"));
let attempts = 1;

while(parseInt(guess) !==target) {
    if(guess === 'q') {
        break;
    }
    attempts++;
    if(guess >target) {
        guess = prompt("too high, enter a new guess:");
    }
    else {
        guess = prompt("too low! enter a new guess:");
    }
}

if (guess === 'q') {
    console.log('ok you quit');
}

else{
    console.log(`you got it! It took you ${attempts} guesses`);5

}
