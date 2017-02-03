require('../scss/style.scss');

window.loadAppModule = (appName) => {
    document.getElementById('startApp').innerHTML = '';
    switch (appName) {
        case 'react':
            require.ensure(['./react'], () => {
                require('./react');
            });
            break;

        case 'angular':
            require.ensure(['./angular'], () => {
                require('./angular');
            });
            break;
    }
};

