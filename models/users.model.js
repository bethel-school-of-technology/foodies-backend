var mongoose = require('mongoose');

var usersSchema = mongoose.Schema;({
    id: {
    type: String,
    required: true,
    },
    password: {
        type: String, 
        required: true,
    }
});
var Users = mongoose.model('Users', usersSchema);
module.exports = Users;