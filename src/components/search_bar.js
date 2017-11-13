import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.value = { term: '' };
	}

	render() {
		return <input onChange={this.onInputChange} />
	}

	onInputChange(event) {
		this.setState({
			...this.state,
			term: event.target.value,
		});
	}
}

export default SearchBar;
