require("../scss/style.scss");

const testNumber = 2016 + 11 + 19 + 0b1110011 + 0o1234;

window.loadAppModule = () => {
    require.ensure(['./app'], () => {
        const App = require('./app').default;
        (new App('appContainer')).init();
    });
};