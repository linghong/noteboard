
var React = require('react');
var Note = require('./note');
React.render(
	React.createElement(Note, {text: "Note"}, "This is note text")
	, document.getElementById('react-container')
);