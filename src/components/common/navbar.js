"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var navbar = React.createClass({	
	render : function () {			
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
  				<div className="container-fluid">
   					<ul className="nav navbar-nav">    					
   						<li ><Link to="app">Home</Link></li>   					
   						<li ><Link to="about">About</Link></li> 
   						<li ><Link to="country">Country</Link></li>   						
					</ul>
 			 	</div>
			</nav>
		);
	}
});

module.exports = navbar;