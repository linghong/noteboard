var React = require('react');
var Note = require('./note');
module.exports = React.createClass({

	render: function(){
	 return <div className="noteboard">
	 	<p>This is  a note board.</p>
	 	<Note text="Note">This is a note text</Note>
	 </div>
	}
})