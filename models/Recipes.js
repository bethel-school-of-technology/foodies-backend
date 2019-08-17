const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalRecipesSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  ingredients: { 
    type: Array, 
    required: true 
  },
  directions: { 
    type: String, 
    required: true 
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true
  }
});

module.exports = mongoose.model('PersonalRecipes', PersonalRecipesSchema);