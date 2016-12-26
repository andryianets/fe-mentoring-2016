const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sourceSchema = new Schema({
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
});

module.exports = sourceSchema;