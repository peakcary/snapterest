var React = require('react');
var ReactDOM = require('react-dom');

var h1 = React.createElement('h1',{className:"header"},"This is React");
var p = React.createElement('p',{className:"content"},"This is content");
var section = React.createElement('section',{className:"container"},[h1,p])


ReactDOM.render(section,document.getElementById('react-application'));
