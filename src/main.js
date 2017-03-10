$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./Components/homepage.js');
var About = require('./Components/about/aboutPage');

(function(win) {
	"use strict";
	var App = React.createClass({
		render : function() {
			var Child;

			switch(this.props.route) {
				case 'about' : Child = About;
							   break;
			    default : Child = Home;
			}	
		
		return (
			<div>
				<Child/>
			</div>
		);

		}
	});

	function doRouting() {
		var route = win.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}


	win.addEventListener('hashchange', doRouting);
	doRouting();

})(window);

