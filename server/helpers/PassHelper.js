const crypto = require('crypto');

module.exports = {
    getPassHash(pass) {
        return crypto.createHash('md5').update(pass).digest("hex");
    }
};