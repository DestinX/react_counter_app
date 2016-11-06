var React = require('react');
var Nav = require('./Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 text-center">
            Main.jsx render..
            {props.children}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

    </div>
  );
};

module.exports = Main;
