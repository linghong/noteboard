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
	render: function(){
	 return <div className="noteboard">
	 	<p>This is  a note board and has {this.props.count} notes.</p>
	 	<Note text="Note">This is a note text</Note>
	 </div>
	}
})