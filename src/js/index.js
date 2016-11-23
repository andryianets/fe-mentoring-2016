import 'whatwg-fetch';
import "babel-polyfill";
import App from "./app";
require("../scss/style.scss");

const testNumber = 2016 + 11 + 19 + 0b1110011 + 0o1234;
(new App()).init();