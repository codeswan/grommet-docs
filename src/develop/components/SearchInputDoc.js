// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Input = require('./Input');

var SearchInputDoc = React.createClass({

  getInitialState: function () {
    return {
      value: "one"
    };
  },

  _onChange: function (value, selected) {
    this.setState({value: value});
  },

  render: function() {
    return (
      <div>
        <p>Input</p>
        <Input value={this.state.value} onChange={this._onChange} />
        <p>{this.state.value}</p>
      </div>
    );
  }
});

module.exports = SearchInputDoc;
