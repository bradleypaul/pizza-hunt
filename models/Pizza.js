const { Schema, model } = require('mongoose');
const moment = require('moment');

const PizzaSchema = new Schema({
  pizza: {
    type: String
  },
  createdBy: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (val) => moment(val).format('MMM DD, YYYY [at] hh:mm a')
  },
  size: {
    type: String
  }, 
  toppings: [],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

const Pizza = model('Pizza', PizzaSchema);
module.exports = Pizza;