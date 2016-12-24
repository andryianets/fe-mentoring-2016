const express = require('express'),
    router = express.Router(),
    db = require('../model/db');

router.get('/',
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