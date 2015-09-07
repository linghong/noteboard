
var React = require('react');
var NoteBoard = require('./noteBoard');
React.render(
	React.createElement(NoteBoard, {count: 4}), document.getElementById('react-container')
);