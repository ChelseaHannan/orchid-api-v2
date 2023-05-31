const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes'); 

// connect to db
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
  console.log(error)
})
database.once('connected', () => {
  console.log("Database Connected")
})

// start local server
app.use(express.json());
app.listen(3000, () => {
  console.log(`Server started at ${3000}`)
})

// routes
app.use('/api', routes)