// (C) Copyright 2014 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this._onInputChange = this._onInputChange.bind(this);

    this.state = {
      value: props.value
    };
  }

  _onInputChange (event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value, false);
    }
  }

  render () {
    return (
      <div>
        <input
          value={this.props.value}
          onChange={this._onInputChange} />
      </div>
    );
  }
}
