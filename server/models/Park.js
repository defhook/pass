const { Schema } = require('mongoose');

const parkSchema = new Schema({
  parkId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

module.exports = parkSchema;
