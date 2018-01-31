import React, { Component } from 'react';
import API from "../utils/API";

class Spotify extends Component {
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
		API.getBand(band)
			.then(res =>
				this.setState({spotifyData: res.data})
			).catch (err=> console.log(err));
	}

	render(){
		if(this.state.requestFailed)return <p>Failed!</p>
		if(!this.state.spotifyData)return <p>Loading...</p>	
		return(
			<div>
				<img style={{ width: '300px'}}src={this.state.spotifyData.artists.items[0].images[0].url}/>
				<h1>{this.state.spotifyData.artists.items[0].name}</h1>
				<h3>Genre: {this.state.spotifyData.artists.items[0].genres[0]}</h3>
				<h3>Popularity: {this.state.spotifyData.artists.items[0].popularity}</h3>
				<h3>Followers: {this.state.spotifyData.artists.items[0].followers.total}</h3>
			</div>
		)
	}
}

export default Spotify;