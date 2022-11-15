// 

const express = require('express')
const app = express()
const port = 3000


// app.use((req,res) => {
//   console.log('we got a new request')
//   // res.send(`<h1>hello world</h1>`)
//   // res.send({color: 'red'})
  
//   // console.dir(req)
// })

//home route
app.get('/',(req,res) => {
  res.send('this is the homepage')
})

app.get('/r/:subreddit/',(req,res) => {
  const {subreddit} = req.params
  res.send(`browing the ${subreddit} subreddit`)
  console.log(req.params)
})

app.get('/r/:subreddit/:postId',(req,res) => {
  const {subreddit,postId} = req.params
  res.send(`viewing the postid: ${postId} from the ${subreddit} subreddit`)
  console.log(req.params)
})

app.post('/cats', (req,res) =>{
  res.send('post request to cats')
})

app.get('/cats', (req,res) => {
  // console.log('cat request!')
  res.send('meow')
})

app.get('/dogs', (req,res) => {
  res.send('woof')
})

//search routes
app.get('/search', (req,res) => {
  const {q,color} = req.query
  if(!q){
    res.send('nothing found')
  }else{
    console.log(req.query)
  res.send(`i'm reading q is ${q} and color is ${color}`)
  }
  
})

//default route must be placed/ordered at the end
app.get('*', (req,res) => {
  res.send('i dunno that path')
})


// app.get('/', (req, res) => {
//   res.send(`<h1>hello world</h1>`)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})