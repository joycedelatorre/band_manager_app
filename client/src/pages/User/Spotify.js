import React, { Component } from 'react';
import API from "../../utils/API";

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
				this.setState({spotifyData: res.data,artist: band})
			).catch (err=> console.log(err));
	}

	render(){
		if(this.state.requestFailed)return <p>Failed!</p>
		if(!this.state.spotifyData)return <p>Loading...</p>	
		return(
			<div>
		   { this.state.spotifyData.tracks.items.map(function(album,i) {
           return <li key="">{album.name}</li>})
			}
			</div>
		)
	}
}

export default Spotify;