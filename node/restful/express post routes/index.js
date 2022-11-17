const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

let comments = [
    {
        id: uuidv4(),
        username: 'todd',
        comment: 'lmao so funny'
    },
    {
        id: uuidv4(),    
        username: 'skyler',
        comment: 'why u mad?'
    },
    {
        id: uuidv4(),
        username: 'art33zy',
        comment: 'gg noob'
    },
    {
        id: uuidv4(),
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
    comments.push({username,comment, id: uuidv4()})
    // res.send('it worked')
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/commentDetail', {comment})
})

app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/editComment', {comment})
})

app.patch('/comments/:id', (req,res) => {
    const {id} = req.params
    const foundComment = comments.find(c => c.id === id)
    const commentUpdate = req.body.comment
    console.log(commentUpdate)
    foundComment.comment = commentUpdate
    res.redirect('/comments')
    // res.send('updating something')
})

app.delete('/comments/:id', (req,res) => {
    const {id} = req.params
    // const foundComment = comments.find(c => c.id === id)
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')

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

