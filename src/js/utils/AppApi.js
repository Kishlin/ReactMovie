var AppActions    = require('../actions/AppActions');
var AppConstants  = require('../constants/AppConstants');

module.exports = {
	searchMovies: function(movie) {
		$.ajax({
			url: 'https://api.themoviedb.org/3/search/movie?api_key=' + AppConstants.API_KEY + '&query=' + movie.title,
			dataType: 'json',
			cache: false,
			success: function(data) {
				AppActions.receiveMovieResults(data.results)
			}.bind(this),
			error: function(xhr, status, err) {
				alert(err);
			}.bind(this)
		});
	}
}