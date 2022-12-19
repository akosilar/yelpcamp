const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/greet', (req,res) => {
    // console.log(req.cookies)
    const {name = 'no-name'} = req.cookies
    res.send(`hey there! ${name}`)
})

app.get('/setname' , (req,res) => {
    res.cookie('name', 'stevie chicks')
    res.cookie('animal', 'harlequin shrimp')
    res.send('ok sent you a cookie!')
})

app.listen(3000, () =>  {
    console.log('serving')
})