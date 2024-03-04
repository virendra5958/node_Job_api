const mongoose= require('mongoose');

const jobDetails = new mongoose.Schema({
 title: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
  },

  company: {
    type: String,
    required: true,
  },


  location: {
    type: String,
    required: true,
  },
  

  salary: {
    type: Number,
  },


});

const Jobs = mongoose.model('Jobs', jobDetails);

module.exports = Jobs;