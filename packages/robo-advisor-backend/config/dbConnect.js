const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = async () => {
  try {
    const env = dotenv.config({ path: `.env.prod`, override: true });
    mongoose.connect(env.parsed.MONGODB_CONNECTION_STRING).then(() => {
      const db = mongoose.connection;
      db.on('error', (err) => console.log('erorrrr', err));
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
