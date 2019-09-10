import React, {Component} from 'react';

import './Card.css';

class Card extends Component {
	render(){
		return(
			<div className = "Card dib tc br3 ma2 pa3 grow bw2 shadow-5 ">
				<img alt = {`${this.props.username}`} 
					src = {`https://robohash.org/${this.props.id}test?200x200`} />
				<div>
					<h2>{this.props.name}</h2>
					<p>{this.props.email}</p>
				</div>
			</div>
		);
	}
}

export default Card;