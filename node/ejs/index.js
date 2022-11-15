const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req,res) => {
    // res.send('home')
    res.render('home')
})

app.get('/cats', (req,res) => {
    const cats = [
        'blue',
        'rocket',
        'meowmers',
        'tuffy',
        'booger'
    ]
    res.render('cats', {cats})
})

app.get('/rand', (req,res) => {
    const rnd = Math.floor(Math.random() *10) +1
    // res.render('random', {rand: rnd})
    res.render('random', {rnd})

})

app.get('/r/:subreddit', (req,res) =>{
    const {subreddit} = req.params;
    const data = redditData[subreddit]
    if(data){
    console.log(data)
    res.render('subreddit', {subreddit, ...data})
    } else {
        res.render('notfound', {subreddit})
    }
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})