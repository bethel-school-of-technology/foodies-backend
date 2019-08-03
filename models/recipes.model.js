var mongoose = require('mongoose');


var RecSchema = mongoose.Schema;({
    id: {
    type: String,
    required: true,
    },
    recipe_id: {
        type: String,
        title: String,
        ingredients: String,
        ref: 'Users',
    required: true,
    }
});

var Recipes = mongoose.model('Recipes', RecSchema);
module.exports = Recipes;