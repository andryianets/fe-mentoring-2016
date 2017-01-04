require('../scss/style.scss');

window.loadAppModule = () => {
    require.ensure(['./App'], () => {
        const App = require('./App').default;
        App.getInstance('#appContainer');
    });
};