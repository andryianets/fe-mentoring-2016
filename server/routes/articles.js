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
            .find(req.query)
            .exec()
            .then(articles => res.json(articles))
            .catch(error => res.status(500).json(err));
    });

router.get('/:id', AccessHelper.hasRole(['user', 'admin']),
    (req, res) => {
        db.Article
            .findOne({_id: req.params.id})
            .exec()
            .then(article => res.json(article))
            .catch(error => res.status(500).json(err));
    });

router.put('/:id', AccessHelper.hasRole(['admin']),
    (req, res) => {
        db.Article
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .exec()
            .then(result => res.json({result}))
            .catch(error => res.status(500).json(err));
    });

router.post('/', AccessHelper.hasRole(['admin']),
    (req, res) => {
        const newArticle = new db.Article(req.body);

        newArticle
            .save()
            .then(result => res.json(result))
            .catch(error => res.status(500).json(err));

    });

router.delete('/:id', AccessHelper.hasRole(['admin']),
    (req, res) => {
        db.Article
            .remove({_id: req.params.id})
            .exec()
            .then(result => res.json({result}))
            .catch(error => res.status(500).json(err));
    });

module.exports = router;