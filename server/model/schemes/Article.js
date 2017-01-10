const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sourceSchema = require('./Source');

const articleSchema = new Schema({
    title: String,
    author: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,
    source: sourceSchema
});

module.exports = articleSchema;