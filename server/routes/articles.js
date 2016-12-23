"use strict";

const express = require('express'),
    router = express.Router(),
    db = require('../model/db'),
    passport = require('passport');

router.get('/',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    }),
    (req, res) => {
        db.Article
            .findOne({
                'source.id': 'usa-today'
            })
            .exec()
            .then(articles => res.json(articles))
            .catch(error => res.status(500).json(err));
    });

module.exports = router;