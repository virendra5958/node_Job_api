
require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URL;

mongoose.connect(uri, {})

  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });














//  //const mongoUrl = 'mongodb://localhost:27017/jobData';
// //  const mongoUrl = process.env.MONGODB_URL;

// mongoose.connect(mongoUrl, {}).then(() => {
//   console.log('Mongo Connected');
// }).catch(err => {
//   console.error('Connection error:', err);
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('Mongo Disconnected');
// });

