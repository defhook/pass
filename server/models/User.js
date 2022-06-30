const { Schema, model } = require('mongoose');

const parkSchema = require('./Park');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    savedParks: [parkSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


userSchema.virtual('parkCount').get(function () {
  return this.savedBooks.length;
});

const User = model('User', userSchema);

module.exports = User;
