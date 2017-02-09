import 'whatwg-fetch';
import 'babel-polyfill';

import 'jquery';

import 'angular';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-aria';
import 'angular-messages';
import 'angular-resource';

import 'angular-ui-router';

import 'angular-xeditable';

import 'angular-strap';
import 'angular-strap/dist/angular-strap.tpl';

import 'angular-mocks/ngMock';

import './app';

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./app', true, /\.spec$/));
