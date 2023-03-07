const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userCredSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    
}, { timestamps: true });


const UserCred = mongoose.model('AuthTable', userCredSchema);

module.exports = UserCred;