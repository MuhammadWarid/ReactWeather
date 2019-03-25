var React = require('react');

var WeatherMessage = React.createClass({
	render: function(){
		return(
			<div>
				<h4>It is 50°C in Maputo</h4>
			</div>
		);
	}
});

module.exports = WeatherMessage;