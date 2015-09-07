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

	getInitialState: function (){
		return {
			notes: [
				'Make a phone call to Jim.',
				'Mail letters',
				'Buy a gift for Lisa',
				'Watch Lesson 12'
			]
		};
	},

	render: function() {
		return (
			React.createElement("div", {className: "noteboard"}, 
			 	React.createElement("p", null, "This is  a note board and has ", this.props.count, " notes."), 
			 	
			 		this.state.notes.map(function(note, i){
			 			return (
			 				React.createElement(Note, {key: i}, note)
			 			);
			 		})
			 	
		 	)
		);
	}
});