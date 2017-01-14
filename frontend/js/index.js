require('../scss/style.scss');

window.loadAppModule = () => {
    require.ensure(['./react'], () => {
        require('./react');
    });
};