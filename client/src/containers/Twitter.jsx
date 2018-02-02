import React, { Component } from 'react';
import API from "../utils/API";

		class Twitter extends Component {
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
				this.setState({chartData: res.data.artist.stats.listeners})
			).catch (err=> console.log(err));
	}

loadBand =(band) =>{
		API.getChart(band)
			.then(res =>
				console.log(res.data.artist.stats.listeners)
			).catch (err=> console.log(err));
	}


	render(){
		if(this.state.requestFailed)return <p>Failed!</p>
		if(!this.state.chartData)return <p>Loading...</p>	
		return(
			<div>
				<h1>Top Listeners</h1>
				<h1>{this.state.chartData}</h1>
			</div>
		)
	}
}

export default Twitter;	

