const jokes = require('give-me-a-joke');
// console.dir(jokes);

jokes.getRandomCNJoke(function(joke) {
    console.log(joke);
})