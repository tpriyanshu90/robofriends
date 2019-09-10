import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
	render(){
		return(
			<div className="pa2">
				<h1 className="f1">RoboFriends</h1>
				<input className="pa3 ba b--green"
					   type="search"
					   placeholder="search robots"
					   onChange = {this.props.searchChange} />
			</div>
		);
	}
}

export default SearchBox;