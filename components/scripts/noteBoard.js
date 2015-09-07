var React = require('react');
var Note = require('./note');
module.exports = React.createClass({displayName: "exports",

	render: function(){
	 return React.createElement("div", {className: "noteboard"}, 
	 	React.createElement("p", null, "This is  a note board."), 
	 	React.createElement(Note, {text: "Note"}, "This is a note text")
	 )
	}
})