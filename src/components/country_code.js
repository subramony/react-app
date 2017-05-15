var React = require('react');
var Select = require('react-select');
var country_codes = require('./country.js').countryCodes;
var storeNumbers = require('./country.js').storeNumbers;
var eventType = require('./country.js').eventType;
var Graph = require('./graph.js');


var country = React.createClass({		
	render : function() {
		return (
			<div className="jumbotron">
				This is Country Page
			</div>
		)
	}
});

module.exports = country;