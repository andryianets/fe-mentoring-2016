'use strict';

const express = require('express'),
    router = express.Router(),
    db = require('../model/db'),
    AccessHelper = require('../helpers/AccessHelper');

router.get('/sources', AccessHelper.hasRole(['user', 'admin']),
    (req, res) => {

        const params = {};

        for (let key in req.query) {
            params[`source.${key}`] = req.query[key];
        }

        db.Article
            .find(params)
            .distinct('source')
            .exec()
            .then(sources => res.json(sources))
            .catch(error => res.status(500).json(err));
    });

router.get('/', AccessHelper.hasRole(['user', 'admin']),
    (req, res) => {
        db.Article
            .find({
                'source.id': req.query.sourceId
            })
            .exec()
            .then(articles => res.json(articles))
            .catch(error => res.status(500).json(err));
    });

module.exports = router;