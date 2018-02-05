import React, { Component } from 'react';
import Anime from 'react-anime';
import API from "../utils/API";

class Listener extends Component {
	constructor(props){
		super(props)
		this.state ={
			requestFailed: false
		};
	}
	componentDidMount(){
		 	this.loadBand(this.props.username);
	}

	loadBand =(band) =>{
		API.getChart(band)
			.then(res =>
				this.setState({chartData: res.data.stats})
			).catch (err=> console.log(err));
	}



	render(){
		if(this.state.requestFailed)return <p>Failed!</p>
		if(!this.state.chartData)return <p>Loading...</p>	
		return(
			<div>
				<Anime 	easing='easeInOutExpo'
						opacity={[0, 1]} 
						translateY={'.3em'} 
						delay={(e, i) => i * 800}>
				<h3>Listeners : {this.state.chartData.listeners}</h3>
				<h3>Playcount : {this.state.chartData.playcount}</h3>

				</Anime>
			</div>
		)
	}
}

export default Listener;	

