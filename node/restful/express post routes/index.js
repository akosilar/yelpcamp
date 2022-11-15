const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'todd',
        comment: 'lmao so funny'
    },
    {
        username: 'skyler',
        comment: 'why u mad?'
    },
    {
        username: 'art33zy',
        comment: 'gg noob'
    },
    {
        username: 'luke',
        comment: 'what a simp'
    }
    
]

app.get('/comments', (req,res) => {
    // const {username, comment} = comments
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req,res) => {
    res.render('comments/new')
})

app.post('/comments', (req,res) => {
    const {username, comment} = req.body
    console.log(req.body)
    comments.push({username,comment})
    res.send('it worked')
})

app.get('/tacos', (req,res) => {
    res.send('get /tacos response')
})

app.post('/tacos', (req,res) => {
    console.log(req.body)
    const {meat, qty} = req.body
    res.send(`you ordered ${qty} ${meat}`)
})

app.listen(3000, () => {
    console.log('on port 3000!')
})

