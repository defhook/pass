const { Schema } = require('mongoose');

const parkSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  }
});

module.exports = parkSchema;
