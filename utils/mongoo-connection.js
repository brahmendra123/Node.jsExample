var mongoose = require('mongoose'),
    signUpSchema = new mongoose.Schema({
        name: String,
        email: String,
        password: String
    }),
    User = mongoose.model('Error', signUpSchema);


module.exports = User;