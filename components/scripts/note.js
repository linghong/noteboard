	var React = require("react");

	module.exports = React.createClass({displayName: "exports",
		getInitialState: function(){
			return {editing:false};
		},

		edit: function(){
			this.setState ({editing: true});
		},
		save:function(){
			this.setState ({ editing: false});
		},
		remove: function (){
			alert ("remove note");
		},

		renderDisplay: function (){
			return(				
				React.createElement("div", {className: "note"}, 
					React.createElement("p", null, this.props.children), 
					React.createElement("span", null, 
						React.createElement("button", {onClick: this.edit, 
		                    className: "btn btn-success glyphicon glyphicon-pencil"}), 
		                React.createElement("button", {onClick: this.remove, 
		                    className: "btn btn-success glyphicon glyphicon-trash"})
		            )
		        )
		    )
		},

		renderForm: function(){
			return (
				React.createElement("div", {className: "note"}, 
					React.createElement("textarea", {className: "form-control", defaultValue: this.props.children}), 
					React.createElement("button", {onClick: this.save, className: "btn btn-success btn-sm glyphicon glyphicon-floppydisk"})
				)
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

