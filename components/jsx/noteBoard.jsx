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

	update: function(newText, i){
		var noteArray = this.state.notes;
		noteArray[i] = newText;
		this.setState({notes: noteArray});
	},

	eachNote: function(note,i){
		return (
			 	<Note key={i} 
			 		index ={i} 
			 		onChange ={this.update}>
			 		{note}</Note>
			 	);
	},

	render: function() {
		return (
			<div className="noteboard">
			 	<p>This is  a note board and has {this.props.count} notes.</p>
			 	{this.state.notes.map(this.eachNote)}
		 	</div>
		);
	}
});