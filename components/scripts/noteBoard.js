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

	update: function(newText, i){
		var noteArray = this.state.notes;
		noteArray[i] = newText;
		this.setState({notes: noteArray});
	},

	////delete the clicked one from the noteArray
	remove: function(i){
		var noteArray = this.state.notes;
		noteArray.splice(i, 1); 
		this.setState({notes: noteArray});
		console.log(noteArray);
	},

	count: function() {
		var noteArray = this.state.notes;
		console.log("length");
		return noteArray.length;
	},
	eachNote: function(note,i){
		return (
			 	React.createElement(Note, {key: i, 
			 		index: i, 
			 		onChange: this.update, 
			 		onRemove: this.remove
			 	}, 
			 		note
			 	)
			 	);
	},

	render: function() {
		return (
			React.createElement("div", {className: "noteboard"}, 
			 	React.createElement("p", null, "This is  a note board and has ", this.count(), " notes."), 
			 	this.state.notes.map(this.eachNote)
		 	)
		);
	}
});