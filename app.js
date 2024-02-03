require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
  .then(console.log("Connected"))

const app = express()
app.use(cors())
const port = process.env.PORT || 3001

app.use(express.json())
app.use(express.static('dist'))

const messagesRouter = require('./controllers/messages')
const weatherRouter = require('./controllers/weather')
app.use(messagesRouter)
app.use(weatherRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})