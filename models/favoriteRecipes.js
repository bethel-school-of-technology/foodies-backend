const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteRecipesSchema = new Schema({
    recipeId: { 
        type: String, 
        required: true 
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    }
  });
  
  module.exports = mongoose.model('FavoriteRecipes', FavoriteRecipesSchema);