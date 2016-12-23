const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://heroku_bknz76p0:fehobrubla0lks29slb10mmoiq@ds119368.mlab.com:19368/heroku_bknz76p0');
// mongoose.connect('mongodb://localhost:27017/test');

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
    console.log('DB connection established');
});

module.exports = {
    connection,
    Article: mongoose.model('posts', require('./schemes/Article')),
    User: mongoose.model('users', require('./schemes/User'))
};

