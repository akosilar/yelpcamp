const numbers = [1,2,3,4,5,6,7];

function print (element) {
    console.log(`number: ${element}`);
}

numbers.forEach(function (el) {
    console.log(`number: ${el}`);
    
});

const doubles = numbers.map((num) => {
    return num*2;
})

const movies = [
    {
        title: 'the ring',
        score: 100
    },
    {
        title: 'sukob',
        score: 80
    },
    {
        title: 'the exorcist',
        score: 90
    }
   
]

movies.forEach((mov) => {
    console.log(`${mov.title} is rated ${mov.score}/100`);
})

const newMovies = movies.map((mov)=> {
    return (`${mov.title} is rated ${mov.score/10}/10`);
}
) 
const square = (num) => {
    return num*num;
}

const rollDie = () => {
    return Math.floor(Math.random() *6) + 1;
}

const rollDie2 = () => (Math.floor(Math.random() *6) + 1);

const greet = (name) => {
    return `Hey ${name}!`;
}


setTimeout(() => {
    console.log('hello after 3 secs')
}, 3000);

const id = setInterval(() => {
    console.log(`${Math.random()}`);
},1000);