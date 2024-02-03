require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const messagesRouter = require('./controllers/messages')

mongoose.connect(process.env.MONGO_URI)
  .then(console.log("Connected"))

const app = express()
app.use(cors())
const port = process.env.PORT || 3001

app.use(express.json())

app.use(messagesRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})