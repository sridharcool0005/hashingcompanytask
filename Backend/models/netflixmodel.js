const mongoose = require('mongoose');
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

let eventSchema = new Schema({
  mid: {
    type: String,

  },
  category: {
    category_name: String,
      title: String,
      image_url: String
    },

},
  {
    timestamps: true
  },
  {
    collection: 'netflixdata'
  })

module.exports = mongoose.model('netflixdata', eventSchema)
