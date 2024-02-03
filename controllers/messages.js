const express = require('express')
const router = express.Router()
const Message = require('../models/message')

router.get('/messages', async (req, res) => {
  const messages =  await Message.find({})
  res.status(200).json(messages)
})


router.post('/messages', async (req, res) => {
  const newMessage = req.body
  const message = new Message({
    user: newMessage.user,
    message: newMessage.message,
    time: newMessage.time,
    date: newMessage.date,
  })

  await message.save()

  console.log(message)
  res.json(message).end()
})


module.exports = router