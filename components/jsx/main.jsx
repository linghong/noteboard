
var React = require('react');
var NoteBoard = require('./noteBoard');
React.render(
	<NoteBoard count ={10} />, document.getElementById('react-container')
);