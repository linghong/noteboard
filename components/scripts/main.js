
var React = require('react');
var NoteBoard = require('./noteBoard');
React.render(
	React.createElement(NoteBoard, null), document.getElementById('react-container')
);