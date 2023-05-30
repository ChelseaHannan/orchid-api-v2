const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
// const dotenv = require('dotenv')
// const connectDB = require('./config/db')

// dotenv.config({
//     path: './config/config.env'
// })

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)