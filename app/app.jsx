var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main');

// Load jquery and bootstrap
window.$ = window.jQuery = require("jquery");
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

// Custom SASS
require('./styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path = "/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);

// <Route path="about" component={About} />
// <Route path="examples" component={Examples} />
// <IndexRoute component={Weather} /> // sent as props.children till Main.jsx
