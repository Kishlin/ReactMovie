var React      = require('react');

var Movie = React.createClass({
	render: function() {
		var thumbnail = this.props.movie.poster_path ?
			'https://image.tmdb.org/t/p/w500' + this.props.movie.poster_path :
			''
		;
		var link = 'https://www.themoviedb.org/movie/' + this.props.movie.id;

		return(
			<div className="well">
				<div className="row">
					<div className="col-md-4">
						<img className="thumbnail" alt={this.props.movie.title} src={thumbnail} />
					</div>
					<div className="col-md-8">
						<h4>{this.props.movie.title}</h4>
						<ul className="list-group">
							<li className="list-group-item">Release Date: {this.props.movie.release_date}</li>
							<li className="list-group-item">Rating: {this.props.movie.vote_average * 10}</li>
							<li className="list-group-item">Vote Count: {this.props.movie.vote_count}</li>
						</ul>
						<p>{this.props.movie.overview}</p>
						<a className='btn btn-primary' href={link} target='_blank'>View on The Movie DB.</a>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Movie;