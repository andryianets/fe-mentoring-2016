'use strict';

const express = require('express'),
    router = express.Router(),
    React = require('react'),
    renderToString = require('react-dom/server').renderToString;

import Article from '../../frontend/js/react/components/ServerRenderedArticle';

router.get('/', (req, res) => {

    const articleData = {
        title: 'React rendering ' + new Date(),
        url: 'http://tut.by',
        urlToImage: 'https://img.tyt.by/p/0d/f/logo_tutby_startapy_21.01.png',
        publishedAt: (new Date()).toISOString(),
        source: {
            id: 'usa-today',
            category: 'general',
            language: 'en',
            country: 'us'
        }
    };

    res.end(
        renderToString(<Article data={articleData}/>)
    );
});


module.exports = router;