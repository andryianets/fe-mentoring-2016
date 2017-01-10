const passport = require('passport'),
    JsonStrategy = require('passport-json').Strategy,
    db = require('../model/db'),
    AccessHelper = require('../helpers/AccessHelper');

module.exports = new JsonStrategy({
        usernameProp: 'login',
        passwordProp: 'pass',
    },
    (login, pass, done) => {

        db.User.findOne({login})
            .then(user => {
                if (user) {
                    return done(null, false, {message: 'Login is busy!'});
                }

                const newUser = new db.User({
                    login,
                    pass: AccessHelper.getPassHash(pass),
                    role: 'user',
                    created: new Date()
                });

                newUser
                    .save()
                    .then(() => done(null, newUser))
                    .catch(done);

            })
            .catch(done);

    });
