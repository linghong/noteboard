	var React = require("react");

	module.exports = React.createClass({
		getInitialState: function(){
			return {editing:false};
		},

		edit: function(){
			this.setState ({editing: true});
		},
		save:function(){
			var val = this.refs.newText.getDOMNode().value;
			alert('Do you want to save the text " '+ val +' " ?');
			this.setState ({ editing: false});
		},
		remove: function (){
			alert ("remove note");
		},

		renderDisplay: function (){
			return(				
				<div className ="note">
					<p>{this.props.children}</p>
					<span>
						<button onClick = {this.edit}
		                    className="btn btn-success glyphicon glyphicon-pencil" />
		                <button onClick = {this.remove}
		                    className="btn btn-success glyphicon glyphicon-trash"/>
		            </span>
		        </div>
		    )
		},

		renderForm: function(){
			return (
				<div className="note">
					<textarea ref="newText" className="form-control" defaultValue = {this.props.children}></textarea>
					<button onClick = {this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppydisk"/>
				</div>
			)
		},

		render: function(){
			if (this.state.editing){
				return this.renderForm();
			} else {
				return this.renderDisplay();
			}			
		}
	});

