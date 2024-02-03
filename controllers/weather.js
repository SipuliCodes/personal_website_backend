require('dotenv').config()

const axios = require('axios')
const router = require('express').Router()

const api_key = process.env.OPENWEATHER_API

router.get('/weather/:city', async (req, res) => {
  const city = req.params.city
  const city_data = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`)
  const weather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city_data.data[0].lat}&lon=${city_data.data[0].lon}&units=metric&appid=${api_key}`)
  
  res.status(200).json({weather: weather.data.list, cityName: weather.data.city.name})
})


module.exports = router