/*
* Module dependencies
*/

import React from 'react';
import PokeAvatar from './PokeAvatar';

export default class PokeRow extends React.Component{
	render() {
		return <li>
			<PokeAvatar number={this.props.number}/>
			{this.props.name}
		</li>	
	}
}