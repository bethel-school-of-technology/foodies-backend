var mongoose = require('mongoose');


var recSchema =  new Schema;({
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

var Recipes = mongoose.model('Recipes', recSchema);
module.exports = Recipes;