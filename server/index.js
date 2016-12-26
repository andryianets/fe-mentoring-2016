'use strict';

const express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    db = require('./model/db'),
    passport = require('passport');

const MongoStore = require('connect-mongo')(session);

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    name: 'appsid',
    secret: 'mentoring2016',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: db.connection}),
    cookie: {secure: false}
}));

passport.use('login', require('./passport_strategies/LoginStrategy'));
passport.use('reg', require('./passport_strategies/LoginStrategy'));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/articles', require('./routes/articles'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    return res.json({
        message: err.message
    });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`expressApp is listening on port ${port}`);
});

module.exports = app;