var React = require('react');
var ReactHighcharts = require('react-highcharts');
var config =  {

    title: {
        text: 'Count Mismatch Graph'
    },

    yAxis: {
        title: {
            text: 'Count'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 2010
        }
    },

    series: [{
        name: 'Count Mismatch',
        data: [500, , 100, 400, 300, 234, 400, 700]
    }, ]

};

var Graph = React.createClass({

render : function () {
	return (
		<ReactHighcharts config = {config}></ReactHighcharts>
	);
}

});

module.exports = Graph;