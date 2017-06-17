var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var SearchForm   = require('./SearchForm.jsx');
var MovieResults = require('./MovieResults.jsx');

function getAppState() {
	return {
		movies: AppStore.getMovieResults()
	}
}

var App = React.createClass({
	getInitialState: function() {
		return getAppState();
	},

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

	render: function() {
		if(!this.state.movies.length) {
			var movieResults = '';
		} else {
			var movieResults = <MovieResults movies={this.state.movies} />
		}

		return(
			<div>
				<SearchForm />
				{movieResults}
			</div>
		);
	},

	_onChange: function() {
		this.setState(getAppState());
	}
});

module.exports = App;