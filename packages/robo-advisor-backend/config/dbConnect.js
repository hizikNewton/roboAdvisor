const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = async () => {
  try {
    const { MONGODB_CONNECTION_STRING } = process.env;
    mongoose.connect(MONGODB_CONNECTION_STRING).then(() => {
      const db = mongoose.connection;
      db.on('error', (err) => console.log('erorrrr', err));
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
