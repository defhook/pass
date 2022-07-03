const { Schema } = require('mongoose');

const parkSchema = new Schema({
  attractionId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  waitTime:{ 
    type: Number
  }
});

module.exports = parkSchema;
