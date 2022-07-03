const mongoose = require('mongoose');

mongoose.connect(process.env.Pass_UI || 'mongodb://localhost/Pass', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
