var React = require('react');
var Note = require('./note');
module.exports = React.createClass({displayName: "exports",
	propTypes: {
		count: function (props, propName){
			if (typeof props[propName] !== "number"){
				return new Error('The count must be a number!');
			}
		}
	},
	render: function(){
	 return React.createElement("div", {className: "noteboard"}, 
	 	React.createElement("p", null, "This is  a note board and has ", this.props.count, " notes."), 
	 	React.createElement(Note, {text: "Note"}, "This is a note text")
	 )
	}
})