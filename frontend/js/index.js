// require('../scss/style.scss');
//
// window.loadAppModule = (appName) => {
//     switch (appName) {
//         case 'react':
//             require.ensure(['./react'], () => {
//                 require('./react');
//             });
//             break;
//
//         case 'angular':
//             require.ensure(['./angular'], () => {
//                 require('./angular');
//             });
//             break;
//     }
// };

document.getElementById('startApp').innerHTML = '';
require('./angular');
