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
