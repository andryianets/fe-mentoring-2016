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
        id: String,
        name: String,
        description: String,
        url: String,
        category: String,
        language: String,
        country: String,
        urlsToLogos: [
            {small: String, medium: String, large: String}
        ]
    }
});

module.exports = articleSchema;