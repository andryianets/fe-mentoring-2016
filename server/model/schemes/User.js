const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {type: String, index: true, unique: true},
    pass: String,
    role: {type: String, index: true},
    created: Date
});

module.exports = userSchema;