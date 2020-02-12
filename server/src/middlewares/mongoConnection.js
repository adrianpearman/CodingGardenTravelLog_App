const mongoose = require('mongoose');
const keys = require('../../config/keys');

module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return mongoose.connect(keys.MONGOURI, { useNewUrlParser: true }, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('Connected to Prodcution Database');
    });
  }
  return mongoose.connect(keys.MONGOURI, { useNewUrlParser: true }, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('Connected to Development Database');
  });
};
