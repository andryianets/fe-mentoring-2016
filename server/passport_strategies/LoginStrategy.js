const passport = require('passport'),
    JsonStrategy = require('passport-json').Strategy,
    db = require('../model/db'),
    PassHelper = require('../helpers/PassHelper');

passport.serializeUser((user, done) => {
    done(null, user._id.toString());
});

passport.deserializeUser((_id, done) => {
    db.User.findOne({_id}, (err, user) => {
        done(err, user);
    });
});

module.exports = new JsonStrategy({
        usernameProp: 'login',
        passwordProp: 'pass',
    },
    (login, pass, done) => {

        db.User.findOne({login}, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }
            if (user.pass !== PassHelper.getPassHash(pass)) {
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done(null, user);
        });
    });
