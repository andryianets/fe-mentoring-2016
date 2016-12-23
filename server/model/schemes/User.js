const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PassHelper = require('../../helpers/PassHelper');

const userSchema = new Schema({
    login: String,
    pass: String,
    role: String,
    created: Date,
    urlToImage: String,
});

module.exports = userSchema;