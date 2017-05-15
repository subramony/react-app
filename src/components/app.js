
$ = jQuery = require('jquery');
var React = require('react');
var Header = require('./common/navbar.js');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({	
	render : function () {
		return (
			<div>				
				<div className="container-fluid">
					<Header/>
					<RouteHandler/>
				</div>
			</div>
		);
	}
});
module.exports = App;
