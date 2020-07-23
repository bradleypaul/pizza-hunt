const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  pizza: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  size: {
    type: String
  }, 
  toppings: []
});

const Pizza = model('Pizza', PizzaSchema);
module.exports = Pizza;