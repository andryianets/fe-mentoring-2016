'use strict';

const MongoClient = require('mongodb').MongoClient;

const CONNECTION_URL = 'mongodb://heroku_bknz76p0:fehobrubla0lks29slb10mmoiq@ds119368.mlab.com:19368/heroku_bknz76p0';

MongoClient.connect(CONNECTION_URL, (err, db) => {
    getClassWithBestScore(db.collection('grades'))
        .then(result => {
            console.log(`Class ID with max avg score (${result.avg_score}) is ${result._id}`);
            db.close();
        })
        .catch(err => {
            console.error(err);
            db.close();
        });
});

function getClassWithBestScore(collection) {
    return new Promise((resolve, reject) => {
        collection.aggregate(
            [
                {
                    $unwind: '$scores'
                },
                {
                    $match: {
                        'scores.type': {$ne: 'quiz'}
                    }
                },
                {
                    $group: {
                        '_id': '$class_id',
                        avg_score: {$avg: '$scores.score'}
                    }
                },
                {
                    $sort: {
                        avg_score: -1
                    }
                },
                {
                    $limit: 1
                }
            ],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve((results && results.length) ? results[0] : false);
                }
            }
        );
    });
}