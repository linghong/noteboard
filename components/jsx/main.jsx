
var React = require('react');
var Note = require('./note');
React.render(
	<Note text="Note">This is note text</Note>
	, document.getElementById('react-container')
);