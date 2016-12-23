const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    db = require('./model/db'),
    PassHelper = require('./helpers/PassHelper');

module.exports = new LocalStrategy(
    (login, password, done) => {
        db.User.findOne({login}, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }
            if (user.pass !== PassHelper.getPassHash(password)) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, user);
        });
    });
