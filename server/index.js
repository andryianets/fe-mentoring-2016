const express = require('express');
const expressApp = express();

expressApp.use(express.static('dist'));

expressApp.listen(8000, () => {
    console.log('expressApp is listening on port 8000');
});