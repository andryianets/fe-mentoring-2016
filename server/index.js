const express = require('express'),
    session = require('express-session'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    db = require('./model/db'),
    passport = require('passport');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(logger('dev'));

app.use(session({
    secret: 'mentoring2016',
    resave: false,
    saveUninitialized: true,
    //cookie: { secure: true }
}));
passport.use(require('./PassportStrategy'));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

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
    return res.json(err);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`expressApp is listening on port ${port}`);
});

module.exports = app;