const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favorite = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  record_id: {
    type: Array,
   // required: true,
  },
  
}, {
  collection: 'foodiesAll'
})

module.exports = mongoose.model('Foodies', favorite)