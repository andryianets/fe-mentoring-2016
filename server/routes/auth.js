const router = require('express').Router(),
    passport = require('passport');

router.get('/',
    (req, res) => {
        return req.isAuthenticated() ? res.json(req.user) : res.status(401).json({});
    }
);

router.post('/', passport.authenticate('login'),
    (req, res) => {
        res.json(req.user);
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;