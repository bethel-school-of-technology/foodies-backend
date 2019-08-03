var mongoose = require('mongoose');

var favSchema = mongoose.Schema;({
   userId: {
    type: String,
    required: true,
    },
    username: {
    type: String,
    required: true,
    },
    password: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users',
    required: true,
    }
});

var Favorite = mongoose.model('Favorite', favSchema);
module.exports = Favorite;
