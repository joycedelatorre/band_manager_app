import React, { Component } from "react";
import API from "../../utils/API";
import Spotify from "./Spotify.js";

class User extends Component{
	// state ={
	// 	artist:"",
	// 	popularity:"",
	// 	markets:""
	// }

	// componentDidMount(){
	// 	this.loadBand();
	// }
	// loadBand =() =>{
	// 	API.getBand()
	// 		.then(res =>
	// 			this.setState({artist: res.data.tracks.items[0].album.artists[0].name})
	// 		).catch (err=> console.log(err));
	// };

	render(){
		return(
			<div className="User">
				{/*<h1>{this.state.artist}</h1>}*/}
			 	<Spotify username="beyonce"></Spotify>
			</div>
		)
	}

}

export default User;