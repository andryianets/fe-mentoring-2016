const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    author: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,
    source: {
        id: {type: String, index: true},
        name: String,
        description: String,
        url: String,
        category: {type: String, index: true},
        language: {type: String, index: true},
        country: {type: String, index: true},
        urlsToLogos: [
            {small: String, medium: String, large: String}
        ]
    }
});

module.exports = articleSchema;