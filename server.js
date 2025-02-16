const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use('/items', routes)

const PORT = 3000
const server = app.listen(
  PORT,
  // console.log(`Server running on port ${PORT}`)
)

module.exports = { app, server }
