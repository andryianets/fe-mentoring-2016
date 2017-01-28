require('../scss/style.scss');

window.loadAppModule = () => {
    require.ensure(['./react'], () => {
        require('./react');
    });
};

window.loadAdminPanelModule = () => {
    require.ensure(['./angular'], () => {
        require('./angular');
    });
};