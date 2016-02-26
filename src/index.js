// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./Home');

var element = document.getElementById('content');
ReactDOM.render(<Home />, element);

document.body.classList.remove('loading');
