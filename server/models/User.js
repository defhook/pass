const { Schema, model } = require('mongoose');

const parkSchema = require('./Park');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
    },
    savedAttractions: [parkSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


userSchema.virtual('attractionCount').get(function () {
  return this.savedAttractions.length;
});

const User = model('User', userSchema);

module.exports = User;
