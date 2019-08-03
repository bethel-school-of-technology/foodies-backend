var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema;({
    id: {
    type: String,
    required: true,
    },
    password: {
        type: String, 
        required: true,
    }
});

var Users = mongoose.model('Users', UsersSchema);
module.exports = Users;