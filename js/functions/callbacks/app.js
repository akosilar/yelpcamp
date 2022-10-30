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

// const id = setInterval(() => {
//     console.log(`${Math.random()}`);
// },1000);

let usernames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

function validUsernames(usernames) {
    return usernames.filter(un => usernames.length < 10);
}

const exams = [80,98,92,78,7,90,89,84,81,77];

exams.every(score => score>= 75);
exams.some(score => score>= 75);

const prices =[9.99,1.50,19.99,49.99,30.50];
// const total = prices.reduce((total, price) => {
//     return total + price;
// })

const total = prices.reduce((total, price) =>  total + price
);

const minPrice = prices.reduce((min,price) => {
    if (price<min){
        return price;
    }
    else {
        return min;
    }
});

const maxPrice = prices.reduce((max,price) => {
    if (price>max){
        return price;
    }
    else {
        return max;
    }
});

const highestRated = movies.reduce((bestMovie,currMovie) => {
    if(currMovie.score > bestMovie.score) {
        return currMovie;
    }else {
        return bestMovie;
    }
});

const evens = [2,4,6,8];
const evenSum = evens.reduce((sum,num) => sum + num, 100); //has an initial value of 100

const person = {
    firstName: 'vertigo',
    lastName: 'mortensen',
    fullName: function () {
        return `${this.firstName}  ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(person.fullName());
        },3000)
    }
}