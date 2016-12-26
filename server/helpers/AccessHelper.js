const crypto = require('crypto');

module.exports = {

    getPassHash(pass) {
        return crypto.createHash('md5').update(pass).digest("hex");
    },

    hasRole(roles) {
        return (req, res, next) => {
            if (req.user && roles.indexOf(req.user.role) > -1) {
                next();
            } else {
                res.status(403).json({message: 'Access forbidden'});
            }
        }
    }

};