import React, { Component } from 'react';
import API from "../../utils/API";

const urlForUsername = username => 
	`https://api.github.com/users/${username}`

class Spotify extends Component {
	constructor(props){
		super(props)
		this.state ={
			requestFailed: false
		}
	}
	componentDidMount(){
		// fetch(urlForUsername(this.props.username))
		// 	.then(response => {
		// 		if(!response.ok){
		// 			throw Error("Network request failed")
		// 		}
		// 		return response
		// 	})
		// 	.then(d => d.json())
		// 	.then(d => {
		// 		this.setState({
		// 			githubData: d
		// 		})
		// 	}, () =>{
		// 		this.setState({
		// 			requestFailed: true
		// 		})
		// 	})
		 	this.loadBand(this.props.username);
	}


// 				<h2>{this.state.githubData}</h2>

	loadBand =(band) =>{
		API.getBand(band)
			.then(res =>
				this.setState({githubData: res.data,artist: band})
			).catch (err=> console.log(err));
	}

	render(){
		if(this.state.requestFailed)return <p>Failed!</p>
		if(!this.state.githubData)return <p>Loading...</p>	
		return(
			<div>
			     {
                this.state.githubData.tracks.items.map(function(album,i) {
                    return <li key="">{album.name}</li>
                })
            }
			</div>
		)
	}
}

export default Spotify;