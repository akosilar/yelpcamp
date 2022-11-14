const jokes = require('give-me-a-joke');
// console.dir(jokes);

const colors = require('colors');

jokes.getRandomDadJoke(function(joke) {
    console.log(joke.rainbow);
})
// const giveMeAJoke = require('give-me-a-joke');

// // To get a random dad joke
// giveMeAJoke.getRandomDadJoke(function (joke) {
//   console.log(joke);
// });


