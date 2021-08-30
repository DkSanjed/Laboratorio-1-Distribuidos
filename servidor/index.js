const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Servidor")
})

app.get('/status', (req, res) => {
  if (Boolean(Math.round(Math.random() < 0.7))) {
    res.sendStatus(200)
  } else {
    res.sendStatus(500)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})