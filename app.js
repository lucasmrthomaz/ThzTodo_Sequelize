const express = require('express')
const app = express()
const port = 3000

const  usrs  = require('./index')


app.get('/user', (req, res) => {
  ex = exibeTodosUsuarios
  res.send("Devolvdo: " + JSON.stringify(usuarios.exibeTodosUsuarios()));
})

app.post('/user', (req, res) => {
  res.send('Post em user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
