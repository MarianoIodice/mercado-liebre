const express = require('express')
const path = require('path')
const app = express();
const expressPort = 3030;
const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))

app.listen(expressPort, () => {
  console.log(`Puerto: ${expressPort}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/home.html'))
  })
  app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/login.html'))
  })

  app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/register.html'))
  })

  app.post('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './view/home.html'))
  })