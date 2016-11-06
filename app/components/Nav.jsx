var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function(){
    var styleActive = { color: '#9C27B0', backgroundColor: '#ececec' };
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Counter App</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><IndexLink to="/" activeClassName="active" activeStyle={styleActive}>X</IndexLink></li>
                <li><IndexLink to="/a" activeClassName="active" activeStyle={styleActive}> A</IndexLink></li>
                <li><IndexLink to="/b" activeClassName="active" activeStyle={styleActive}> B</IndexLink></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">by redStar</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Nav;
