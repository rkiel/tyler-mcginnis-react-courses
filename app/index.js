var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.jsx');
var sentry = require('./config/sentry');

sentry.install();

ReactDOM.render(routes, document.getElementById('app'));
