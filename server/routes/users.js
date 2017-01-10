'use strict';

const express = require('express'),
    router = express.Router(),
    db = require('../model/db'),
    AccessHelper = require('../helpers/AccessHelper');


router.get('/', AccessHelper.hasRole(['admin']),
    (req, res) => {
        db.User
            .find(req.query)
            .exec()
            .then(users => res.json(users))
            .catch(error => res.status(500).json(err));
    });


module.exports = router;