const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Servidor")
})

app.get('/status', (req, res) => {
  if (Boolean(Math.round(Math.random() < 0.7))) {
    res.status(200).send("Server is working")
  } else {
    res.status(500).send("Server have an error")
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})