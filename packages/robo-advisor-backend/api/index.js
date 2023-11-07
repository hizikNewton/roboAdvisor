require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const corsOptions = require('../config/corsOptions');
const connectDB = require('../config/dbConnect');

//app config
const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(cors(corsOptions));
app.use(express.json()); // middleware to parse json
app.use(cookieParser());

app.use('/test', require('../routes/testRoute'));
app.use('/api', require('../routes/instrumentWeightRoute'));

mongoose.set('strictQuery', false);
//db config
connectDB();
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});

module.exports = app;
