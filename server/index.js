const express = require('express');
const expressApp = express();

expressApp.use(express.static('dist'));

const port = process.env.PORT || 8080;

expressApp.listen(port, () => {
    console.log(`expressApp is listening on port ${port}`);
});