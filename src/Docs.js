// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var App = require('grommet/components/App');

var Docs = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Docs;
