import React, { Component } from 'react';
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
				<h2>Listeners : {this.state.chartData.listeners}</h2>
				<h2>Playcount : {this.state.chartData.playcount}</h2>
			</div>
		)
	}
}

export default Listener;	

