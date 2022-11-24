const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(morgan('common'))

app.get('/', (req,res) => {
    res.send('home page')
})

app.get('/dogs', (req,res) => {
    res.send('woof woof')
})

app.listen(3000, () => {
    console.log('app is listening on localhost:3000')
})