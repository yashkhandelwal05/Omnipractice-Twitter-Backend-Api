const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log("Connecting To Mongodb")
    await mongoose.connect('mongodb://localhost:27017/twitter');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;