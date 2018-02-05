import React, { Component } from 'react';
import API from "../utils/API";

class Twitter extends Component {
	constructor(props){
		super(props)
		this.state ={
			requestFailed: false,
			tweeterData: ""
		};
	}
	componentDidMount(){
		 	this.loadBand(this.props.username);
	}

	loadBand =(band) =>{
		API.getTwitter(band)
			.then(res =>
				this.setState({tweeterData: res.tweet.text})
			).catch (err=> console.log(err));
	}



	render(){
		if(this.state.requestFailed)return <p>Failed!</p>
		if(!this.state.tweeterData)return <p>Loading...</p>	
		return(
			<div>
				<h1>Tweets:{this.state.tweetertData}</h1>
			</div>
		)
	}
}

export default Twitter;	

