
var React = require('react');
var NoteBoard = require('./noteBoard');
React.render(
	<NoteBoard count ={4} />, document.getElementById('react-container')
);