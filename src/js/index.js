require('../scss/style.scss');

const testNumber = 2016 + 11 + 19 + 0b1110011 + 0o1234;

window.loadAppModule = () => {
    require.ensure(['./App'], () => {
        const App = require('./App').default;
        App.getInstance('#appContainer');
    });
};