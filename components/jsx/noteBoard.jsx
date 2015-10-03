var React = require('react');
var Note = require('./note');
module.exports = React.createClass({
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

	addNote: function(text) {
		var noteArray =this.state.notes;
		noteArray.push(text);
		this.setState({notes: noteArray});
	},

	updateNote: function(newText, i){
		var noteArray = this.state.notes;
		noteArray[i] = newText;
		this.setState({notes: noteArray});
	},

	////delete the clicked one from the noteArray
	removeNote: function(i){
		var noteArray = this.state.notes;
		noteArray.splice(i, 1); 
		this.setState({notes: noteArray});
		console.log(noteArray);
	},

	countNote: function() {
		var noteArray = this.state.notes;
		console.log("length");
		return noteArray.length;
	},
	eachNote: function(note,i){
		return (
			 	<Note key={i} 
			 		index ={i} 
			 		onChange = {this.updateNote}
			 		onRemove = {this.removeNote}
			 	>
			 		{note}
			 	</Note>
			 	);
	},

	render: function() {
		return (
			<div className="noteboard">
			 	<p>This is  a note board and has {this.countNote()} notes.</p>
			 	{this.state.notes.map(this.eachNote)}
			 	<button className="btn glyphicon-plus" onClick={this.addNote.bind(null, "New Note")}/>
		 	</div>
		);
	}
});