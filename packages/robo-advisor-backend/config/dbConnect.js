const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = async () => {
  try {
    const env = dotenv.config({ path: `.env.local`, override: true });
    mongoose.connect(env.parsed.LOCAL_DB).then(() => {
      const db = mongoose.connection;
      db.on('error', (err) => console.log('erorrrr', err));
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
