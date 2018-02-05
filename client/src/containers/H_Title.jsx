import React, { Component } from 'react';
import Anime from 'react-anime';

class H_Title extends Component {
	constructor(props){
		super(props)
	};

	render(){
		return(
		<div>
				<Anime 	easing='easeInOutExpo'
						opacity={[0, 1]} 
						translateY={'.3em'} 
						delay={(e, i) => i * 800}>
				<h2>Band Manager</h2>
				</Anime>
		</div>
		)
	}
}

export default H_Title;	

