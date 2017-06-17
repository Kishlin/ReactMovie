var React      = require('react');

var Movie = require('./Movie.jsx');

var MovieResults = React.createClass({
	render: function() {
		var movies = this.props.movies.map(function(movie) {
			return <Movie movie={movie} key={movie.id} />
		});

		return(
			<div>
				<h3 className="text-center">Results</h3>
				{movies}
			</div>
		);
	}
});

module.exports = MovieResults;