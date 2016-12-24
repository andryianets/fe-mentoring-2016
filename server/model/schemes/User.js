const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: String,
    pass: String,
    role: String,
    created: Date
});

module.exports = userSchema;